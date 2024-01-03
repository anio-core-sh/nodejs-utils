/* Warning: this file was automatically created by anio-jsbundler v0.5.1 */
/* You should commit this file to source control */

import {createDefaultContextAsync} from "@anio-jsbundler/project"
import {
    fs$chmodSyncFactory                        as fs$chmodSyncFactory,
    fs$copyDirectorySyncFactory                as fs$copyDirectorySyncFactory,
    fs$createDirectorySyncFactory              as fs$createDirectorySyncFactory,
    fs$getTypeOfPathSyncFactory                as fs$getTypeOfPathSyncFactory,
    fs$isDirectorySyncFactory                  as fs$isDirectorySyncFactory,
    fs$isFileSyncFactory                       as fs$isFileSyncFactory,
    fs$isRegularDirectorySyncFactory           as fs$isRegularDirectorySyncFactory,
    fs$isRegularFileSyncFactory                as fs$isRegularFileSyncFactory,
    fs$readFileJSONSyncFactory                 as fs$readFileJSONSyncFactory,
    fs$readFileStringSyncFactory               as fs$readFileStringSyncFactory,
    fs$removeFactory                           as fs$removeFactory,
    fs$removeDirectorySyncFactory              as fs$removeDirectorySyncFactory,
    fs$removeFileSyncFactory                   as fs$removeFileSyncFactory,
    fs$scandirSyncFactory                      as fs$scandirSyncFactory,
    fs$writeFileAtomicSyncFactory              as fs$writeFileAtomicSyncFactory,
    fs$writeJSONFileAtomicSyncFactory          as fs$writeJSONFileAtomicSyncFactory,
    util$parseCommandLineArgsFactory           as util$parseCommandLineArgsFactory,
    util$randomIdentifierSyncFactory           as util$randomIdentifierSyncFactory
} from "./library.mjs";

