import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['framer-motion'],
          lottie: ['lottie-react'],
          forms: ['@formspree/react'],
        },
      },
    },
    cssMinify: true,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'offlineCache',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 24 * 60 * 60 // 24 hours
              }
            }
          }
        ],
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true
      },
      manifest: {
        name: 'My Portfolio',
        short_name: 'Portfolio',
        start_url: '.',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#0a0a0a',
        icons: [
          {
            src: '/icons/ayman-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/ayman-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
