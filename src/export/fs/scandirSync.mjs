import scandir from "../../fs_scandir.mjs"

export default {
	modifiers: ["reverse"],

	fn(modifiers, dir) {
		if (modifiers[0] === "reverse") {
			return scandir.reverse(dir)
		}

		return scandir(dir)
	}
}
