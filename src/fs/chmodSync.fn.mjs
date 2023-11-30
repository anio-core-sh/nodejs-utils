import fs from "node:fs"

export default function chmodSync(path, mode) {
	fs.chmodSync(path, mode)
}
