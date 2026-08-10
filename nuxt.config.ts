// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      title: 'Loc Nguyen',
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Loc Nguyen\'s Portfolio'}
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
