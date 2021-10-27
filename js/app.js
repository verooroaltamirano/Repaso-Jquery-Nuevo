$(document).ready (function(){ 

    $("#boton-electro").click(function(){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas").show()
        $(".cocina,.Hardware,.belleza,.arte,.mascotas").toggle(1000)
    })
    
    $("#boton-cocina").click(function(){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas").show()
        $(".electro,.Hardware,.belleza,.arte,.mascotas").toggle(1000)
    })

    $("#boton-hardware").click(function(){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas").show()
        $(".electro,.cocina,.belleza,.arte,.mascotas").toggle(1000)
        console.log("boton hardware")
    })
    $("#boton-belleza").click(function () {
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas").show()
        $(".electro,.cocina,.Hardware,.arte,.mascotas").toggle(1000)
        console.log("boton belleza")
    })
    $("#boton-arte").click(function () {
        $(".cocina,.electro,.Hardware,.belleza,.arte,.mascotas").show()
        $(".electro,.cocina,.Hardware,.belleza,.mascotas").toggle(1000)
        console.log("boton arte")
    })
    $("#boton-mascotas").click(function () {
        $(".cocina,.electro,.Hardware,.belleza,.arte,.mascotas").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte").toggle(1000)
    })

    $("#boton-hardware").click(function(){
        $(".electro,.cocina,.hardware,.belleza,.arte,.mascotas").show()
        $(".electro,.hardware,.cocina").toggle(1000)
        console.log("boton hardware")
    })
    $("#boton-belleza").click(function () {
        $(".electro,.cocina,.hardware,.belleza,.arte,.mascotas").show()
        $(".hardware,.cocina,.mascotas").toggle(1000)
        console.log("boton belleza")
    })
    $("#boton-arte").click(function () {
        $(".cocina,.electro,.hardware,.belleza,.arte,.mascotas").show()
        $(".belleza,.cocina,.electro").toggle(1000)
        console.log("boton arte")
    })
    $("#boton-mascotas").click(function () {
        $(".cocina,.electro,.hardware,.belleza,.arte,.mascotas").show()
        $(".hardware,.cocina,.electro").toggle(1000)
        console.log("boton mascotas")

    })
    $("#boton-todos").click(function () {
        $(".cocina,.electro,.Hardware,.belleza,.arte,.mascotas").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas").toggle(1000)
        console.log("boton todos")
    })

});