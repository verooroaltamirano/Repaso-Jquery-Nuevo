$(document).ready (function(){ 

    $("#boton-electro").click(function(){
        $(".electro,.cocina,.hardware,.belleza,.arte,.mascotas").show()
        $(".electro,.arte,.mascotas").toggle(1000)
    })
    
    $("#boton-cocina").click(function(){
        $(".electro,.cocina,.hardware,.belleza,.arte,.mascotas").show()
        $(".hardware,.electro,.mascotas").toggle(1100)
    })

    $("#boton-hardware").click(function(){
        $(".electro,.cocina,.hardware,.belleza,.arte,.mascotas").show()
        $(".electro,.hardware,.cocina").toggle(1100)
        console.log("boton hardware")
    })
    $("#boton-belleza").click(function () {
        $(".electro,.cocina,.hardware,.belleza,.arte,.mascotas").show()
        $(".hardware,.cocina,.mascotas").toggle(1100)
        console.log("boton belleza")
    })
    $("#boton-arte").click(function () {
        $(".cocina,.electro,.hardware,.belleza,.arte,.mascotas").show()
        $(".belleza,.cocina,.electro").toggle(1100)
        console.log("boton arte")
    })
    $("#boton-mascotas").click(function () {
        $(".cocina,.electro,.hardware,.belleza,.arte,.mascotas").show()
        $(".hardware,.cocina,.electro").toggle(1100)
        console.log("boton mascotas")

    })

});