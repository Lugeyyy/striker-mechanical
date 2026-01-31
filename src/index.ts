import { serve } from "bun";
import { readFileSync } from "fs";
const indexFile = readFileSync("./src/index.html", "utf8");
import logo from "./logo.png";

const server = serve({
  port: 3000,
  fetch(req, server) {
    const url = new URL(req.url);
    
    // API routes
    if (url.pathname.startsWith("/api/hello")) {
      if (req.method === "GET" && url.pathname === "/api/hello") {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      }
      
      if (req.method === "PUT" && url.pathname === "/api/hello") {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      }
      
      // Dynamic route for /api/hello/:name
      const match = url.pathname.match(/^\/api\/hello\/([^\/]+)$/);
      if (match) {
        const name = match[1];
        return Response.json({
          message: `Hello, ${name}!`,
        });
      }
    }
    
    // Serve static assets
    if (req.url.includes("/src/logo.png")) {
      return new Response(logo, {
        headers: {
          "Content-Type": "image/png",
        },
      });
    }
    
    // Serve frontend.tsx
    if (url.pathname === "/src/frontend.tsx") {
      try {
        const frontendCode = readFileSync("./src/frontend.tsx", "utf8");
        return new Response(frontendCode, {
          headers: {
            "Content-Type": "text/typescript; charset=utf-8",
          },
        });
      } catch (error) {
        return new Response("Frontend file not found", { status: 404 });
      }
    }
    
    // Serve index.html for all other routes (SPA fallback)
    return new Response(indexFile, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
