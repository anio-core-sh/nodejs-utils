import isRegularDirectorySync from "./isRegularDirectorySync.fn.mjs"
import removeDirectorySync from "./removeDirectorySync.fn.mjs"
import removeFileSync from "./removeFileSync.fn.mjs"

export default function remove(path) {
	if (isRegularDirectorySync(path)) {
		removeDirectorySync(path)
	} else {
		removeFileSync(path)
	}
}
