// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@vee-validate/nuxt'
  ],
  primevue: {
    /* Configuration */
  }
})