import {Buffer} from "node:buffer"
import {randomFillSync} from "node:crypto"

export default function(length) {
	const buf = Buffer.alloc(length)

	return randomFillSync(buf).toString("hex").slice(0, length)
}
