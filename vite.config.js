import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project URL needs the repository name as base.
// Change "PolyTrack-BD" only if your GitHub repository has a different name.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' ? '/PolyTrack-BD/' : '/',
})
