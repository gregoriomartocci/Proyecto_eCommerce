window.addEventListener("load", function(){
    let formulario = document.querySelector("form.product");

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    let errores = [ ]

    let campoNombre= document.querySelector("div.form-group input[name='nombre']")
    if (campoNombre.value.length < 5) {
        alert("Debe completar el nombre del producto correctamente")
    }

    let campoPrecio = document.querySelector("div.form-group input[name='precio']")
    if (isNaN(campoPrecio.value == true)) {
        alert("Debe completar el precio correctamente")
    }
    
    let campoDescripcionProducto = document.querySelector("div.order-notes input[name='descripcionProducto]")
    if (campoDescripcionProducto.value.length < 20) {
        alert("La descripcion del producto debe tener al menos 20 caracteres")
    }
    

    if (errores.length > 0) {
        e.preventDefault();
        let ulErrores = document.querySelector("div.errores ul")
        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
        }
    }

})

})
