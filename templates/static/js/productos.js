window.onload = function () {

    function cargarDatos(){
        ajax = new XMLHttpRequest();
        ajax.onreadystatechange = () => {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    productos = JSON.parse(ajax.responseText);
                    
                    mostrarProductos(productos)
                }
            } else {
                console.log(ajax.readyState)
            }
        }
        //ajax.open('GET', 'https://restcountries.com/v3.1/all', true);
        ajax.open('GET', 'http://localhost:8085/getproducts', true);
        ajax.send(null);


    }

    function mostrarProductos(productos) {
        let contenido = "";
        for (let i = 0; i < productos.length; i++) {
            contenido += `<div class="filaProducto">
            <img src="static/img/${productos[i].img}" alt="">
            <div class="tituloProducto"><h4>${productos[i].nombre}</h4>
            <p>${productos[i].descripcion}</p></div>
            <div><label>Precio:</label><span>${productos[i].precio}</span><label>Cantidad:</label><span>${productos[i].cantidad}</span></div>
            <div><img src="static/img/borrar.jpg" id="btnEliminar${productos[i].id}" class="btnBorrar" alt=""></div></div>`;
        }
        document.getElementById("listadoProductos").innerHTML = contenido;
        asociarEventos();

    }

    setTimeout(cargarDatos,3000);
    
 
}

function asociarEventos(){
    let papeleras=document.getElementsByClassName("btnBorrar");
    for (let i = 0; i < papeleras.length; i++) {
        const papelera = papeleras[i];
        papelera.onclick=(evt)=>{
            let idProducto=evt.currentTarget.id.substring(11);
            alert(idProducto)
        }
    }
}