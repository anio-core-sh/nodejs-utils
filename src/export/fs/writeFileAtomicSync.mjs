import fs from "node:fs"
import path from "node:path"
import randomIdentifierSync from "../util/randomIdentifierSync.mjs"

export default function(file, data) {
	const parent_dir = path.dirname(file)
	const temp_file_name = "tmp." + randomIdentifierSync(10)
	const temp_file_path = path.join(parent_dir, temp_file_name)

	fs.writeFileSync(temp_file_path, data.toString())
	fs.renameSync(temp_file_path, file)
}
