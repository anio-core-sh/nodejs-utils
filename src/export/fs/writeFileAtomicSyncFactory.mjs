import fs from "node:fs"
import path from "node:path"
import randomIdentifierSync from "../util/randomIdentifierSync.mjs"

export default function(context) {
	return function(file, data) {
		context.log.debug(`writing file '${file}' atomically`)

		const parent_dir = path.dirname(file)
		const temp_file_name = "tmp." + randomIdentifierSync(10)
		const temp_file_path = path.join(parent_dir, temp_file_name)

		context.log.debug(`writing tmp file '${temp_file_path}' with data = ${data.length} bytes`)

		fs.writeFileSync(temp_file_path, data.toString())
		fs.renameSync(temp_file_path, file)
	}
}
