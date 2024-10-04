// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo", "@nuxtjs/turnstile"],
  css: ["@/assets/index.css"],
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  turnstile: {
    siteKey: "0x4AAAAAAAUBxBNAPgRBo5hj",
  },
  app: {
    head: {
      title: "Milind Ranjan Portfolio",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "Milind's portfolio website showcasing Milind’s work",
        },
        {
      
          name: "keywords",
          content: "portfolio, website, developer, programmer",
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://db.onlinewebfonts.com/c/58af16514d95c0d78284e9f275ee75ae?family=ES+Build+TRIAL' // Replace with the actual URL of your web font
        }
      ]
    },
  },
});