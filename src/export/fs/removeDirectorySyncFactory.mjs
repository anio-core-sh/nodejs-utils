import scandir from "../../fs_scandir.mjs"
import path from "node:path"
import fs from "node:fs"

export default function(context) {
	return function(dir_path) {
		context.log.debug(`removing dir '${dir_path}'`)

		const entries = scandir.reverse(dir_path)

		for (const entry of entries) {
			const entry_path = path.join(dir_path, entry.relative_path)

			if (entry.type !== "dir") {
				fs.unlinkSync(entry_path)
			} else {
				fs.rmdirSync(entry_path)
			}
		}

		fs.rmdirSync(dir_path)
	}
}
