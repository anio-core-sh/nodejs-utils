import isRegularDirectorySync from "./isRegularDirectorySync.mjs"
import removeDirectorySyncFactory from "./removeDirectorySyncFactory.mjs"
import removeFileSyncFactory from "./removeFileSyncFactory.mjs"

export default function(context) {
	const removeDirectorySync = removeDirectorySyncFactory(context)
	const removeFileSync = removeFileSyncFactory(context)

	return function(path) {
		if (isRegularDirectorySync(path)) {
			removeDirectorySync(path)
		} else {
			removeFileSync(path)
		}
	}
}
