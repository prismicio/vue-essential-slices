// eslint-disable-next-line
export const isRichText = data => Array.isArray(data)

export const maybeRichTextValidator = prop => {
	const type = typeof prop
	return ['string', 'object'].includes(type)
}

const camelizeRE = /-(\w)/g
export const camelize = str => {
	str = str.replace(/_/g, '-').replace(camelizeRE, (_, c) => {
		return c ? c.toUpperCase() : ''
	})
	return str[0].toUpperCase() + str.slice(1)
}

export const commonProps = {
	slice: {
		validator: function({ slice_type: sliceType, primary, items }) {
			return sliceType && primary && items
		}
	},
	theme: {
		type: Object,
		required: false,
		default() {
			console.log('<-- theme is empty -->')
			return {}
		}
	}
}