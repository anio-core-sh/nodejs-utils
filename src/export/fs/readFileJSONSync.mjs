import fs from "node:fs"

export default function(file) {
	const contents = fs.readFileSync(file)

	return JSON.parse(contents.toString())
}
