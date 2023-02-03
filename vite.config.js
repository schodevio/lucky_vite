import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  publicDir: './src/js/public',
  build: {
    manifest: true,
    emptyOutDir: true,
    outDir: 'public',
    rollupOptions: {
      input: [
        './src/css/application.scss',
        './src/js/packs/application.ts',
        './src/js/packs/hello.ts'
      ],
      output: {
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: file => {
          if (/\.(gif|jpe?g|png|webp|svg)$/.test(file.name ?? '')){
            return 'img/[name].[hash].[ext]'
          }

          if (/\.css$/.test(file.name ?? '')) {
            return 'css/[name].[hash].[ext]'
          }

          return '[name].[hash].[ext]'
        }
      }
    }
  },
  server: {
    watch: {
      include: [
        '**/src/js/**',
        '**/src/css/**'
      ]
    },
  },
  resolve: {
    alias: {
      '@js': path.resolve(__dirname, './src/js'),
      '@css': path.resolve(__dirname, './src/css'),
    }
  }
})
