import fs from "node:fs"

export default function(context) {
	return function(file) {
		context.log.debug(`reading file '${file}'`)

		const contents = fs.readFileSync(file)

		return contents.toString()
	}
}
