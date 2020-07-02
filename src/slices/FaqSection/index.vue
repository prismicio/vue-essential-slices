<template>
	<ps-section v-bind="theme.wrapper" classAttr="ps-accordion ps-accordion--faq">
		<div class="ps__wrap">
			<div class="ps__head">
				<header class="ps__header">
					<ps-eyebrow :theme="theme.eyebrow" :align="theme.align" :color="theme.color">
						{{ $prismic.asText(slice.primary.eyebrow_headline) }}
					</ps-eyebrow>
					<ps-title :field="slice.primary.title" :theme="theme.title" :align="theme.align" :color="theme.color" />
				</header>
				<ps-description :field="slice.primary.description" :theme="theme.description" :align="theme.align" :color="theme.color" />
			</div>
			<div class="ps__main grid grid--12">
				<div v-if="hasImage" class="span-1-6">
					<div class="ps__img">
						<prismic-image :field="slice.primary.optional_image" />
					</div>
				</div>
				<div :class="`${hasImage ? 'span-7-12' : 'span-1-12'}`">
					<ps-accordion :items="slice.items" />
				</div>
			</div>
		</div>
	</ps-section>
</template>
<script>
import {
	PsEyebrow,
	PsDescription,
	PsTitle,
	PsSection,
	PsAccordion
} from '../../components'

import { commonProps } from '../../utils'

export default {
	name: 'FaqSection',
	components: {
		PsEyebrow,
		PsDescription,
		PsTitle,
		PsSection,
		PsAccordion
	},
	props: commonProps,
	computed: {
		hasImage() {
			return (
				this.slice &&
				this.slice.primary &&
				this.slice.primary.optional_image &&
				Object.keys(this.slice.primary.optional_image).length !== 0
			)
		}
	}
}
</script>
<style lang="scss" scoped>
.ps-accordion__img {
	display: block;
	margin: 0 auto calc(var(--c-padding) * 2);
	background: var(--color--secondary);
}
</style>
