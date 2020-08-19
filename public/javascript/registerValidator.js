
window.addEventListener("load", function(){
    let data = {
        nombre:"",
        apellido: "",
        email: "",
        password: "",
        confirm_password: "",
        avatar: "",
        suscribe: false,
      };

      function save(k,v){
        data[k] = v
      }

    let form = document.querySelector("form.login100-form");

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

      form.email.addEventListener("keyup", function (e) {
        save(e.target.name, e.target.value)
      
        showError(e.target, validator.isEmail(data.email));
      });
       

      form.password.addEventListener("keyup", function (e) {
        save(e.target.name, e.target.value)
        showError(e.target, validator.isLength(e.target.value, {min: 8, max: 20}))
      });
      
      form.confirm_password.addEventListener("keyup", function (e) {
        save(e.target.name, e.target.value)
      
        showError(e.target, validator.equals(e.target.value, data.password));
      });
      
      form.suscribe.addEventListener("change", function (e) {
        save(e.target.name, e.target.checked)
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

        if(!validator.isLength(data.password, {min: 8, max: 20})){
          errors++
        } else {
        };

        if(!validator.equals(data.password, data.confirm_password)){
          errors++
        } else {
        };

        if (!validator.isEmail(data.email)){
          errors++
          } else {
        };
        if (validator.isEmpty(data.password)){
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