export default async function importWithContextAsync(plugs = {}, new_context = null) {
    let library_context = new_context

    /* Context is created here so every function has the same context */
    if (library_context === null) {
        library_context = await createDefaultContextAsync()
    }

    /* Plugs are set here so every function has the same context */
    for (const key in plugs) {
        library_context.plugs[key] = plugs[key];
    }

    let library = {
        fs$chmodSync                            : await fs$chmodSyncFactory(null, library_context),
        fs$chmodSyncFactory                     : fs$chmodSyncFactory,
        fs$copyDirectorySync                    : await fs$copyDirectorySyncFactory(null, library_context),
        fs$copyDirectorySyncFactory             : fs$copyDirectorySyncFactory,
        fs$createDirectorySync                  : await fs$createDirectorySyncFactory(null, library_context),
        fs$createDirectorySyncFactory           : fs$createDirectorySyncFactory,
        fs$getTypeOfPathSync                    : await fs$getTypeOfPathSyncFactory(null, library_context),
        fs$getTypeOfPathSyncFactory             : fs$getTypeOfPathSyncFactory,
        fs$isDirectorySync                      : await fs$isDirectorySyncFactory(null, library_context),
        fs$isDirectorySyncFactory               : fs$isDirectorySyncFactory,
        fs$isFileSync                           : await fs$isFileSyncFactory(null, library_context),
        fs$isFileSyncFactory                    : fs$isFileSyncFactory,
        fs$isRegularDirectorySync               : await fs$isRegularDirectorySyncFactory(null, library_context),
        fs$isRegularDirectorySyncFactory        : fs$isRegularDirectorySyncFactory,
        fs$isRegularFileSync                    : await fs$isRegularFileSyncFactory(null, library_context),
        fs$isRegularFileSyncFactory             : fs$isRegularFileSyncFactory,
        fs$readFileJSONSync                     : await fs$readFileJSONSyncFactory(null, library_context),
        fs$readFileJSONSyncFactory              : fs$readFileJSONSyncFactory,
        fs$readFileStringSync                   : await fs$readFileStringSyncFactory(null, library_context),
        fs$readFileStringSyncFactory            : fs$readFileStringSyncFactory,
        fs$remove                               : await fs$removeFactory(null, library_context),
        fs$removeFactory                        : fs$removeFactory,
        fs$removeDirectorySync                  : await fs$removeDirectorySyncFactory(null, library_context),
        fs$removeDirectorySyncFactory           : fs$removeDirectorySyncFactory,
        fs$removeFileSync                       : await fs$removeFileSyncFactory(null, library_context),
        fs$removeFileSyncFactory                : fs$removeFileSyncFactory,
        fs$scandirSync                          : await fs$scandirSyncFactory(null, library_context),
        fs$scandirSyncFactory                   : fs$scandirSyncFactory,
        fs$writeFileAtomicSync                  : await fs$writeFileAtomicSyncFactory(null, library_context),
        fs$writeFileAtomicSyncFactory           : fs$writeFileAtomicSyncFactory,
        fs$writeJSONFileAtomicSync              : await fs$writeJSONFileAtomicSyncFactory(null, library_context),
        fs$writeJSONFileAtomicSyncFactory       : fs$writeJSONFileAtomicSyncFactory,
        util$parseCommandLineArgs               : await util$parseCommandLineArgsFactory(null, library_context),
        util$parseCommandLineArgsFactory        : util$parseCommandLineArgsFactory,
        util$randomIdentifierSync               : await util$randomIdentifierSyncFactory(null, library_context),
        util$randomIdentifierSyncFactory        : util$randomIdentifierSyncFactory
    };

    library.dict = {
        "fs/chmodSync.mjs"                      : library["fs$chmodSync"],
        "fs/chmodSyncFactory.mjs"               : library["fs$chmodSyncFactory"],
        "fs/copyDirectorySync.mjs"              : library["fs$copyDirectorySync"],
        "fs/copyDirectorySyncFactory.mjs"       : library["fs$copyDirectorySyncFactory"],
        "fs/createDirectorySync.mjs"            : library["fs$createDirectorySync"],
        "fs/createDirectorySyncFactory.mjs"     : library["fs$createDirectorySyncFactory"],
        "fs/getTypeOfPathSync.mjs"              : library["fs$getTypeOfPathSync"],
        "fs/getTypeOfPathSyncFactory.mjs"       : library["fs$getTypeOfPathSyncFactory"],
        "fs/isDirectorySync.mjs"                : library["fs$isDirectorySync"],
        "fs/isDirectorySyncFactory.mjs"         : library["fs$isDirectorySyncFactory"],
        "fs/isFileSync.mjs"                     : library["fs$isFileSync"],
        "fs/isFileSyncFactory.mjs"              : library["fs$isFileSyncFactory"],
        "fs/isRegularDirectorySync.mjs"         : library["fs$isRegularDirectorySync"],
        "fs/isRegularDirectorySyncFactory.mjs"  : library["fs$isRegularDirectorySyncFactory"],
        "fs/isRegularFileSync.mjs"              : library["fs$isRegularFileSync"],
        "fs/isRegularFileSyncFactory.mjs"       : library["fs$isRegularFileSyncFactory"],
        "fs/readFileJSONSync.mjs"               : library["fs$readFileJSONSync"],
        "fs/readFileJSONSyncFactory.mjs"        : library["fs$readFileJSONSyncFactory"],
        "fs/readFileStringSync.mjs"             : library["fs$readFileStringSync"],
        "fs/readFileStringSyncFactory.mjs"      : library["fs$readFileStringSyncFactory"],
        "fs/remove.mjs"                         : library["fs$remove"],
        "fs/removeFactory.mjs"                  : library["fs$removeFactory"],
        "fs/removeDirectorySync.mjs"            : library["fs$removeDirectorySync"],
        "fs/removeDirectorySyncFactory.mjs"     : library["fs$removeDirectorySyncFactory"],
        "fs/removeFileSync.mjs"                 : library["fs$removeFileSync"],
        "fs/removeFileSyncFactory.mjs"          : library["fs$removeFileSyncFactory"],
        "fs/scandirSync.mjs"                    : library["fs$scandirSync"],
        "fs/scandirSyncFactory.mjs"             : library["fs$scandirSyncFactory"],
        "fs/writeFileAtomicSync.mjs"            : library["fs$writeFileAtomicSync"],
        "fs/writeFileAtomicSyncFactory.mjs"     : library["fs$writeFileAtomicSyncFactory"],
        "fs/writeJSONFileAtomicSync.mjs"        : library["fs$writeJSONFileAtomicSync"],
        "fs/writeJSONFileAtomicSyncFactory.mjs" : library["fs$writeJSONFileAtomicSyncFactory"],
        "util/parseCommandLineArgs.mjs"         : library["util$parseCommandLineArgs"],
        "util/parseCommandLineArgsFactory.mjs"  : library["util$parseCommandLineArgsFactory"],
        "util/randomIdentifierSync.mjs"         : library["util$randomIdentifierSync"],
        "util/randomIdentifierSyncFactory.mjs"  : library["util$randomIdentifierSyncFactory"]
    };

    library.importWithContextAsync = importWithContextAsync;
    library.getUsedDefaultContext = function getUsedDefaultContext() { return library_context; };

    return library;
}
