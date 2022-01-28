import { defineConfig } from 'laravel-vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig()
	.withPlugin(svelte)
	.merge({
		// Your own Vite options
	})
