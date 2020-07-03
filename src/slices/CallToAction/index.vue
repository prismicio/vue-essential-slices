<template>
	<ps-section
		:darkMode="darkMode || darkModeLabel"
		classAttr="ps-cta"
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
						<ps-title :field="slice.primary.title" :theme="theme.title" :align="theme.align" :color="theme.color" />
					</slot>
				</header>
				<ps-description :field="slice.primary.paragraph" :theme="theme.description" :align="theme.align" :color="theme.color" />
				<slot name="cta" v-bind="slice.primary">
					<ps-button
						:theme="theme.button"
						:link="slice.primary.button_link"
					>
						{{ slice.primary.button_label }}
					</ps-button>
				</slot>
			</div>
		</div>
	</ps-section>
</template>
<script>
import { commonProps } from '../../utils'

import {
	PsButton,
	PsSection,
	PsTitle,
	PsDescription
} from '../../components'

export default {
	name: 'CallToAction',
	components: {
		PsButton,
		PsSection,
		PsTitle,
		PsDescription
	},
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
