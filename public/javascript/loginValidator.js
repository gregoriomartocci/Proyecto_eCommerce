window.addEventListener("load", function () {
  let data = {
    email: "",
    password: "",
    recordarUser: false,
  };

  function save(k, v) {
    data[k] = v;
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

  form.email.addEventListener("blur", function (e) {
    save(e.target.name, e.target.value);
    console.log(data.email)
    showError(e.target, validator.isEmail(data.email));
  });

  form.email.addEventListener("submit", function (e) {
    save(e.target.name, e.target.value);

    showError(e.target, validator.isEmpty(data.email));
  });

  form.password.addEventListener("keyup", function (e) {
    save(e.target.name, e.target.value);

    showError(e.target, !validator.isEmpty(data.password));
  });

  form.recordarUser.addEventListener("change", function (e) {
    save(e.target.name, e.target.checked);
  });

  form.addEventListener("submit", function (e) {
    let errors = 0;
    if (!validator.isEmail(data.email)) {
      errors++;
    } else {
    }
    if (validator.isEmpty(data.password)) {
      errors++;
    } else {
    }

    if (errors > 0) {
      e.preventDefault();
    } else {
      console.log("enviamos la info", data);
    }
    console.log(errors);
  });
});
