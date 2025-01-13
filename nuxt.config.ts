export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      title: "khonhaen space",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/icon", 'nuxt-tiptap-editor'],
  runtimeConfig: {
    public: {
      webApi: process.env.NUXT_PUBLIC_WEB_API,
      googleMapsApiKey: process.env.NUXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    },
  },
});


// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-04-03',
//   devtools: { enabled: true },
//   app: { 
//     head: {
//       title: 'khonhaen space',

//     }

//   },
//   modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/icon', 'nuxt-tiptap-editor'],
//   // pinia: {
//   //   autoImports: ['defineStore', 'storeToRefs'], // (อาจเลือกเปิดใช้งานอัตโนมัติได้)
//   // }
// })