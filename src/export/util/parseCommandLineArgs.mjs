import parser from "../../cli-arg-parser/index.mjs"

export default async function(argv, config) {
	return await parser(argv, config)
}
