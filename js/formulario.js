document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    var nombreApellido = document.getElementById("nombreApellido").value;
    var correoElectronico = document.getElementById("correoElectronico").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;
    var asunto = document.getElementById("asunto").value;

    var contactoPreferido;
    var opcionesContacto = document.getElementsByName("contacto");
    for (var i = 0; i < opcionesContacto.length; i++) {
        if (opcionesContacto[i].checked) {
            contactoPreferido = opcionesContacto[i].value;
            break;
        }
    }

    var subject = asunto;
    var body = "Nombres y apellidos: " + nombreApellido + "\n" +
        "Correo electrónico: " + correoElectronico + "\n" +
        "Teléfono: " + telefono + "\n" +
        "Mensaje: " + mensaje + "\n" +
        "Contacto preferido: " + contactoPreferido;

    var mailtoLink = "mailto:delgadojuanfidel@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
});
