﻿using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using Il2CppInterop.Runtime;
using Il2CppSystem;
using Il2CppSystem.Threading.Tasks;
using Action = System.Action;
using Exception = System.Exception;
namespace BTD_Mod_Helper.Api;

/// <summary>
/// A class that can be generated by your mod in order to statically load a big complex Model object in your mod, like Ninja Kiwi does with the whole GameModel
/// </summary>
public abstract partial class ModByteLoader : ModContent
{
    internal static bool loadedAllBytes;

    internal static Task currentLoadTask;

    /// <summary>
    /// The array of object that NinjaKiwi programmed the loader to utilize
    /// </summary>
    protected object[] m;

    /// <summary>
    /// Whether the Result has been Loaded yet
    /// </summary>
    public bool Loaded { get; private set; }

    /// <summary>
    /// The Task responsible for loading the bytes in the background
    /// </summary>
    protected Task LoadTask { get; private set; }

    /// <summary>
    /// The bytes that will be loaded from
    /// </summary>
    protected byte[] Bytes { get; private set; }

    /// <summary>
    /// The file name of the bytes file within your project.
    /// <br/>
    /// <b>Remember to add it as an embedded resource!</b>
    /// </summary>
    protected abstract string BytesFileName { get; }


    /// <inheritdoc />
    public sealed override int RegisterPerFrame => 999;

    /// <inheritdoc />
    public override void Register()
    {
    }

    internal abstract void OnBytesLoaded();

    internal static void OnUpdate()
    {
        if (ModHelper.FallbackToOldLoading && loadedAllBytes || currentLoadTask is {IsCompleted: false}) return;

        if (GetContent<ModByteLoader>().FirstOrDefault(loader => !loader.Loaded) is { } modByteLoader)
        {
            currentLoadTask = modByteLoader.LoadTask = Task.Run(new Action(() => modByteLoader.LoadAllBytes()));
        }
        else
        {
            loadedAllBytes = true;
        }
    }

    internal void LoadAllBytes()
    {
        try
        {
            OnBytesLoaded();
            ModHelper.Log($"{Name} finished loading bytes");

            // Free up the memory
            m = null;
            Bytes = null;
        }
        catch (Exception e)
        {
            ModHelper.Error($"{Name} failed loading bytes");
            ModHelper.Error(e);
        }
        finally
        {
            Loaded = true;
        }
    }

    /// <summary>
    /// Set up the bytes when this is loaded
    /// </summary>
    /// <returns></returns>
    public sealed override IEnumerable<ModContent> Load()
    {
        var streamName = mod.GetAssembly().GetManifestResourceNames()
            .FirstOrDefault(s => s.EndsWith(BytesFileName));
        if (streamName == null)
        {
            ModHelper.Warning($"Couldn't find bytes file {BytesFileName} in Assembly {mod.GetModName()}. " +
                              "Did you forget to include it as an embedded resource?");
        }
        else
        {
            Bytes = mod.GetAssembly().GetManifestResourceStream(streamName)?.GetByteArray();
            if (Bytes != null)
            {
                yield return this;
            }
        }
    }

    private static readonly string[] References =
    {
        "Il2CppAssets.Scripts.Models.Towers.TargetType"
    };

    private static readonly string[] Structs =
    {
        "Il2CppAssets.Scripts.Simulation.SMath.Vector3"
    };

    private static readonly string[] Enums =
    {
        "Il2CppAssets.Scripts.Models.Towers.TowerModel.TowerSize",
        "Il2CppAssets.Scripts.Models.Map.AreaType",
        "Il2CppAssets.Scripts.Models.TowerSets.TowerSet"
    };

    private static readonly string[] AssetRefTypes =
    {
        "SpriteReference",
        "PrefabReference",
        "AudioSourceReference"
    };

