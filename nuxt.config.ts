// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo", "@nuxtjs/turnstile"],
  css: ["@/assets/index.css", "aos/dist/aos.css"], // Add AOS CSS here
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  
  turnstile: {
    siteKey: "0x4AAAAAAAUBxBNAPgRBo5hj",
  },
  plugins: [{ src: '~/plugins/aos.js', mode: 'client' }], // Add AOS plugin here
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
          content: "Milind's portfolio website showcasing Milind's work",
        },
        {
          name: "keywords",
          content: "portfolio, website, developer, programmer",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },
})