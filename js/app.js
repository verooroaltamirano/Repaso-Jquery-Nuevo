$(document).ready (function(){ 

    $("#boton-electro").click(function(){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").show()
        $(".cocina,.Hardware,.belleza,.arte,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").toggle(1000)
    })
    $("#boton-cocina").click(function(){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").show()
        $(".electro,.Hardware,.belleza,.arte,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").toggle(1000)
    })
    $("#boton-hardware").click(function(){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").show()
        $(".electro,.cocina,.belleza,.arte,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").toggle(1000)
        console.log("boton hardware")
    })
    $("#boton-belleza").click(function () {
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").show()
        $(".electro,.cocina,.Hardware,.arte,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").toggle(1000)
        console.log("boton belleza")
    })
    $("#boton-arte").click(function () {
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").show()
        $(".electro,.cocina,.Hardware,.belleza,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").toggle(1000)
        console.log("boton arte")
    })
    $("#boton-mascotas").click(function () {
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").toggle(1000)
    })
    $("#boton-Smart&Phone").click(function(){
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").show()
        $(".electro,.cocina,.belleza,.arte,.mascotas,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").toggle(1000)
        console.log("boton hardware")
    })
    $("#boton-Book Universitarios").click(function () {
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").show()
        $(".hardware,.cocina,.mascotas,.arte,.mascotas,.Smart&Phone,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").toggle(1000)
        console.log("boton belleza")
    })
    $("#boton-ropa femenina").click(function () {
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").show()
        $(".belleza,.cocina,.electro,.mascotas,.Smart&Phone,.book Universitarios,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").toggle(1000)
        console.log("boton arte")
    })
    $("#boton-todos").click(function () {
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").show()
        $(".electro,.cocina,.Hardware,.belleza,.arte,.mascotas,.Smart&Phone,.book Universitarios,.ropa femenina,.ropa masculina,.autos,.motos,.zapatos femeninos,.zapatos masculinos.,libros religiosos,.Fiestas navideñas").toggle(1000)
        console.log("boton todos")
    })

});