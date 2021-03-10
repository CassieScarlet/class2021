// const cacheName = 'v1';

// //Call install event

// self.addEventListener('install', e => {
//     console.log("Service worker installed");
//     // e.waitUntil(
//     //     caches.open(cacheName)
//     //     .then(cache => {
//     //         console.log('ServiceWorker: caching files' );
//     //         cache.addAll(cacheAssets);
//     //     })
//     //     .then(() => self.skipWaiting())
//     // );
// });

// // call activate event

// self.addEventListener('activate', e => {
//     console.log("Service worker activated");
//     //remove unwanted cache
//     e.waitUntil(
//         caches.keys().then(cacheNames => {
//             return Promise.all(
//                 cacheNames.map(cache => {
//                     if(cache !== cacheName) {
//                         console.log('Service Worker: Clearing obsolete cache');
//                         return caches.delete(cache);
//                     }
//                 })
//             )
//         })
//     );
// });

// // call fetch

// self.addEventListener('fetch', e => {
//     console.log('Service worker: fetching');
//     e.respondWith(
//         fetch(e.request)
//         .then(res => {
//             //make copy clone of response
//             const resClone = res.clone();
//             //open cache
//             caches
//             .open(cacheName).then(cache => {
//                 // add response to cache
//                 cache.put(e.request, resClone);
//             });
//             return res;
//         }) .catch(err => caches.match(e.request).then(res => res))
//     );
// });