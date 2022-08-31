import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // router: {
  //   base: '/antares_normalization'
  // },
  runtimeConfig: {
    app: {
       baseURL: '/testing/',
       cdnURL: '/testing/'
  //      buildAssetsDir: '/_nuxt/' // Exposed to the frontend as well.
    },
  //   // ssr: false
  }
})
