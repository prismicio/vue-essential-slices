<template>
	<section class="ps ps-slider ps-slider--testimonials">
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
			<div v-if="slice.items.length" class="ps__main grid grid--12">
				<div class="span-1-12">
					<ps-slider type="carousel" item-type="testimonial" :items="slice.items">
						<template v-slot:content>
							<div
								class="c-carousel__testimonial"
								v-for="(item, i) in slice.items"
								:key="`data-carousel-testimonial-${i + 1}`"
							>
								<blockquote class="ps-carousel__testimonial">
									<div class="ps-carousel__testimonial__header">
										<prismic-image
											v-if="item.image && item.image.url"
											class="ps-carousel__testimonial__logo"
											:field="item.image"
										/>
									</div>
									<prismic-rich-text
										v-if="item.testimonial && item.testimonial.length"
										:field="item.testimonial"
										class="ps-carousel__testimonial__content"
									/>
									<footer class="ps-carousel__testimonial__footer">
										<cite>
											<span v-if="item.person" class="ps-carousel__testimonial__author">{{ item.person }}</span>
											<span v-if="item.title" class="ps-carousel__testimonial__author-role">{{ item.title }}</span>
										</cite>
									</footer>
								</blockquote>
							</div>
						</template>
					</ps-slider>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import { commonProps } from '../../utils'

import {
	PsEyebrow,
	PsSection,
	PsTitle,
	PsDescription,
	PsSlider
} from '../../components'

export default {
	name: 'TestimonialsSlider',
	components: {
		PsEyebrow,
		PsSection,
		PsTitle,
		PsDescription,
		PsSlider
	},
	props: commonProps,
}
</script>

<style lang="scss">
.c-carousel__testimonials-container {
	display: flex;
	overflow-x: auto;
	overflow-y: hidden;
	-webkit-overflow-scrolling: touch;
	/* Internet Explorer 10+ */
	/* Firefox */
}

.c-carousel__testimonials-wrapper {
	width: 80%;
	display: flex;
	transition: transform 0.4s cubic-bezier(0.39, 0.03, 0.56, 0.57);
}

.c-carousel__testimonial {
	width: 100%;
	flex-shrink: 0;
	text-align: center;
	margin-bottom: var(--v-space);
	transition: opacity 1s cubic-bezier(0.39, 0.03, 0.56, 0.57),
		visibility 1s cubic-bezier(0.39, 0.03, 0.56, 0.57);
}
.c-carousel__testimonial[data-hidden='true'] {
	visibility: hidden;
	opacity: 0;
}
.c-carousel__testimonial[data-hidden='false'] {
	visibility: visible;
	opacity: 1;
	transition: opacity 0.2s cubic-bezier(0.39, 0.03, 0.56, 0.57),
		visibility 0.2s cubic-bezier(0.39, 0.03, 0.56, 0.57);
}
.c-carousel__testimonial:focus {
	outline: 1px dotted #888;
	outline-offset: -10px;
}

.ps-slider .c-carousel__testimonials-container {
	overflow: hidden;
}

.ps-slider .c-carousel__testimonials-wrapper {
	width: 100%;
	display: flex;
	transition: transform 0.4s cubic-bezier(0.39, 0.03, 0.56, 0.57);
}

.ps-slider .c-carousel__testimonial {
	margin: 0;
	flex-shrink: 0;
}

.c-carousel__testimonial__figure {
	margin: 0;
	padding: 0;
	width: 100%;
}
.c-carousel__testimonial__figure img {
	width: 90%;
}
.c-carousel__testimonial__figure figcaption {
	padding: var(--c-padding);
	max-width: 80ch;
	margin: 0 auto;
}

.ps-slider--testimonials .ps-carousel__testimonial {
	max-width: 840px;
	width: 100%;
	margin: auto;
	margin-bottom: var(--c-margin);
	padding: 4rem 1.5rem;
	background-color: var(--color--secondary);
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
@media all and (min-width: 50em) {
	.ps-slider--testimonials .ps-carousel__testimonial {
		padding: calc(var(--v-space) / 1.25) var(--c-padding);
	}
}

.ps-slider--testimonials .ps-carousel__testimonial__logo {
	margin-bottom: var(--v-margin);
	max-width: 150px;
}

.ps-slider--testimonials .ps-carousel__testimonial__content {
	line-height: 1.3;
	line-height: 1.2;
	font-size: calc(1rem * var(--text-min-xl));
	max-width: 50ch;
	margin: 0 auto;
}
@media screen and (min-width: 40rem) {
	.ps-slider--testimonials .ps-carousel__testimonial__content {
		font-size: calc(
			calc(1rem * var(--text-min-xl)) +
				(var(--text-max-xl) - var(--text-min-xl)) * (100vw - 40rem) / (80 - 40)
		);
	}
}
@media screen and (min-width: 80rem) {
	.ps-slider--testimonials .ps-carousel__testimonial__content {
		font-size: calc(1rem * var(--text-max-xl));
	}
}
.ps-slider--testimonials .ps-carousel__testimonial__content p:last-of-type() {
	margin-bottom: 0;
}

.ps-slider--testimonials .ps-carousel__testimonial__footer {
	margin-top: var(--v-margin);
}

.ps-slider--testimonials .ps-carousel__testimonial__footer cite {
	font-style: normal;
}

.ps-slider--testimonials .ps-carousel__testimonial__author {
	font-weight: bold;
	font-size: calc(1rem * var(--text-min-l));
}
@media screen and (min-width: 40rem) {
	.ps-slider--testimonials .ps-carousel__testimonial__author {
		font-size: calc(
			calc(1rem * var(--text-min-l)) + (var(--text-max-l) - var(--text-min-l)) *
				(100vw - 40rem) / (80 - 40)
		);
	}
}
@media screen and (min-width: 80rem) {
	.ps-slider--testimonials .ps-carousel__testimonial__author {
		font-size: calc(1rem * var(--text-max-l));
	}
}

.ps-slider--testimonials .ps-carousel__testimonial__author,
.ps-slider--testimonials .ps-carousel__testimonial__author-position {
	display: block;
	margin-bottom: 0.5rem;
}
</style>
