import { serve } from "bun";
import index from "./index.html";
import { resolve } from "path";

const server = serve({
  port: 0, // Use random available port
  routes: {
    // Serve static files from src/ directory
    async "/favicon-16x16.png"(req) {
      const file = Bun.file(resolve("./src/favicon-16x16.png"));
      return new Response(file);
    },

    async "/favicon-32x32.png"(req) {
      const file = Bun.file(resolve("./src/favicon-32x32.png"));
      return new Response(file);
    },

    async "/apple-touch-icon.png"(req) {
      const file = Bun.file(resolve("./src/apple-touch-icon.png"));
      return new Response(file);
    },

    async "/logo.png"(req) {
      const file = Bun.file(resolve("./src/logo.png"));
      return new Response(file);
    },

    // API routes
    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },

    // Serve index.html for all unmatched routes (SPA fallback)
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
