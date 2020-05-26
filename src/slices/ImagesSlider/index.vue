<template>
	<ps-section v-bind="theme.wrapper" classAttr="ps-slider ps-slider--images">
		<div class="ps__wrap">
			<div class="ps__head">
				<header class="ps__header">
					<ps-eyebrow :theme="theme.eyebrow" :align="theme.align" :color="theme.color">
						{{ $prismic.asText(slice.primary.eyebrow_headline) }}
					</ps-eyebrow>
					<ps-title :theme="theme.title" :align="theme.align" :color="theme.color">
						{{ $prismic.asText(slice.primary.title) }}
					</ps-title>
				</header>
				<ps-description :theme="theme.description" :align="theme.align" :color="theme.color">
					{{ $prismic.asText(slice.primary.description) }}
				</ps-description>
			</div>
			<div v-if="slice.items.length" class="ps__main grid grid--12">
				<div class="span-1-12">
					<ps-slider :theme="theme.slider" hide-arrows type="slider" item-type="slide" :items="slice.items">
						<template v-slot:content>
							<div
								:data-slide-label="$prismic.asText(item.description)"
								class="c-slider__slide"
								data-hidden="false"
								role="tabpanel"
								v-for="(item, i) in slice.items"
								:key="`c-slider__slide-${i + 1}`"
								tabindex="-1"
							>
								<figure
									class="c-slider__slide__figure"
									role="figure"
									:aria-label="$prismic.asText(item.description)"
								>
									<prismic-image class="c-slider__slide__img" :field="item.image" />
									<ps-description :theme="theme.description" :align="theme.align" :color="theme.color">
										<figcaption>{{ $prismic.asText(item.description) }}</figcaption>
									</ps-description>
								</figure>
							</div>
						</template>
					</ps-slider>
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
	PsSlider
} from '../../components'

import { commonProps } from '../../utils'
export default {
	name: 'ImagesSlider',
	components: {
		PsEyebrow,
		PsDescription,
		PsTitle,
		PsSection,
		PsSlider
	},
	props: commonProps
}
</script>

<style lang="scss">
.ps-slider--images .c-slider__slide__figure {
	margin: 0;
	padding: 0;
	width: 100%;

	img {
		width: 100%;
		max-width: 840px;
	}

	figcaption {
		padding: var(--c-padding);
		max-width: 80ch;
		margin: 0 auto;
	}
}
</style>
