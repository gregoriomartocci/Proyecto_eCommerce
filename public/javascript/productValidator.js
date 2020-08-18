window.addEventListener("load", function(){
    let data = {
        nombre:"",
        precio: "",
        descripcionProducto: "",
        customFile: "",
      };

      function save(k,v){
        data[k] = v
      }
    
    let form = document.querySelector("form.product");

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

    form.precio.addEventListener("keyup", function (e) {
        save(e.target.name, e.target.value)
    
       showError(e.target, validator.isNumeric(e.target.value));
    });

    form.descripcionProducto.addEventListener("keyup", function (e) {
        save(e.target.name, e.target.value)
    
       showError(e.target, validator.isLength(e.target.value, {min: 20, max: 300}));
    });

      
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log("enviamos la info", data);
      });
      
      console.log(form.password);

})









