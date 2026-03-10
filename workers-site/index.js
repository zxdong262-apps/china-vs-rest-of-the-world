export default {
  async fetch(request, env, ctx) {
    return await ASSETS.fetch(request);
  }
};
