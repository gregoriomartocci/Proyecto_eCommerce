
window.addEventListener("load", function(){


    let formulario = document.querySelector("form.login100-form");

    formulario.addEventListener("submit", function(e){
        e.preventDefault();

        let errores = [ ]

        let campoName = document.querySelector("div.wrap-input100 input[name='firstName']")
        if (campoName.value.length < 2) {
            alert("Debe completar el Nombre correctamente")
        }

        let campoLastName = document.querySelector("div.wrap-input100 input[name='lastName']")
        if (campoLastName.value.length < 10) {
            alert("Debe completar el Apellido correctamente")
        }
        
        //el HTML ya valida que sea un email
       // let campoEmail = document.querySelector("div.wrap-input100 input[name='email']")
       // if (campoEmail.value != "email") {
        //    alert("Email invalido")   
       // }
        
        let campoPassword = document.querySelector("div.wrap-input100 input[name='password']")
        if (campoPassword.value.length < 8) {
            alert("El password debe tener entre 8 y 15 caracteres")
        }
        
        let campoConfirmPassword = document.querySelector("div.wrap-input100 input[name='confirm_password']")
        if (campoPassword.value != campoConfirmPassword)  {
            alert("Los passwords no coinciden")
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