<template>
	<section
		:class="`ps${(darkMode || darkModeLabel) ? ' ps--black' : ''} ps-cta`"
		v-bind="theme.wrapper"
	>
		<div class="ps__wrap">
			<div class="ps__head" :style="theme.align ? `text-align: ${theme.align}` : ''">
				<header class="ps__header">
					<slot name="header" v-bind="slice.primary">
						<prismic-image
							v-if="slice.primary.icon_image"
							aria-hidden="true"
							class="ps__kicker-icon"
							:field="slice.primary.icon_image"
						/>
						<h2
							v-if="slice.primary.title"
							class="ps__title"
							:style="theme.color ? `color: ${theme.color}` : ''"
						>
							{{ $prismic.asText(slice.primary.title) }}
						</h2>
					</slot>
				</header>
				<div
					v-if="slice.primary.paragraph"
					:class="`ps__desc ${theme.align || ''}`"
					:style="theme.color ? `color: ${theme.color}` : ''"
				>
					<p>{{ $prismic.asText(slice.primary.paragraph) }}</p>
				</div>
				<slot name="cta" v-bind="slice.primary">
					<prismic-link
						v-bind="theme.button"
						class="ps-button ps-button--primary"
						:field="slice.primary.button_link"
					>
						{{ slice.primary.button_label }}
					</prismic-link>
				</slot>
			</div>
		</div>
	</section>
</template>
<script>

import { commonProps } from '../../utils'

export default {
	name: 'CallToAction',
	props: {
		...commonProps,
		darkMode: {
			type: Boolean,
			required: false,
			default: false
		},
	},
	computed: {
		darkModeLabel: function() {
			return this.slice && this.slice.slice_label === 'dark_mode'
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../../styles/styles.scss";
@import "../../styles/settings.scss";
.ps-cta {
	text-align: center;
}

.ps-cta .ps-button {
	@media all and (min-width: 30em) {
		display: inline-block;
		margin-top: var(--h-padding);
	}
}

.ps--black {
	.ps__title {
		color: #fff;
	}
	.ps__desc > * {
		color: #fff;
	}
}
</style>
