import fs from "node:fs"
import pathFromArgs from "./_pathFromArgs.mjs"

export default function isRegularDirectorySync(...args) {
	const path = pathFromArgs(args)

	try {
		const stat = fs.lstatSync(path)

		return stat.isDirectory() && !stat.isSymbolicLink()
	} catch {
		return false
	}
}
