import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            '/input': {
                secure: false,
                headers: {'cookie': 'session='},
                target: 'https://adventofcode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/input/, ''),
            }
        }
    }
})
