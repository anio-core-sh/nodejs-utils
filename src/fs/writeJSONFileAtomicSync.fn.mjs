import writeFileAtomicSync from "./writeFileAtomicSync.fn.mjs"

function _writeJSONFileAtomic(file, data, human_readable) {
	let str

	if (human_readable) {
		str = JSON.stringify(data, null, 4)
	} else {
		str = JSON.stringify(data)
	}

	writeFileAtomicSync(file, `${str}\n`)
}

function writeJSONFileAtomicSync(file, data) {
	return _writeJSONFileAtomic(file, data, false)
}

writeJSONFileAtomicSync.pretty = function(file, data) {
	return _writeJSONFileAtomic(file, data, true)
}

export default writeJSONFileAtomicSync
