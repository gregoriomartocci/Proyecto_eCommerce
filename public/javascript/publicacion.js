
window.addEventListener("load", function(){
    let data = {
        nombre:"",
        marca: "",
        modelo: "",
        precio: "",
        stock: "",
        idCategoria: "",
        description: "",
      };

      function save(k,v){
        data[k] = v
      }
    
    let errorsSpan = document.querySelector(".login20-title-err");

    let form = document.querySelector(".login100-form");
    
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

    form.marca.addEventListener("keyup", function (e) {
      save(e.target.name, e.target.value)
  
     showError(e.target, validator.isLength(e.target.value, {min: 1, max: 20}));
  });

  form.modelo.addEventListener("keyup", function (e) {
    save(e.target.name, e.target.value)

   showError(e.target, validator.isLength(e.target.value, {min: 1, max: 20}));
});

    form.precio.addEventListener("keyup", function (e) {
        save(e.target.name, e.target.value)
    
       showError(e.target, validator.isNumeric(e.target.value));
    });


    form.description.addEventListener("keyup", function (e) {
      save(e.target.name, e.target.value)
  
     showError(e.target, validator.isLength(e.target.value, {min: 20, max: 300}));
  });

    

    form.addEventListener("submit", function (e) {
      let errors = 0;
      let erroresTexto = [];
      if(!validator.isLength(data.nombre, {min: 2, max: 20})){
        errors++
        erroresTexto.push("El nombre del producto debe tener al menos 2 caracteres")
      } else {
      };

      if(!validator.isLength(data.marca, {min: 1, max: 20})){
        errors++
        erroresTexto.push("Debe completar la Marca")
      } else {
      };

      if(!validator.isLength(data.modelo, {min: 1, max: 20})){
        errors++
        erroresTexto.push("Debe completar el Modelo")
      } else {
      };

      if(!validator.isNumeric(data.precio)){
        errors++
        erroresTexto.push("Debe incluir un precio")
      } else {
      };
    
      if(!validator.isLength(data.description, {min: 20, max: 300})){
        errors++
        erroresTexto.push("La descripcion debe tener 20 caracteres")
      } else {
      };

      if (errors > 0) {
      e.preventDefault();
      console.log(data)
      for(let i = 0; i < erroresTexto.length; i++) {
        errorsSpan.innerHTML= errorsSpan.innerHTML + "" + " " + erroresTexto[i]
      console.log(erroresTexto[i])
      }
    
    
    }

    
      else {
      console.log("enviamos la info", data)}
      ;
    });
     

})