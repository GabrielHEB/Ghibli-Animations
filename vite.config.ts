import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig as defineVitestConfig } from 'vitest/config';


export default defineConfig({
  plugins: [react()],
  base: '/Ghibli-Animations/',
  
  
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: [],
      provider: 'c8',
    },
  },
});
