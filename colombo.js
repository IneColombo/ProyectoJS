
function mostrar (mensaje){
    console.log(mensaje)
}



mostrar ("¡Hola! Te damos la bienvenida a BROTE");

let producto = "";

      
while (producto != "listo"){

    producto = prompt("Ingrese el producto elegido: 'espejo' , 'pizarra' , 'otro' -o 'listo' para salir");
    let cantidad;

    if (producto == "otro"){
        mostrar ("Nos comunicaremos con vos para asesorarte. ¡Gracias!")
        break
    }  

    else if (producto != "listo"){

        if(producto == "espejo" || "pizarra"){

            console.log ("Elegiste", producto);
            cantidad = prompt ("Ingrese la cantidad");

            let demora = cantidad * 2;

            if (cantidad <= 10){
                console.log ("Cantidad:" , cantidad);
                console.log ("Tu pedido estará listo en" , demora , "días hábiles");
            }

            else if (cantidad > 10){
                mostrar ("Disculpa, el máximo de productos es 10")
                mostrar ("Regarga el sitio y volvé a ingresar el producto")
                break
            }
        }
    }
    
    else{
        mostrar("Gracias. ¡Te esperamos la próxima!")
    }
    
}