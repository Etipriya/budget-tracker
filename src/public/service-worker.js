// Implement service worker
var CACHE_NAME = "my-site-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

var urlsToCache = [
  "/",
  "/db.js",
  "/index.js",
  "/manifest.json",
  "/styles.css",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

// Adding event listener to install  event

//Adding activate events to remove old cache

//Added event listener to fetch
