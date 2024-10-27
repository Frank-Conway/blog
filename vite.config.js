import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from "path"

import Icons from 'unplugin-icons/vite'

// Element 插件
// 自动导入组件
import AutoImport from 'unplugin-auto-import/vite'
// 自动导入Components里组件
import Components from 'unplugin-vue-components/vite'
// 自动导入ElementPlus里组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// tailwindcss 插件
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// 支持svg
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    // svg
    createSvgIconsPlugin({
      // Specify the icon folder to be cached process.cwd() 就是绝对路径的意思
      iconDirs: [resolve(process.cwd(), "src/icons/svg")],
    }),
    Icons({
      autoInstall: true
    }),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 添加在 css 的 plugin 里，和plugin同级
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler" // or 'modern'
      }
    },
  },
  server: {
    port: 8080, // 配置前端项目启动端口
    host: "0.0.0.0",
    https: false,
    open: true, // 启动后自动打开浏览器
    // 热更新
    hmr: {
      overlay: false,
    },
    proxy: {
      // 本地后端代理
      "/api": {
        //要访问的跨域的域名
        target: "http://localhost:8888",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      // minio 代理
      "/blog-images": {
        target: "http://mrzym.top:9000/blog-images",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/blog-images/, ""),
      },
    },
    // 打包输出
    build: {
      sourcemap: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 4000,
      rollupOptions: {
        input: {
          index: resolve("index.html"),
        },
        // 静态资源分类打包
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        },
      },
    }
  },
  assetsInclude: ['**/*.JPG', '**/*.jpeg', '**/*.png', '**/*.svg', '**/*.gif'],
})
