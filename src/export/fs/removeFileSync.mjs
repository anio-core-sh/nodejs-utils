import fs from "node:fs"

export default function removeFileSync(path) {
	fs.unlinkSync(path)
}
