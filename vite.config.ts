import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { visualizer } from 'rollup-plugin-visualizer'
import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    // Generate bundle analysis report
    visualizer({
      template: 'treemap',
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/stats.html',
    }),
    // PWA support
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'TurnPikeAnalyst',
        short_name: 'TPA',
        description: 'TurnPikeAnalyst - Enterprise Data Solutions & Services',
        theme_color: '#2563eb',
        icons: [
          {
            src: 'asset 0.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'asset 0.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    // Gzip compression
    viteCompression({
      verbose: false,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Brotli compression
    viteCompression({
      verbose: false,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['embla-carousel-react', 'lucide-react'],
          'animation-vendor': ['framer-motion'],
        },
      },
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    // Generate source maps for easier debugging
    sourcemap: true,
  },
  css: {
    // Generate source maps for CSS
    devSourcemap: true,
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
  // Development server options
  server: {
    open: true,
    port: 3000,
    cors: true,
    host: true,
  },
})
