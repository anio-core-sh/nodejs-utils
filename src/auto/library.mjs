/* Warning: this file was automatically created by anio-jsbundler v0.5.1 */
/* You should commit this file to source control */

import {createDefaultContextAsync} from "@anio-jsbundler/project"
import wrapFactory from "./support_files/wrapFactory.mjs"
import wrapFunction from "./support_files/wrapFunction.mjs"

/* Module's default context */
const _module_default_context = await createDefaultContextAsync()

export function getUsedDefaultContext() {
	return _module_default_context
}

/* fs/chmodSync */
import a from "../export/fs/chmodSync.mjs"
export const fs$chmodSync = wrapFunction("fs$chmodSync", a);
export const fs$chmodSyncFactory = wrapFactory("fs$chmodSync", function fs$chmodSyncFactory(new_context) { return a; });

/* fs/copyDirectorySync */
import b from "../export/fs/copyDirectorySync.mjs"
export const fs$copyDirectorySync = wrapFunction("fs$copyDirectorySync", b);
export const fs$copyDirectorySyncFactory = wrapFactory("fs$copyDirectorySync", function fs$copyDirectorySyncFactory(new_context) { return b; });

/* fs/createDirectorySync */
import c from "../export/fs/createDirectorySync.mjs"
export const fs$createDirectorySync = wrapFunction("fs$createDirectorySync", c);
export const fs$createDirectorySyncFactory = wrapFactory("fs$createDirectorySync", function fs$createDirectorySyncFactory(new_context) { return c; });

/* fs/getTypeOfPathSync */
import d from "../export/fs/getTypeOfPathSync.mjs"
export const fs$getTypeOfPathSync = wrapFunction("fs$getTypeOfPathSync", d);
export const fs$getTypeOfPathSyncFactory = wrapFactory("fs$getTypeOfPathSync", function fs$getTypeOfPathSyncFactory(new_context) { return d; });

/* fs/isDirectorySync */
import e from "../export/fs/isDirectorySync.mjs"
export const fs$isDirectorySync = wrapFunction("fs$isDirectorySync", e);
export const fs$isDirectorySyncFactory = wrapFactory("fs$isDirectorySync", function fs$isDirectorySyncFactory(new_context) { return e; });

/* fs/isFileSync */
import f from "../export/fs/isFileSync.mjs"
export const fs$isFileSync = wrapFunction("fs$isFileSync", f);
export const fs$isFileSyncFactory = wrapFactory("fs$isFileSync", function fs$isFileSyncFactory(new_context) { return f; });

/* fs/isRegularDirectorySync */
import g from "../export/fs/isRegularDirectorySync.mjs"
export const fs$isRegularDirectorySync = wrapFunction("fs$isRegularDirectorySync", g);
export const fs$isRegularDirectorySyncFactory = wrapFactory("fs$isRegularDirectorySync", function fs$isRegularDirectorySyncFactory(new_context) { return g; });

/* fs/isRegularFileSync */
import h from "../export/fs/isRegularFileSync.mjs"
export const fs$isRegularFileSync = wrapFunction("fs$isRegularFileSync", h);
export const fs$isRegularFileSyncFactory = wrapFactory("fs$isRegularFileSync", function fs$isRegularFileSyncFactory(new_context) { return h; });

/* fs/readFileJSONSync */
import i from "../export/fs/readFileJSONSync.mjs"
export const fs$readFileJSONSync = wrapFunction("fs$readFileJSONSync", i);
export const fs$readFileJSONSyncFactory = wrapFactory("fs$readFileJSONSync", function fs$readFileJSONSyncFactory(new_context) { return i; });

/* fs/readFileStringSync */
import j from "../export/fs/readFileStringSync.mjs"
export const fs$readFileStringSync = wrapFunction("fs$readFileStringSync", j);
export const fs$readFileStringSyncFactory = wrapFactory("fs$readFileStringSync", function fs$readFileStringSyncFactory(new_context) { return j; });

/* fs/remove */
import k from "../export/fs/remove.mjs"
export const fs$remove = wrapFunction("fs$remove", k);
export const fs$removeFactory = wrapFactory("fs$remove", function fs$removeFactory(new_context) { return k; });

/* fs/removeDirectorySync */
import l from "../export/fs/removeDirectorySync.mjs"
export const fs$removeDirectorySync = wrapFunction("fs$removeDirectorySync", l);
export const fs$removeDirectorySyncFactory = wrapFactory("fs$removeDirectorySync", function fs$removeDirectorySyncFactory(new_context) { return l; });

/* fs/removeFileSync */
import m from "../export/fs/removeFileSync.mjs"
export const fs$removeFileSync = wrapFunction("fs$removeFileSync", m);
export const fs$removeFileSyncFactory = wrapFactory("fs$removeFileSync", function fs$removeFileSyncFactory(new_context) { return m; });

/* fs/writeFileAtomicSync */
import n from "../export/fs/writeFileAtomicSync.mjs"
export const fs$writeFileAtomicSync = wrapFunction("fs$writeFileAtomicSync", n);
export const fs$writeFileAtomicSyncFactory = wrapFactory("fs$writeFileAtomicSync", function fs$writeFileAtomicSyncFactory(new_context) { return n; });

/* fs/writeJSONFileAtomicSync */
import o from "../export/fs/writeJSONFileAtomicSync.mjs"
export const fs$writeJSONFileAtomicSync = wrapFunction("fs$writeJSONFileAtomicSync", o);
export const fs$writeJSONFileAtomicSyncFactory = wrapFactory("fs$writeJSONFileAtomicSync", function fs$writeJSONFileAtomicSyncFactory(new_context) { return o; });

/* util/parseCommandLineArgs */
import p from "../export/util/parseCommandLineArgs.mjs"
export const util$parseCommandLineArgs = wrapFunction("util$parseCommandLineArgs", p);
export const util$parseCommandLineArgsFactory = wrapFactory("util$parseCommandLineArgs", function util$parseCommandLineArgsFactory(new_context) { return p; });

/* util/randomIdentifierSync */
import q from "../export/util/randomIdentifierSync.mjs"
export const util$randomIdentifierSync = wrapFunction("util$randomIdentifierSync", q);
export const util$randomIdentifierSyncFactory = wrapFactory("util$randomIdentifierSync", function util$randomIdentifierSyncFactory(new_context) { return q; });
