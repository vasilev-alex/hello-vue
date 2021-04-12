declare module 'my-component' {
  // import type { Component } from "vue";

  interface VueSelectProps {
    test: boolean;
  }

  export interface VueSelectConstructor extends VueConstructor {
    props: VueSelectProps;
    propNames: VueSelectProps;
  }

  const UltraButton: Component<any, any, any, VueSelectProps>;

  export default UltraButton;
}

declare module 'hello-world' {
  export const x: boolean;
}
