
 viteconfig.js

// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
server: {
host: '0.0.0.0',
},
});


// export default {
// server: {
// port: 5173, // Make sure this matches the port your application is configured to use
// },
// };
