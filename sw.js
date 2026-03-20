// 極簡 Service Worker，只為滿足 PWA 安裝條件
const CACHE_NAME = 'translator-kiosk-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// 唔做任何離線快取，因為翻譯 API 必須連網
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
