import {
  PsSection,
  PsEyebrow,
  PsTitle,
  PsDescription
} from '../src/components'

export const Wip = () => ({
  components: {
    PsTitle,
    PsSection,
    PsEyebrow,
    PsDescription,
  },
  props: {
  },
  template: `
  <ps-section>
  <div class="ps__wrap">
    <div class="ps__head">
      <header class="ps__header">
        <ps-eyebrow align="left">
          Vue essential slices
        </ps-eyebrow>
        <ps-title align="left">
          Nicely made website sections,<br/> connected to a backend.
        </ps-title>
      </header>
      <ps-description align="left">
        This library is part of <a target="_blank" href="https://slicemachine.dev">SliceMachine</a>, a tool for component-based approach on both the front-end and the back-end.
      </ps-description>
      <ps-description align="left" style="margin-top: 1em">
        The easiest way to get started is by following the Getting started <a target="_blank" href="https://www.slicemachine.dev/documentation/getting-started">here</a>
        but you're more of an adventurer, create a fresh Nuxt project and run this command in your CLI:
      </ps-description>
      <ps-description align="left" style="background:#F7F7F7;margin-top:1em;padding: 12px">
        $> npx prismic-cli sm --setup
      </ps-description>
    </div>
  </div>
  </ps-section>

`
});

export default {
  title: "Introduction 👋",
};
