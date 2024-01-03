import fs from "node:fs"

export default function(context) {
	return function(path) {
		context.log.debug(`removing file '${path}'`)

		fs.unlinkSync(path)
	}
}
