export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;

    // Default to index.html for root
    if (path === "/") {
      path = "/index.html";
    }

    // Handle SPA routing - try .html extension
    if (!path.endsWith(".html") && !path.includes(".")) {
      path = path + ".html";
    }

    // Try to fetch from static content
    // Workers Sites automatically uploads files to KV and provides ASSETS binding
    try {
      const response = await ASSETS.fetch(request);
      
      if (response.status === 404) {
        // Fallback to index.html for SPA
        const indexRequest = new Request(new URL("/index.html", request.url).href, request);
        return await ASSETS.fetch(indexRequest);
      }
      
      return response;
    } catch (e) {
      return new Response("Error: " + e.message, { status: 500 });
    }
  },
};
