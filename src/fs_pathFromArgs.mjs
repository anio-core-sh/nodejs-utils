import path from "node:path"

export default function(args) {
	return path.join.apply(path, args)
}
