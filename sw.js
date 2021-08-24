const cache_name = "torrtillas-v1"
const cache_urls =["/offline/ofline.html",
                    "/offline/style.css",
                    "/imagenes/food/res.png"]

self.addEventListener("install", function(ev){
    console.log("service wolker installed")

    caches.open(cache_name)
        .then(function(cache){
            console.log("cache opened")
            return cache.addAll(cache_urls)

        })
})


self.addEventListener("activate", function(ev){
    ev.waitUntil(
        caches.keys().then(function(cache_names){
            return Promise.all(
                cache_names.map(function(cache_nam){
                    if(cache_name !== cache_nam){
                            return caches.delete(cache_nam);
                    }
                }))
        })
    )
})

self.addEventListener("fetch", function(ev){

    ev.respondWith(
        caches.match(ev.request)
            .then(function(response){
           if(response){
               return response
           }

           return fetch(ev.request)
        }).catch(function(err){
            if(ev.request.mode == "navigate"){
                return caches.match("/offline/ofline.html")
            }

        })


    )
}) 
