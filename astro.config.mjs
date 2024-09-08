import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import lenis from "astro-lenis";
import icon from "astro-icon";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), lenis(),
    icon({
      include: {
        octicon: ['*'], // octicon アイコンセットを追加
      },
    })
  ],
  vite: {
    plugins: [],
        
    resolve: {
      alias: {
        '@': '/src', // '@' を '/src' ディレクトリにエイリアス
      },
    },
    css: {
      preprocessorOptions: {
        stylus: {
          // ここに Stylus の設定オプションを追加できます
        },
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // 1000kBに設定
  }
});