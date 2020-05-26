<template>
	<ps-section v-bind="theme.wrapper" classAttr="ps-pricing-table">
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
			<div class="ps__main">
				<ol
					role="list"
					aria-label
					class="ps-pricing-table__options ps__card-list"
				>
					<li
						class="ps-pricing-table__option ps__card-item ps__card-item--full"
						v-for="(item, index) in slice.items"
						:key="`ps__card-item-${index + 1}`"
					>
						<article>
							<header v-if="item.plan_title">
								<h3
									class="ps-pricing-table__option__title ps__card-item__title"
								>
									{{ $prismic.asText(item.plan_title) }}
								</h3>
								<span class="ps-pricing-table__option__price">
									{{ $prismic.asText(item.price_option) }}
								</span>
							</header>
							<prismic-rich-text
								class="ps__card-item__content"
								:field="item.features"
								:htmlSerializer="listSerializer"
							/>
							<div
								v-if="
									item.call_to_action &&
										item.call_to_action_text &&
										item.call_to_action_text.length
								"
								class="ps__card-item__cta"
							>
								<ps-button
									secondary
									:theme="theme.button"
									:link="item.call_to_action"
								>
									{{ $prismic.asText(item.call_to_action_text) }}
								</ps-button>
							</div>
						</article>
					</li>
				</ol>
			</div>
		</div>
	</ps-section>
</template>
<script>
import { commonProps } from '../../utils'

import {
	PsButton,
	PsSection,
	PsEyebrow,
	PsDescription,
	PsTitle,
} from '../../components'

import { featureIcon, notIncludedIcon } from './icons'

export default {
	name: 'PricingTable',
	components: {
		PsButton,
		PsSection,
		PsEyebrow,
		PsDescription,
		PsTitle,
	},
	props: commonProps,
	methods: {
		listSerializer(type, props, _, children) {
			if (type === 'list-item') {
				const isNotIncluded =
					props.spans &&
					props.spans.find(e => e && e.data.label === 'not-included')
				const className = `ps-pricing-table__option__feature${
					isNotIncluded ? ' not-included' : ''
				}`
				return `<li class="${className}">${
					isNotIncluded ? notIncludedIcon : featureIcon
				} ${props.text}</li>`
			}
			if (type === 'group-list-item') {
				return `
					<ul role="list" class="ps-pricing-table__option__features" aria-label>
						${children.join('')}
					</ul>`
			}
		}
	}
}
</script>
<style lang="scss">
.ps-pricing-table__option {
	@media all and (min-width: 40em) {
		&:nth-of-type(2n) {
			background-color: #fff;
			border: 1px solid;
		}
	}
}

.ps-pricing-table__option__price {
	display: block;
	color: var(--color-text-grey);
}

.ps-pricing-table__option__features {
	list-style: none;
	padding: 0;
}

.ps-pricing-table__option__feature {
	margin-bottom: 1em;
	padding-left: var(--h-padding);
	position: relative;

	.feature-icon {
		color: var(--color--primary);

		display: block;
		width: 1em;
		height: 1em;
		position: absolute;
		left: 0;
		top: 50%;
		margin-top: -0.5em;
	}

	&.not-included {
		.feature-icon {
			color: #888;
		}
	}
}
</style>
