// Implement service worker
const FILES_TO_CACHE = [
  "/",
  "../public/index.html",
  "../public/styles.css",
  "../public/index.js",
  "../public/icons/icon-192x192.png",
  "../public/icons/icon-512x512.png",
  "https://fonts.googleapis.com/css?family=Istok+Web|Montserrat:800&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
];

// Adding event listener to install PRECACHE event
const PRECACHE = "precache-v1";
const RUNTIME = "runtime";

self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(self.skipWaiting())
  );
});
