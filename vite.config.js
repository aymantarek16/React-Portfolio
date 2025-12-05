import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Portfolio',
        short_name: 'Portfolio',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
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
