import isRegularDirectorySync from "./isRegularDirectorySync.mjs"
import removeDirectorySync from "./removeDirectorySync.mjs"
import removeFileSync from "./removeFileSync.mjs"

export default function(path) {
	if (isRegularDirectorySync(path)) {
		removeDirectorySync(path)
	} else {
		removeFileSync(path)
	}
}
