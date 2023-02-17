// JavaScript source code

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("Nombre"),
    email = id("Email"),
    password = id("Contrase�a"),
    passwordconfirmation = id("Confirme_ su_contarse�a")
    form = id("ENVIAR"),
    errorMsg = classes("error"),
    success-icon = classes("success-icon"),
    eror-icon = classes("error-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(Nombre, 0, "Nombre este campo no puede quedar en blanco");
    engine(Email, 1, "Email este campo no puede quedar en blanco");
    engine(Contrase�a, 2, "Contrase�a este campo no puede quedar en blanco");
	engine(Confirme_su_contrase�a, 3, "Confirme_su_contrase�a este campo no puede quedar en blanco");
	});

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        // icons
        error-icon[serial].style.opacity = "1";
        success-icon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        // icons
        error-icon[serial].style.opacity = "0";
        success-icon[serial].style.opacity = "1";
    }
};