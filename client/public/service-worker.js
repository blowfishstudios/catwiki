
/* eslint-disable no-restricted-globals */

// https://developers.google.com/web/ilt/pwa/lab-caching-files-with-service-worker


const staticCacheName = "kitty-wiki-cache-v1";
const urlsToCache     = [
                            "index.html",
                            "offline.html",
                        ];


// 1. Cache the application shell
self.addEventListener( "install", event => {

    console.log('Attempting to install service worker and cache static assets');

    // Perform install steps
    event.waitUntil(
        
        caches.open( staticCacheName )
            .then( ( cache ) => {
                console.log( "Opened cache :D" );
                return cache.addAll( urlsToCache );
            })
        );
    });

// 2. Serve files from the cache.
self.addEventListener( "fetch", event => {
    
    console.log('Fetch event for: ', event.request.url);
    
    event.respondWith(
        
        caches.match( event.request )
            .then( response => {

                // Fall back to network
                if ( response ) {
                    console.log('Found ', event.request.url, ' in cache');
                    return response;
                    }
                    console.log('Network request for ', event.request.url);
                    return fetch(event.request);

                // If both fail, show a generic fallback:
                }).catch(error => {

                    return caches.match(" offline.html"); 
                })
            );
    });

    // 3. Delete outdated caches.
    self.addEventListener( "activate", ( event ) => {
        
        console.log('Activating new service worker...');
        
        const cacheAllowList = [staticCacheName];
    
        event.waitUntil(
            caches.keys().then( cacheNames => {

                return Promise.all(
                    cacheNames.map( cacheName => {
                        if ( !cacheAllowList.indexOf( cacheName ) === -1 ) {
                            return caches.delete( cacheName );
                        }
                    })
                );
            })
        );
    });
