/* Warning: this file was automatically created by anio-gyp v0.x.x */
/* You will find more information about the specific anio-gyp version used inside the file src/auto/VERSION.txt */
/* You should commit this file to source control */

import {createDefaultContextAsync} from "@anio-gyp/project"
import wrapFactory from "./support_files/wrapFactory.mjs"
import wrapFunction from "./support_files/wrapFunction.mjs"

/* Module's default context */
const _module_default_context = await createDefaultContextAsync()

export function getUsedDefaultContext() {
	return _module_default_context
}

/* fs/chmodSync */
import a from "../export/fs/chmodSyncFactory.mjs"
export const fs$chmodSync = wrapFunction("fs$chmodSync", a(_module_default_context));
export const fs$chmodSyncFactory = wrapFactory("fs$chmodSync", a);

/* fs/copyDirectorySync */
import b from "../export/fs/copyDirectorySyncFactory.mjs"
export const fs$copyDirectorySync = wrapFunction("fs$copyDirectorySync", b(_module_default_context));
export const fs$copyDirectorySyncFactory = wrapFactory("fs$copyDirectorySync", b);

/* fs/createDirectorySync */
import c from "../export/fs/createDirectorySyncFactory.mjs"
export const fs$createDirectorySync = wrapFunction("fs$createDirectorySync", c(_module_default_context));
export const fs$createDirectorySyncFactory = wrapFactory("fs$createDirectorySync", c);

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
import i from "../export/fs/readFileJSONSyncFactory.mjs"
export const fs$readFileJSONSync = wrapFunction("fs$readFileJSONSync", i(_module_default_context));
export const fs$readFileJSONSyncFactory = wrapFactory("fs$readFileJSONSync", i);

/* fs/readFileStringSync */
import j from "../export/fs/readFileStringSyncFactory.mjs"
export const fs$readFileStringSync = wrapFunction("fs$readFileStringSync", j(_module_default_context));
export const fs$readFileStringSyncFactory = wrapFactory("fs$readFileStringSync", j);

/* fs/removeDirectorySync */
import k from "../export/fs/removeDirectorySyncFactory.mjs"
export const fs$removeDirectorySync = wrapFunction("fs$removeDirectorySync", k(_module_default_context));
export const fs$removeDirectorySyncFactory = wrapFactory("fs$removeDirectorySync", k);

/* fs/removeFileSync */
import l from "../export/fs/removeFileSyncFactory.mjs"
export const fs$removeFileSync = wrapFunction("fs$removeFileSync", l(_module_default_context));
export const fs$removeFileSyncFactory = wrapFactory("fs$removeFileSync", l);

/* fs/removeSync */
import m from "../export/fs/removeSyncFactory.mjs"
export const fs$removeSync = wrapFunction("fs$removeSync", m(_module_default_context));
export const fs$removeSyncFactory = wrapFactory("fs$removeSync", m);

/* fs/scandirSync */
import n from "../export/fs/scandirSync.mjs"
export const fs$scandirSync = wrapFunction("fs$scandirSync", n);
export const fs$scandirSyncFactory = wrapFactory("fs$scandirSync", function fs$scandirSyncFactory(new_context) { return n; });

/* fs/writeFileAtomicSync */
import o from "../export/fs/writeFileAtomicSyncFactory.mjs"
export const fs$writeFileAtomicSync = wrapFunction("fs$writeFileAtomicSync", o(_module_default_context));
export const fs$writeFileAtomicSyncFactory = wrapFactory("fs$writeFileAtomicSync", o);

/* fs/writeJSONFileAtomicSync */
import p from "../export/fs/writeJSONFileAtomicSyncFactory.mjs"
export const fs$writeJSONFileAtomicSync = wrapFunction("fs$writeJSONFileAtomicSync", p(_module_default_context));
export const fs$writeJSONFileAtomicSyncFactory = wrapFactory("fs$writeJSONFileAtomicSync", p);

/* util/parseCommandLineArgs */
import q from "../export/util/parseCommandLineArgs.mjs"
export const util$parseCommandLineArgs = wrapFunction("util$parseCommandLineArgs", q);
export const util$parseCommandLineArgsFactory = wrapFactory("util$parseCommandLineArgs", function util$parseCommandLineArgsFactory(new_context) { return q; });

/* util/randomIdentifierSync */
import r from "../export/util/randomIdentifierSync.mjs"
export const util$randomIdentifierSync = wrapFunction("util$randomIdentifierSync", r);
export const util$randomIdentifierSyncFactory = wrapFactory("util$randomIdentifierSync", function util$randomIdentifierSyncFactory(new_context) { return r; });
