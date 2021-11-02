$(document).ready (function(){ 

    $("#boton-electro").click(function(){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.BookUniversitarios,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos,.FiestasNavideñas").show()
        $(".cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.BookUniversitarios,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos,.FiestasNavideñas").toggle(1000)
        
    })
    $("#boton-cocina").click(function(){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.BookUniversitarios,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.BookUniversitarios,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos,.FiestasNavideñas").toggle(1000)
        console.log("cocina")
    })
    $("#boton-hardware").click(function(){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.BookUniversitarios,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.belleza,.arte,.mascotas,.SmartPhone,.BookUniversitarios,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos,.FiestasNavideñas").toggle(1000)
        console.log("boton hardware")
    })
    $("#boton-belleza").click(function (){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.BookUniversitarios,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.arte,.mascotas,.SmartPhone,.BookUniversitarios,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos,.FiestasNavideñas").toggle(1000)
        console.log("boton belleza")
    })
    $("#boton-arte").click(function () {
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.BookUniversitarios,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.belleza,.mascotas,.SmartPhone,.BookUniversitarios,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").toggle(1000)
    })
    $("#boton-mascotas").click(function () {
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.SmartPhone,.BookUniversitarios,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").toggle(1000)
    })
    $("#boton-Ropa-femenina").click(function (){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.BookUniversitarios,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.BookUniversitarios,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").toggle(1000)
        console.log("boton arte")
    })
    $("#boton-todos").click(function (){
        $("electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.SmartPhone,.BookUniversitarios,.ropaFemenina,.ropaMasculina,.autos,.motos,.zapatosFemeninos,.zapatosMasculinos,.librosReligiosos").show()
    })
    
    $("#foto1").click(function(){
        $("#fotoPrincipal").attr("src","./img/Hardware/partespc/gabinete.jpg")
    })

});


