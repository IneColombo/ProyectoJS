
function mostrar (mensaje){
    console.log(mensaje)
}


class producto{

    constructor(nombre , precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos(){
        mostrar("<-----STOCK----->");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
        mostrar("");
    }

    get_stock(){
        if(this.stock <= 0){
            return false
        }
        else{
            return true
        }
    }

    update_stock(cantidad){
        if (this.stock >= cantidad){
            this.stock = this.stock - cantidad
            return true;
        }
        else{
            mostrar ("Disculpa, esa cantidad supera nuestro stock");
            return false
        }
    }

}


mostrar ("¡Hola! Te damos la bienvenida a BROTE");
mostrar ("");


let lista_productos = [];

lista_productos.push (new producto("pizarra", 3000, 10));
lista_productos.push (new producto ("espejo", 8000, 8));
lista_productos.push (new producto ("juego", 4000 , 5));


//RENDER DE PRODUCTOS

for(let producto of lista_productos){
    producto.get_datos();
}


//SIMULACIÓN COMPRA USUARIO

function buscar_productos (producto) {
    return producto.nombre == compra_usuario
}


let compra_usuario = prompt ("Ingrese el nombre del producto que quiere comprar: \n 'espejo' , 'pizarra' o 'juego'");

let resultado_productos = lista_productos.find(buscar_productos);


if (resultado_productos != undefined){

    if(resultado_productos.get_stock()){

        let cantidad = prompt ("¿Cuántas unidades querés?");
        let demora = cantidad *2;

        if(resultado_productos.update_stock(cantidad)){
            console.log ("Tu pedido estará listo en" , demora , "días hábiles")
            mostrar("Gracias. ¡Te esperamos la próxima!")
            mostrar("")
        }
        else{
            mostrar("No se pudo realizar la compra")
            mostrar("Recarga el sitio y volvé a ingresar el producto")
            mostrar("")
        }
    }
    resultado_productos.get_datos();
}
else{
    mostrar("Producto no encontrado")
    mostrar("Recarga el sitio y volvé a ingresar el producto")
}