import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            '/input': {
                secure: false,
                headers: {'cookie': 'session=53616c7465645f5fcb3b1b421b46b40d1a8ef710e3314651c2bf5dff1749966121455e8d2f870903e3433642e1a3c38d8154648c7d56b3631720074def330ad6'},
                target: 'https://adventofcode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/input/, ''),
            }
        }
    }
})
