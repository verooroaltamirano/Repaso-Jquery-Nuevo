$(document).ready (function(){ 
    $(".belleza2,.belleza3,.electro2,.mascotas2,.cocina2,.Hardware2,.SmartPhone2,.ropaFemenina2,.arte2,.ropaMasculina2,.autos2,.mascotas3,.motos2,.librosReligiosos3,.zapatosFemeninos2,.zapatosMasculinos2").hide();
    $("#boton-electro").click(function(){
        $(".electro,.electro2,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").slideUp(1300)
        $(".belleza2,.belleza3,.mascotas2,.cocina2,.Hardware2,.SmartPhone2,.ropaFemenina2,.arte2,.ropaMasculina2,.autos2,.mascotas3,.motos2,.librosReligiosos3,.zapatosFemeninos2,.zapatosMasculinos2").hide();
    })
    $("#boton-cocina").click(function(){
        $(".electro,.cocina,.cocina2,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").toggle(1200)
        $(".belleza2,.belleza3,.electro2,.mascotas2,.Hardware2,.SmartPhone2,.ropaFemenina2,.arte2,.ropaMasculina2,.autos2,.mascotas3,.motos2,.librosReligiosos3,.zapatosFemeninos2,.zapatosMasculinos2").hide();
    })
    $("#boton-hardware").click(function(){
        $(".electro,.cocina,.Hardware,.Hardware2,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").toggle(1200)
        $(".belleza2,.belleza3,.electro2,.mascotas2,.cocina2,.SmartPhone2,.ropaFemenina2,.arte2,.autos2,.mascotas3,.motos2,.librosReligiosos3,.zapatosFemeninos2,.zapatosMasculinos2").hide();
    })
    $("#boton-belleza").click(function (){
        $(".electro,.cocina,.Hardware,.belleza,.belleza2,.belleza3,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").toggle(1200)
        $(".electro2,.mascotas2,.cocina2,.Hardware2,.SmartPhone2,.ropaFemenina2,.arte2,.ropaMasculina2,.autos2,.mascotas3,.zapatosMasculinos2").hide();
    })
    $("#boton-arte").click(function (){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.arte2,.mascotas,.mascotas3,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.belleza,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").fadeOut(1800)
        $(".belleza2,.belleza3,.electro2,.mascotas2,.mascotas3,.cocina2,.Hardware2,.SmartPhone2,.ropaFemenina2,.ropaMasculina2,.autos2,.motos2,.zapatosFemeninos2,.zapatosMasculinos2").hide();
    })
    $("#boton-mascotas").click(function (){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.mascotas2,.mascotas3,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").toggle(1200)
        $(".belleza2,.belleza3,.electro2,.cocina2,.Hardware2,.SmartPhone2,.ropaFemenina2,.arte2,.ropaMasculina2,.autos2,.motos2,.librosReligiosos3,.zapatosFemeninos2,.zapatosMasculinos2").hide();
    })
    $("#boton-SmartPhone").click(function (){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.SmartPhone2,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").fadeToggle(1700)
        $(".belleza2,.belleza3,.electro2,.mascotas2,.cocina2,.Hardware2,.ropaFemenina2,.arte2,.ropaMasculina2,.autos2,.mascotas3,.motos2,.librosReligiosos3,.zapatosFemeninos2,.zapatosMasculinos2").hide();
    })   
    $("#boton-Ropa-femenina").click(function (){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaFemenina2,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").fadeOut(1500)
        $(".belleza2,.belleza3,.electro2,.mascotas2,.cocina2,.Hardware2,.SmartPhone2,.arte2,.ropaMasculina2,.autos2,.mascotas3,.librosReligiosos3,.zapatosMasculinos2").hide();
    })
    $("#boton-Ropa-masculina").click(function () {
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.ropaMasculina2,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").toggle(1300)
        $(".belleza2,.belleza3,.electro2,.mascotas2,.cocina2,.Hardware2,.SmartPhone2,.ropaFemenina2,.arte2,.autos2,.mascotas3,.motos2,.librosReligiosos3,.zapatosFemeninos2,.zapatosMasculinos2").hide();
    })
    $("#boton-Zapatos-femeninos").click(function () {
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosFemeninos2,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosMasculinos,.librosReligiosos").toggle(1200)
        $(".belleza2,.belleza3,.electro2,.mascotas2,.cocina2,.Hardware2,.SmartPhone2,.ropaFemenina2,.arte2,.ropaMasculina2,.autos2,.mascotas3,.motos2,.librosReligiosos3,.zapatosMasculinos2").hide();
    })
    $("#boton-Zapatos-masculinos").click(function () {
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.zapatosMasculinos2,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.librosReligiosos").fadeOut(1400)
        $(".belleza2,.belleza3,.electro2,.mascotas2,.cocina2,.Hardware2,.SmartPhone2,.arte2,.ropaMasculina2,.autos2,.mascotas3,.motos2,.librosReligiosos3,.zapatosFemeninos2").hide();
    })
    $("#boton-libros-Religiosos").click(function () {
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos,.librosReligiosos3").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos").hide(1500)
        $(".belleza2,.belleza3,.electro2,.mascotas2,.cocina2,.Hardware2,.SmartPhone2,.ropaFemenina2,.ropaMasculina2,.autos2,.mascotas3,.motos2,.zapatosFemeninos2,.zapatosMasculinos2").hide();
    })
    $("#boton-Motos").click(function () {
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.motos2,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.Hardware2,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").hide(1500)
        $(".belleza2,.belleza3,.electro2,.mascotas2,.cocina2,Hardware2,.SmartPhone2,.ropaFemenina2,.ropaMasculina2,.autos2,.mascotas3,.librosReligiosos3,.zapatosFemeninos2").hide();
    })
    $("#boton-Autos").click (function () {
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.autos2,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").hide(1500)
        $(".belleza2,.belleza3,.electro2,.mascotas2,.cocina2,Hardware2,.SmartPhone2,.ropaFemenina2,.ropaMasculina2,.mascotas3,.motos2,.librosReligiosos3,.zapatosFemeninos2,.zapatosMasculinos2").hide();
    })
    $("#boton-todos").click(function (){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".belleza2,.belleza3,.electro2,.mascotas2,.cocina2,.Hardware2,.SmartPhone2,.ropaFemenina2,.arte2,.ropaMasculina2,.autos2,.mascotas3,.motos2,.librosReligiosos3,.zapatosFemeninos2,.zapatosMasculinos2").hide();
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
    $("#foto1").click(function () {
        $("#descripcion").text("Gabinete")   
    })
    $("#foto2").click(function () {
        $("#descripcion").text("Teclado")
    })
    $("#foto3").click(function () {
        $("#descripcion").text("Monitor")
    })
    $("#foto4").click(function () {
        $("#fotoPrincipal4").attr("src","./img/Arte/Sta Therese extasis Baroque-sculpture.jpg")
    })
    $("#foto4").click(function () {
        $("#descripcion").text("Escultura Santa Teresa de Jesús Extásis Místico")
    })
    $("#foto5").click(function () {
        $("#fotoPrincipal5").attr("src", "./ img / Arte / Sta Therese extasis Baroque - sculpture.jpg")
    })
    $("#foto5").click(function () {
        $("#descripcion").text("Escultura Santa Teresa de Jesús Extásis Místico")
    })
});


