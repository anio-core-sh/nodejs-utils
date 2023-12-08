import validateAndTransformOptionValue from "./validateAndTransformOptionValue.mjs"

/**
 * Flags (boolean) are specified with -
 * Options are specified with -- and always have a value
 */
function handleFlag(flag_name, config, ctx) {
	const valid_flag_names = config.flags ?? []

	if (!valid_flag_names.includes(flag_name)) {
		throw new Error(`-${flag_name}: no such flag.`)
	}
	else if (ctx.flags.includes(flag_name)) {
		throw new Error(`-${flag_name}: already specified.`)
	}

	ctx.flags.push(flag_name)
}

async function handleOption({name, value}, config, ctx) {
	const valid_options = config.options ?? {}

	if (!(name in valid_options)) {
		throw new Error(`--${name}: no such option.`)
	}
	else if (name in ctx.options) {
		throw new Error(`--${name}: already specified.`)
	}
	else if (value === null) {
		throw new Error(`--${name}: value required.`)
	}

	ctx.options[name] = await validateAndTransformOptionValue(
		value, valid_options[name]
	)
}

export default async function a(argv, config = null) {
	let ret = {
		flags: [],
		operands: [],
		options: {}
	}

	let args = argv.slice(0)
	let arg = null
	let stop_parsing = false

	while (true) {
		if (!args.length) break

		arg = args.shift()

		if (stop_parsing) {
			//
			// after "--" all args are treated as operands
			//
			ret.operands.push(arg)

			continue
		} else if (arg === "--") {
			stop_parsing = true
		}
		// option
		else if (arg.startsWith("--")) {
			const option_name = arg.slice(2)
			const option_value = args.length ? args.shift() : null

			await handleOption({
				name: option_name,
				value: option_value
			}, config, ret)
		}
		// flag
		else if (arg.startsWith("-")) {
			const flag_name = arg.slice(1)

			handleFlag(flag_name, config, ret)
		}
		// operand
		else {
			ret.operands.push(arg)
		}
	}

	return ret
}
