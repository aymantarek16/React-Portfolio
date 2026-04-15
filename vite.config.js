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
            urlPattern: ({ url }) => {
              const isSameOrigin = url.origin === self.location.origin;
              const isStaticAsset = /\.(js|css|png|jpg|jpeg|svg|gif|woff|woff2|json)$/i.test(url.pathname);
              return isSameOrigin && isStaticAsset;
            },
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-assets',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
              },
              cacheableResponse: {
                statuses: [0, 200]
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
