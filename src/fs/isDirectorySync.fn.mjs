import fs from "node:fs"
import pathFromArgs from "./_pathFromArgs.mjs"

export default function isDirectorySync(...args) {
	const path = pathFromArgs(args)

	try {
		const stat = fs.statSync(path)

		return stat.isDirectory()
	} catch {
		return false
	}
}
