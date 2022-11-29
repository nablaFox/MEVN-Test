const aliases = require('./aliases.config')
const path = require('path')

import { defineConfig } from 'vite'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    root: 'src',
    server: {
        open: true
    },
    resolve: {
        alias: aliases
    },
    plugins: [
        ViteEjsPlugin(),
        vue()
    ],
})