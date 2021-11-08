$(document).ready (function(){ 

    $("#boton-electro").click(function(){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").slideUp(1000)
    })
    $("#boton-cocina").click(function(){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").toggle(1000)
        console.log("cocina")
    })
    $("#boton-hardware").click(function(){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").toggle(1000)
        console.log("boton hardware")
    })
    $("#boton-belleza").click(function (){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").toggle(1000)
    })
    $("#boton-arte").click(function (){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.belleza,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").fadeOut(1800)
    })
    $("#boton-mascotas").click(function (){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").toggle(1100)
    })
    $("#boton-SmartPhone").click(function (){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").fadeToggle(1700)
    })   
    $("#boton-Ropa-femenina").click(function (){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").fadeOut(1500)
    })
    $("#boton-todos").click(function (){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
    
    })
    $("#foto1").click(function(){
        $("#fotoPrincipal").attr("src","./img/Hardware/partespc/gabinete_resultado.jpg")
    })
    $("#foto2").click(function(){
        $("#fotoPrincipal").attr("src","./img/Hardware/partespc/tecladorgb_resultado.jpg")
    })
    $("#foto3").click(function(){
        $("#fotoPrincipal").attr("src","./img/Hardware/partespc/monitores_resultado.jpg")
    })
    $("#foto3").click(function () {
        $("#descripcion").text("Monitor")
    })
    $("#foto2").click(function () {
        $("#descripcion").text("Teclado")
    })
    $("#photo1").click(function () {
        $("#photoprimcipal").attr("src","./img/Arte/Sta Therese extasis Baroque-sculpture.jpg")
    })
    $("#photo1").click(function () {
        $("#descrip").text("Santa Teresa de Jesus")
    })
    $("#photo2").click(function () {
        $("#photoPrincipal").attr("src",".")
    })
});


