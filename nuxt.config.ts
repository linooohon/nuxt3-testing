import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
       baseURL: '/testing/' // Exposed to the frontend as well.
    }
  }
})
