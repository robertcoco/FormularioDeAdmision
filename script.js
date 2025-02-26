document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("familyForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        let formObj = {};

        formData.forEach((value, key) => {
            formObj[key] = value;
        });

        console.log("Datos del formulario:", formObj);
        alert("Formulario enviado con éxito");

        form.reset();
    });
});
