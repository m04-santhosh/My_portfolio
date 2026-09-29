import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Development middleware to serve /api/contact during local 'npm run dev'
function contactApiDevPlugin() {
  return {
    name: 'contact-api-dev-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        // Strip query parameters if any
        const url = req.url ? req.url.split('?')[0] : '';
        if (url === '/api/contact') {
          if (req.method !== 'POST') {
            res.statusCode = 405;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }));
            return;
          }

          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });

          req.on('end', async () => {
            try {
              req.body = body ? JSON.parse(body) : {};
            } catch {
              req.body = body;
            }

            try {
              // Dynamic import so it reloads on file changes
              const { default: handler } = await import('./api/contact.js');
              await handler(req, res);
            } catch (err) {
              console.error('Error handling /api/contact:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contactApiDevPlugin()],
});
