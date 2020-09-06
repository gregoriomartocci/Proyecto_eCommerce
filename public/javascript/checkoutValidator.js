window.addEventListener("load", function(){
    let data = {
        nombre: "",
        apellido: "",
        direccion: "",
        ciudad: "",
        pais:"",
        codigoPostal:"",
        telefono: "",
      };

      function save(k,v){
        data[k] = v
      }

  
    let form = document.querySelector("form.checkout_form");
    console.log(form)

    let showError = (el, bool = true) => {
        if (bool) {
          el.classList.remove("error");
          el.classList.add("success");
          el.nextElementSibling.classList.replace("show", "hide");
        } else {
          el.classList.remove("success");
          el.classList.add("error");
          el.nextElementSibling.classList.replace("hide", "show");
        }
      };

    form.nombre.addEventListener("keyup", function (e) {
                save(e.target.name, e.target.value)
            
               showError(e.target, validator.isLength(e.target.value, {min: 2, max: 20}));
            });

    form.apellido.addEventListener("keyup", function (e) {
         save(e.target.name, e.target.value)
            
          showError(e.target, validator.isLength(e.target.value, {min: 2, max: 20}))
          ;
            });                       
            

      form.direccion.addEventListener("keyup", function (e) {
        save(e.target.name, e.target.value)
           
         showError(e.target, validator.isLength(e.target.value, {min: 1, max: 20}))
         ;
           });
       
    form.ciudad.addEventListener("keyup", function (e) {
         save(e.target.name, e.target.value)
            
          showError(e.target, validator.isLength(e.target.value, {min: 1, max: 20}))
          ;
            });
   
    form.pais.addEventListener("keyup", function (e) {
        save(e.target.name, e.target.value)
                   
        showError(e.target, validator.isLength(e.target.value, {min: 1, max: 20}))
                 
              });        
   
    form.codigoPostal.addEventListener("keyup", function (e) {
            save(e.target.name, e.target.value)
                   
         showError(e.target, validator.isLength(e.target.value, {min: 1, max: 20}))
                 ;
                   });  

    form.telefono.addEventListener("keyup", function (e) {                
        save(e.target.name, e.target.value)
                       
        showError(e.target, validator.isLength(e.target.value, {min: 1, max: 20}))
                     ;
                       });

      
      form.addEventListener("submit", function (e) {
        let errors = 0;
        if(!validator.isLength(data.nombre, {min: 2, max: 20})){
          errors++
        } else {
        };
        
        if(!validator.isLength(data.apellido, {min: 2, max: 20})){
          errors++
        } else {
        };


        if (validator.isEmpty(data.direccion)){
            errors++
          } else {
          };

        if (validator.isEmpty(data.ciudad)){
          errors++
        } else {
        };
            
        if (validator.isEmpty(data.pais)){
            errors++
          } else {
        };

        if (validator.isEmpty(data.codigoPostal)){
            errors++
          } else {
          };    
    
        if (validator.isEmpty(data.tel)){
            errors++
          } else {
          };

        if (errors > 0) {
        e.preventDefault()}
        else {
        console.log("enviamos la info", data)}
       console.log(errors) ;
      });


})