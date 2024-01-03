import fs from "node:fs"

export default function(path, mode) {
	fs.chmodSync(path, mode)
}
