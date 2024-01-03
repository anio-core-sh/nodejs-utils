import fs from "node:fs"

export default function(context) {
	return function(path, mode) {
		context.log.trace(`setting mode '${path}' with mode = '0o${mode.toString(8)}'`)

		fs.chmodSync(path, mode)
	}
}
