import fs from "node:fs"
import pathFromArgs from "../../fs_pathFromArgs.mjs"

export default function isRegularFileSync(...args) {
	const path = pathFromArgs(args)

	try {
		const stat = fs.lstatSync(path)

		return stat.isFile() && !stat.isSymbolicLink()
	} catch {
		return false
	}
}
