import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: fileURLToPath(new URL('./src', import.meta.url)),
            },
        ],
    },
    test: {
        // enable jest-like global test APIs
        globals: true,
        // simulate DOM with happy-dom
        // (requires installing happy-dom as a peer dependency)
        environment: 'happy-dom',
    },
})
