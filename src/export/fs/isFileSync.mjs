import fs from "node:fs"
import pathFromArgs from "../../fs_pathFromArgs.mjs"

export default function isFileSync(...args) {
	const path = pathFromArgs(args)

	try {
		const stat = fs.statSync(path)

		return stat.isFile()
	} catch {
		return false
	}
}
