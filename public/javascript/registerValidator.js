
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
        e.preventDefault();
        console.log("enviamos la info", data);
      });
      
      console.log(form.password);

})