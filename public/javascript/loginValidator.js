
window.addEventListener("load", function(){


    let formulario = document.querySelector("form.login100-form");

    formulario.addEventListener("submit", function(e){
        e.preventDefault();

        let errores = [ ]

    //El HTML ya valida que sea un email
    //    let campoEmail = document.querySelector("div.wrap-input100 input[name='email']")
    //    if (campoEmail.value != "email") {
    //        alert("Email invalido")   
    //    }
        
        let campoPassword = document.querySelector("div.wrap-input100-rs1 input[name='password']")
        if (campoPassword.value.length < 8) {
            alert("El password debe tener entre 8 y 15 caracteres")
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