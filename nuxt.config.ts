import { defineNuxtConfig } from 'nuxt'
import { envConfig } from './env.js'
const ENV = process.env.NODE_ENV == 'development' ? envConfig['development'] : envConfig[process.env.NODE_ENV]
console.log(ENV)
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    app: {
      baseURL: ENV.BASE_URL,
      cdnURL: ENV.CDN_URL
    },
  }
})
