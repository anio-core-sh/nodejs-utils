import scandir from "../../fs_scandir.mjs"
import path from "node:path"
import fs from "node:fs"

export default function(context) {
	return function(src, dst) {
		context.log.debug(`copying dir '${src}' -> '${dst}'`)

		fs.mkdirSync(dst)

		const entries = scandir(src)

		for (const entry of entries) {
			const src_path = path.join(src, entry.relative_path)
			const dst_path = path.join(dst, entry.relative_path)

			context.log.trace(`copy ${entry.type} entry '${entry.relative_path}'`)

			if (entry.type === "dir") {
				fs.mkdirSync(dst_path)
			} else if (entry.type === "link") {
				const target = fs.readlinkSync(src_path)

				fs.symlinkSync(target, dst_path)
			} else {
				fs.copyFileSync(src_path, dst_path)
			}
		}
	}
}
