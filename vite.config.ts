import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Pages from "vite-plugin-pages"

import ViteIcons, { ViteIconsResolver } from "vite-plugin-icons"
import ViteComponents from "vite-plugin-components"

import Layouts from "vite-plugin-vue-layouts"

import { VitePWA } from "vite-plugin-pwa"

import VueI18n from "@intlify/vite-plugin-vue-i18n"

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "~/": `${path.resolve(__dirname, "src")}/`,
        },
    },
    plugins: [
        vue(),

        // https://github.com/hannoeru/vite-plugin-pages
        Pages({
            extensions: ["vue"],
        }),

        // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
        Layouts(),

        // https://github.com/antfu/vite-plugin-components
        ViteComponents({
            extensions: ["vue"],

            // auto import icons
            customComponentResolvers: [
                // https://github.com/antfu/vite-plugin-icons
                ViteIconsResolver({
                    componentPrefix: "",
                    // enabledCollections: ['carbon']
                }),
            ],
        }),

        // https://github.com/antfu/vite-plugin-icons
        ViteIcons(),

        // https://github.com/antfu/vite-plugin-pwa
        VitePWA({
	    registerType: "autoUpdate",
            manifest: {
                name: "Vitesse",
                short_name: "Vitesse",
                theme_color: "#ffffff",
                icons: [
                    {
                        src: "/pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                ],
            },
        }),

        // https://github.com/intlify/vite-plugin-vue-i18n
        VueI18n({
            include: [path.resolve(__dirname, "locales/**")],
        }),
    ],

    // https://github.com/antfu/vite-ssg
    ssgOptions: {
        script: "async",
        formatting: "minify",
    },

    optimizeDeps: {
        include: ["vue", "vue-router", "@vueuse/core"],
        exclude: ["vue-demi"],
    },
})
