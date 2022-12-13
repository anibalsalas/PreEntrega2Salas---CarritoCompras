    const solicitarNombre = () => {
      
        alert("Primera Pre entrega: PreEntrega2Salas");
        let nombreUsuario = prompt("Ingrese su nombre");
          let regex = new RegExp('^[A-Z]+$', 'i');
       
           do{
            if ( regex.test(nombreUsuario) ) {
                
                alert(`Bienvenido ${nombreUsuario}, Gracias por visitarnos`);
              }else {
                alert('No es un nombre valido')
                continue;
              }
              
        } while(nombreUsuario === "");

    };
// Creamos un array vacío para el carrito de compras
const carrito = [];

  

   
            const compraFaber= () => {
                let = productoNombre ='';
                let productoCantidad = 0;
                const listaFaber = productos.filter(producto => producto.marca === "FaberCastell");
                const listaF = JSON.stringify(listaFaber);  
            do {  
                productoNombre = prompt('Ingrese el nombre del producto que desea comprar'+'\n\n'+listaF + '\t');
                productoCantidad = parseInt(prompt('¿Cuántos queres comprar?'));

                const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase());

                if (producto) {
                    agregarAlCarrito(producto, producto.id, productoCantidad);
                } else {
                    alert('El producto no se encuentra en el catálogo!');
                }

                seguirComprando = confirm('¿Desea agregar otro producto?')
            } while (seguirComprando);

            confirmarCompra();
            };

            const compraArtesco= () => {
                let = productoNombre ='';
                let productoCantidad = 0;
                const listaArtesco = productos.filter(producto => producto.marca === "artesco");
                const listaA = JSON.stringify(listaArtesco);  
            do {  
                productoNombre = prompt('Ingrese el nombre del producto que desea comprar'+'\n\n'+listaA + '\t');
                productoCantidad = parseInt(prompt('¿Cuántos queres comprar?'));

                let cantidadValidada = validarCantidad(productoCantidad);

                const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase());
        
                if (producto) {
                    agregarAlCarrito(producto, producto.id, cantidadValidada);
                } else {
                    alert('El producto no se encuentra en el catálogo!');
                }
        
                seguirComprando = confirm('¿Desea agregar otro producto?')
            } while (seguirComprando);
        
            confirmarCompra();
            };

            const agregarAlCarrito = (producto, productoId, productoCantidad) => {
                const productoRepetido = carrito.find(producto => producto.id === productoId);
                if (productoRepetido) {
                    productoRepetido.cantidad += productoCantidad
                } else {
                    producto.cantidad += productoCantidad;
                    carrito.push(producto)
                }
                console.log(carrito)
            };
            
            const confirmarCompra = () => {
                const listaProductos = carrito.map(producto => {
                    return '- '+producto.nombre+' | Cantidad: '+producto.cantidad
                });

                const confirmar = confirm('Checkout: '
                    +'\n\n'+listaProductos.join('\n')
                    +'\n\nPara continuar precione "Aceptar" sino "Cancelar" para Salir.'
                );
                
                if (confirmar) {
                    finalizarCompra(listaProductos);
                } else {
                    alert('Hasta Pronto');
                        return false;
                        
                }
            };

            const finalizarCompra = (listaProductos) => {
                    let delivery = false;
                    const valorIgv = 0.18;
                    const cantidadTotal = carrito.reduce((acc, elemento) => acc + elemento.cantidad, 0);
                    const precioTotal = carrito.reduce((acc, elemento) => acc + (elemento.precio * elemento.cantidad), 0);
                    const Igv = precioTotal  * valorIgv;
                    const precioTotalIgv = precioTotal + Igv;

                    delivery = confirm('¿Deseas Delivery?');       
                    if (delivery  && precioTotal > 10) {
                        alert('Detalle de tu compra:'
                        +'\n\n'+listaProductos.join('\n')
                        +'\n\nTotal de productos: '+cantidadTotal
                        +'\n\nEl total de la compra es: '+precioTotal
                        +'\n\nEl total de la compra con IVA es: '+precioTotalIgv
                        +'\n\nSu Delivery es GRATUITO'
                        +'\n\nGracias por su compra!'
                    );
                        return;
                    }else if(delivery &&  precioTotal < 10) {
                        precioTotalIgvD = precioTotalIgv + 3
                        alert('Detalle de tu compra:'
                        +'\n\n'+listaProductos.join('\n')
                        +'\n\nTotal de productos: '+cantidadTotal
                        +'\n\nEl total de la compra es: '+precioTotal
                        +'\n\nEl total de la compra con IVA es: '+precioTotalIgv
                        +'\n\nSu Delivery cuesta 3 Pesos, Total a Pagar es: '+precioTotalIgvD
                        +'\n\nGracias por su compra!'
                    );
                        return;
  
                    }else{
                        alert('Ud. escojió pagar en linea y recojer su producto, El total de tu compra es $ '+ precioTotal)
                        
                    }
                
                   
            };


            const listar = () => {
                let categoriaProducto = '';
                let cambiarMarca = false;
            
                do{
                categoriaProducto = parseInt(prompt("Ingrese la Marca del articulo que desea adquirir.\n\nEjemplo seleccione '1' para Faber Castell.\n\n1- Faber Castell\n2- Artesco"));
        
               switch (categoriaProducto) {
                case 1:
                    categoriaProducto = "Faber Castell";
                    compraFaber();
                    break;
                case 2: 
                    categoriaProducto = "artesco";
                    compraArtesco();
                    break;
                }
                cambiarMarca = confirm('¿Desa adquirir otro producto de otra Marca?');
            }while(cambiarMarca);
                if (cambiarMarca) {
                    finalizarCompra(listaProductos);
                } else {
                    alert('Hasta Pronto');
                    return false;
                }
            };

           
            const validarCantidad = (productoCantidad) => {
                while (Number.isNaN(productoCantidad) || productoCantidad <= 0) {
                    if (productoCantidad <= 0) {
                        alert('Debe ingresar una cantidad válida.')
                    } else {
                        alert('Debe agregar un número.')
                    }
                    productoCantidad = parseInt(prompt('¿Cuántos deseas comprar?'));
                }
            
                return productoCantidad;
            };
            
        
         



    solicitarNombre();
    listar()
    compraFaber()
    compraArtesco()


  
   
    
 
 