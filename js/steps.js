;(function(){
const selector = "#contact-form"
//$(".step:nth-child(1)").addClass("active")


$(".step textarea").on("keydown",(ev)=>{
    if(ev.keyCode == 13){
        ev.preventDefault();
        //blur quita el foco del cursor
        $(ev.target).blur()
    }
})

$(".path-step").on("click", (ev)=>{
    const current_circle = $(ev.target)
    $(".path-step.active").removeClass("active")

    focus_circle(current_circle)

                        //index cuenta la posicion
    const position = current_circle.index(".path-step") + 1 
    let $test = $(".step:nth-child("+position+")") 
    enfocar_siguiente_input($test)
})






$(selector).find(".input").on("change",(ev)=>{

    let $input = $(ev.target)
                                //next pasa al siguiente hermano
    let $next_step = $input.parent().next(".step")


    const is_form_valid = es_valido_formulario()

    if(!is_form_valid && $next_step.length > 0){
        enfocar_siguiente_input($next_step)

    }else{
        validar_formulario()

    }
    

})

// helpers





function validar_formulario(){
    if(es_valido_formulario()){

        sendForm()
    }else{
        let $fieldset_invalido = $(selector).find(".input:invalid").first().parent()
        enfocar_siguiente_input($fieldset_invalido) 
    }

}

function es_valido_formulario(){
    return document.querySelector(selector).checkValidity()

}

function enfocar_siguiente_input($next_step){
    $(".step.active").removeClass("active")
    $next_step.addClass("active")
    $next_step.find(".input").focus()

    const pisicion = ($next_step.index(".step"))+1
    console.log(pisicion)

    focus_circle($(".path-step:nth-child("+pisicion+")"))



   // $next_input.focus()


}


    function focus_circle($circles){
        $(".path-step.active").removeClass("active")

        $circles.addClass("active");
    

    }


    function sendForm(){
        const $form = $(selector)
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