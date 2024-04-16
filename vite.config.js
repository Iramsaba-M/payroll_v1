import { defineConfig } from 'vite';
import react from 'vite-plugin-react'; // Update the import path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
});
