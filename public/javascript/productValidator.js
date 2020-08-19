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
    
       showError(e.target, validator.isLength(e.target.value, {min: 5, max: 20}));
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
      let errors = 0;
      if(!validator.isLength(data.nombre, {min: 5, max: 20})){
        errors++
      } else {
      };
    
      if(!validator.isLength(data.descripcionProducto, {min: 20, max: 300})){
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









