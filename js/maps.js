;(function () {

    const my_place = {
        lat:14.550962,
        lng:-90.572075
    }

 

    
    class UserLocation{
        static get(callback){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition((location)=>{
                    callback({
                        lat: location.coords.latitude,
                        lng: location.coords.longitude
                    })
                })

            }else{
                alert("No pudimos detectar el lugar en el que te encuentres")
            }
        }
    }

    google.maps.event.addDomListener(window,"load",()=>{
        const map = new google.maps.Map(document.getElementById("map"),
        {
            center: my_place,

            zoom: 15
        })

        const marker = new google.maps.Marker({
            map: map,
            position: my_place,
            title: 'Tortillas de harina',
            visible: true
        })
    
/*

        UserLocation.get((cords)=>{      
            let origen = new google.maps.LatLng(cords.lat, cords.lng)
            let destino = new google.maps.LatLng(my_place.lat, my_place.lng)
            let service = new google.maps.DistanceMatrixService()

            service.getDistanceMatrix({
                origins: [origen],
                destinations: [destino],
                travelMode: google.maps.TravelMode.DRIVING
            
            },(response,status)=>{
                if(status == google.maps.DistanceMatrixStatus.OK){
                    const duration_element = response.row[0].elemento[0]
                    const duracion_viaje = duration_element.duration.text
                    document.querySelector("#message")
                            .innerHTML =  `
                                Estas a ${duration_viaje} de tener una noche increible 
                                en 
                                <span class="dancing-script">
                                        Tortillas de harina
                                </span>`

                    console.log(duracion_viaje)
                }

                
            })
          })
              */

    })




})()