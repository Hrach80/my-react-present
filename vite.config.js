import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      manifest: {
        name: 'Վարուժան Վաղարշակյան',
        short_name: 'Վ․Վ․',
        description: 'React.js ծրագիր Vite-ով որպես PWA։',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'react.png',
            sizes: '80x80',
            type: 'image/png',
          },
          {
            src: 'rek',
            sizes: '150x150',
            type: 'image/png',
          },
          {
            src: 'rek.png',
            sizes: '150x150',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});