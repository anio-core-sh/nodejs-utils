import fs from "node:fs"
import isDirectorySync from "./isDirectorySync.mjs"
import pathFromArgs from "../../fs_pathFromArgs.mjs"

export default function(context) {
	return function(...args) {
		const path = pathFromArgs(args)

		context.log.debug(`creating dir '${path}'`)

		if (isDirectorySync(path)) {
			return
		}

		fs.mkdirSync(path, {
			recursive: true,
			mode: 0o750
		})
	}
}
