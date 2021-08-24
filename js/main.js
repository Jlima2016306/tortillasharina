if(navigator.serviceWorker){
    
    navigator.serviceWorker.register("/sw.js")
}

;(function(){
    isOpen()
    checkScroll()
    let sticky = false;
    let currentPosition = 0
    const contador = $("[data-name='image-counter']").attr("content")
    const email = "https://formspree.io/f/xbjqppkp"



    $("#contact-form").on("submit", function(ev){
        ev.preventDefault();

        sendForm($(this))

        return false;
    })

    $(".menu-link").on("click", toggleNav )


    
    $("#menu-opener").on("click", function(){
        $("#responsive-nav ul").toggleClass("active")
        $(this).toggleClass("glyphicon-menu-hamburger")

    })    


    $("#stick-Navigation").removeClass("hidden")

    $("#stick-Navigation").slideUp(0)



    setInterval(()=>{

        if(currentPosition < contador) {
            currentPosition++

        }else{
            currentPosition = 0

        }

        $("#gallery .inner").css({
            left: "-"+currentPosition*100+"%"
        })

    },4000)


    //$ = Jquery
    $(window).scroll(checkScroll)

    function isOpen(){
        // relog de 24 horas 
        let date = new Date()
        const current_hour = date.getHours()

        if(current_hour < 9||current_hour > 21){
            $("#is-open .text").html("Cerrado ahora <br> Abierto de 9am a 9pm")
        }
    }

    function checkScroll(){
        const inBottom = isInBottom()

        if(inBottom){
            //mostrar navegacion
            console.log("Cambiar la navegacion")
            sticky = true;
            stickNavigation()

        }
        
        if(!inBottom && sticky){
                        //ocultar navegacion

            console.log("regresar la navegacion")
            sticky = false;

            unStickNavigation()



        }

    }

    function toggleNav(){
        $("#responsive-nav ul").toggleClass("active")
        $(".menu").toggleClass("glyphicon-menu-hamburger")


    }


    function stickNavigation(){
        $("#description").addClass("fixed").removeClass("absolute").removeClass("large-padding")
        $("#navigation").slideUp("fast")
        $("#stick-Navigation").slideDown("slow")

    }

    function unStickNavigation(){

        $("#description").removeClass("fixed").addClass("absolute").addClass("large-padding")
        $("#navigation").slideDown("fast")
        $("#stick-Navigation").slideUp("slow")
        

    }




    function isInBottom(){
        const $description = $("#description")
        const descriptionHeaight = $description.height()

        return $(window).scrollTop() > $(window).height() - (descriptionHeaight*1.5)
    }

 


    function sendForm($form){
        console.log($form.formObject())
        
        $.ajax({
            url: $form.attr("action"),
            method:"POST",
            data: $form.formObject(),
            dataType:"json",
            success: function(){
                alert("Correo enviado correctamente")
                $form.slideUp()
                $("#info-contacto").html("Enviamos tu mensaje, pronto nos pondremos en contacto contigo")
            }
        })

    }

})()