    /// <summary>
    /// Converts a generated Loader using normal System data structures to one that uses IL2Cpp ones
    /// </summary>
    private static void ConvertLoader<T>(string unconvertedLoader, string convertedLoader, string className,
        string bytesFileName, string nameSpace = null) where T : Object
    {
        using var reader = new StreamReader(unconvertedLoader);
        var loader = reader.ReadToEnd();

        loader = "// Generated by FlatFileCodeGen + ModByteLoader\n" +
                 "using Il2CppInterop.Runtime;\n" +
                 "using Il2CppInterop.Runtime.InteropTypes;\n" +
                 "using Il2CppInterop.Runtime.InteropTypes.Arrays;\n" +
                 "using BTD_Mod_Helper.Extensions;\n" +
                 "using BTD_Mod_Helper.Api;\n" +
                 "using Il2Cpp;\n" +
                 (string.IsNullOrEmpty(nameSpace) ? "" : $"\nnamespace {nameSpace};\n") +
                 loader;
        loader = loader.Replace($"{Il2CppType.Of<T>().Name}Loader : IGameModelLoader",
            $"{className} : {nameof(ModByteLoader)}<{Il2CppType.Of<T>().FullName}>");
        loader = loader.Replace("Assets", "Il2CppAssets");
        loader = loader.Replace("using System", "using Il2CppSystem");
        loader = loader.Replace("using Il2CppSystem.IO", "using System.IO");
        loader = Regex.Replace(loader, @"private void (.*)<T>\(\) {",
            @"private void $1<T>() where T : Il2CppObjectBase {");

        loader = loader.Replace("samplesField.SetValue(v,(System.Single[]) m[br.ReadInt32()]);",
            "v.samples = (System.Single[]) m[br.ReadInt32()];");

        loader = loader.Replace("T[]", "Il2CppReferenceArray<T>");
        loader = loader.Replace("new string[arrCount]", "new Il2CppStringArray(arrCount)");
        loader = loader.Replace("System.String[]", "Il2CppStringArray");
        loader = loader.Replace("System.Single[]", "Il2CppStructArray<float>");
        loader = loader.Replace("System.Int32[]", "Il2CppStructArray<int>");
        loader = loader.Replace("new int[arrCount]", "new Il2CppStructArray<int>(arrCount)");
        loader = loader.Replace("new float[arrCount]", "new Il2CppStructArray<float>(arrCount)");
        loader = loader.Replace("new T[br.ReadInt32()]", "new Il2CppReferenceArray<T>(br.ReadInt32())");
        loader = loader.Replace("(T)FormatterServices.GetUninitializedObject(t)",
            "FormatterServices.GetUninitializedObject(t).Cast<T>()");
        loader = Regex.Replace(loader, @"typeof\(([A-Z].*)\)", @"Il2CppType.Of<$1>()");
        loader = loader.Replace(
            "arr[j] = new Il2CppAssets.Scripts.Models.Towers.TargetType(br.ReadString(), br.ReadBoolean())",
            "arr[j] = new Il2CppAssets.Scripts.Models.Towers.TargetType {id = br.ReadString(), isActionable = br.ReadBoolean()}");
        loader = loader.Replace(
            "v.targetType = new Il2CppAssets.Scripts.Models.Towers.TargetType(br.ReadString(), br.ReadBoolean());",
            "v.targetType.id = br.ReadString();\n\t\t\tv.targetType.actionOnCreate = br.ReadBoolean();");

        loader = loader.Replace("\tpublic", "\tprotected override");
        loader = loader.Replace("object[] m;",
            $"protected override string BytesFileName => \"{bytesFileName}\";");

        foreach (var r in References)
        {
            loader = loader.Replace($"{r}[arrCount]", $"Il2CppReferenceArray<{r}>(arrCount)");
            loader = loader.Replace($"{r}[]", $"Il2CppReferenceArray<{r}>");
        }

        foreach (var s in Structs)
        {
            loader = loader.Replace($"{s}[arrCount]", $"Il2CppStructArray<{s}>(arrCount)");
            loader = loader.Replace($"{s}[]", $"Il2CppStructArray<{s}>");
        }

        loader = Regex.Replace(loader, @"SetValue\(v\,br\.ReadInt32\(\)\)",
            @"SetValue(v,br.ReadInt32().ToIl2Cpp())");
        loader = Regex.Replace(loader, @"SetValue\(v\,br\.ReadSingle\(\)\)",
            @"SetValue(v,br.ReadSingle().ToIl2Cpp())");
        loader = Regex.Replace(loader, @"SetValue\(v\,br\.ReadBoolean\(\)\)",
            @"SetValue(v,br.ReadBoolean().ToIl2Cpp())");

        loader = Regex.Replace(loader, @"\(([A-Z].+)\[\]\)", @"(Il2CppReferenceArray<$1>)");
        
        foreach (var e in Enums)
        {
            loader = loader.Replace($"(Il2CppReferenceArray<{e}>)", $"({e}[])");
        }

        foreach (var assetReference in AssetRefTypes)
        {
            loader = Regex.Replace(loader, $"new Il2CppAssets\\.Scripts\\.Utils\\.{assetReference}\\((.+)\\)",
                $"ModContent.Create{assetReference}($1)");
            loader = loader.Replace($"(Il2CppReferenceArray<Il2CppAssets.Scripts.Utils.{assetReference}>)",
                $"(Il2CppAssets.Scripts.Utils.{assetReference}[])");
        }

        using var writer = new StreamWriter(convertedLoader);
        writer.Write(loader);
    }
}

/// <inheritdoc />
public abstract class ModByteLoader<T> : ModByteLoader where T : Object
{
    private T result;

    /// <summary>
    /// The NinjaKiwi generated method that loads the bytes
    /// </summary>
    protected abstract T Load(byte[] bytes);

    internal sealed override void OnBytesLoaded()
    {
        result = Load(Bytes!);
    }

    /// <summary>
    /// Gets the result of the loader. Waits for loading to finish if need be.
    /// </summary>
    /// <returns></returns>
    public T LoadResult()
    {
        LoadTask?.Wait(); // Just in case the loading hasn't completed yet
        return result;
    }
}
