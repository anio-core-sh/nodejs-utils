import readFileStringSyncFactory from "./readFileStringSyncFactory.mjs"

export default function(context) {
	const readFileStringSync = readFileStringSyncFactory(context)

	return function(file) {
		const contents = readFileStringSync(file)

		return JSON.parse(contents.toString())
	}
}
