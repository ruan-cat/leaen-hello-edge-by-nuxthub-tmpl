// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-30",
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },

  // https://nuxt.com/modules
  modules: [
    // 不使用hub集成的东西。尽量避免使用cloudflare D1
    // "@nuxthub/core",
    "@nuxt/eslint",
  ],

  // 不使用hub集成的东西。尽量避免使用cloudflare D1
  // https://hub.nuxt.com/docs/getting-started/installation#options
  // hub: {},

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: "Hello from the Edge 👋",
    },
  },

  // // https://eslint.nuxt.com
  // eslint: {
  //   config: {
  //     stylistic: {
  //       quotes: 'single'
  //     }
  //   }
  // },

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare-pages",
  },
});
