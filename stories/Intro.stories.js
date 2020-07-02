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
    <div class="ps__head" style="max-width: 600px;text-align: left">
      <header class="ps__header">
        <ps-eyebrow align="left">
          Vue essential slices
        </ps-eyebrow>
        <h1>
          Nicely made website sections, connected to a backend.
        <h1>
      </header>
      <p style="font-size: 20px">
        This library is part of <a target="_blank" href="https://slicemachine.dev">SliceMachine</a>, a tool for component-based approach on both the front-end and the back-end.
      </p>
      <p style="font-size: 20px">
        The easiest way to get started is by following the Getting started <a target="_blank" href="https://www.slicemachine.dev/documentation/getting-started">here</a>
        but if you're more of an adventurer, create a fresh Nuxt project and run this command in your CLI:
      </p>
      <p style="font-size: 20px">
        $> npx prismic-cli sm --setup
      </p>
    </div>
  </div>
  </ps-section>

`
});

export default {
  title: "Introduction 👋",
};
