import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      greet: (msg: string) => console.log(`Hello from plugin: ${msg}`),
    },
  };
});
