import { NextServer } from "next/dist/server/next";
import { LRUCache } from "lru-cache"

const ssrCache = new LRUCache({
  max: 100,
  ttl: 1000 * 60 * 60, // 1hour
});

function getCacheKey(req: any) {
  // can be modified to create unique keys for cache objs
  return `${req.url}`;
}

async function render(app: NextServer, req: any, res: any, pagePath: string, queryParams: any) {
  try {
    // const html = await app.renderToHTML(req, res, pagePath, queryParams)
    // res.send(html)
    app.render(req, res, pagePath, queryParams);
  } catch (err: any) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}

async function renderAndCache(app: NextServer, req: any, res: any, pagePath: string, queryParams: any) {
  const key = getCacheKey(req);

  if (process.env.LRU_CACHE_ENABLED !== "true") {
    return render(app, req, res, pagePath, queryParams);
  }
  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader("x-cache", "HIT");
    res.end(ssrCache.get(key));
    return;
  }

  try {
    // If not let's render the page into HTML
    // const html = await app.renderToHTML(req, res, pagePath, queryParams)
    // Something is wrong with the request, let's skip the cache
    const _resEnd = res.end.bind(res);
    res.end = function (payload: any) {
      // Add here custom logic for when you do not want to cache the page, for example when
      // the status is not 200
      if (res.statusCode !== 200) {
        console.warn("Oops, something is wrong, will skip the cache");
      } else {
        ssrCache.set(key, payload);
      }
      return _resEnd(payload);
    };
    res.setHeader("x-cache", "MISS");
    app.render(req, res, pagePath, queryParams);
  } catch (err: any) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}

export { renderAndCache, render };