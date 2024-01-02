import fs from "node:fs"

export default function readFileStringSync(file) {
	const contents = fs.readFileSync(file)

	return contents.toString()
}
