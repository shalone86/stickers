// Free Catholic Media hub on methodiusmedia.com, plus redirect-only hostnames.
// Every redirect is a 301 that keeps the path, so old links and search
// rankings carry over instead of turning into 404s.

const REDIRECTS = {
  'www.methodiusmedia.com': 'https://methodiusmedia.com',
  'gallery.methodiusmedia.com': 'https://sdcason.com',
  'courses.sdcason.com': 'https://courses.methodiusmedia.com',
  'kids.sdcason.com': 'https://kids.methodiusmedia.com',
  'rosary.methodiusmedia.com': 'https://illuminatedrosary.org',
  'illuminatedrosary.com': 'https://illuminatedrosary.org',
  'www.illuminatedrosary.com': 'https://illuminatedrosary.org',
};

// Files that belong to the hub. Anything else on methodiusmedia.com is an old
// link from when it mirrored the music site, so it goes to methodius.media.
const HUB_PATHS = /^\/(index\.html|robots\.txt|sitemap\.xml|img\/[\w-]+\.webp|fonts\/[\w-]+\.woff2)?$/;

// methodiusmedia.com used to serve the music site's service worker. This
// replacement clears its caches and unregisters it for returning visitors.
const RETIRED_SW = `self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(
  caches.keys()
    .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
    .then(() => self.registration.unregister())
));
`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const target = REDIRECTS[url.hostname];
    if (target) return Response.redirect(target + url.pathname + url.search, 301);

    if (url.pathname === '/sw.js') {
      return new Response(RETIRED_SW, {
        headers: { 'Content-Type': 'text/javascript', 'Cache-Control': 'no-cache' },
      });
    }
    if (HUB_PATHS.test(url.pathname)) return env.ASSETS.fetch(request);
    return Response.redirect('https://methodius.media' + url.pathname + url.search, 301);
  },
};
