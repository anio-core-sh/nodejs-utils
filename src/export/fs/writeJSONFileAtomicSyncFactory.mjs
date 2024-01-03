import writeFileAtomicSyncFactory from "./writeFileAtomicSyncFactory.mjs"

export default function(context) {
	const writeFileAtomicSync = writeFileAtomicSyncFactory(context)

	return {
		modifiers: ["pretty"],

		fn(modifiers, file, data) {
			let str

			if (modifiers[0] === "pretty") {
				str = JSON.stringify(data, null, 4)
			} else {
				str = JSON.stringify(data)
			}

			writeFileAtomicSync(file, `${str}\n`)
		}
	}
}
