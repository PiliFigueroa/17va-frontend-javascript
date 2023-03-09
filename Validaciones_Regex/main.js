const $ = (selector) => document.querySelector(selector)

const reg = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')

// .test() - .matches()
// reg.test($("#email").value)
// Accedemos al regex establecido y usando la funcion .test() y dandole como argumento el valor del input que queremos validar, nos devolvera un boolean dependiendo si cumple con nuestra expresion regular o no.

/*
- username no este vacio
- email pase el regex
- contrasenas sean iguales
- terms esten tildados
*/

const validateFields = () => {
    const username = $("#username").value
    const email = $("#email").value
    const password = $("#password").value
    const passwordConfirm = $("#passwordConfirm").value
    const acceptTerms = $("#terms").checked

    if (username === "") {
        $(".username-error").classList.remove("d-none")
        $("#username").classList.add("border-danger")
    } else {
        $(".username-error").classList.add("d-none")
        $("#username").classList.remove("border-danger")
    }

    if (!reg.test(email)) {
        $(".email-error").classList.remove("d-none")
        $("#email").classList.add("border-danger")
    } else {
        $(".email-error").classList.add("d-none")
        $("#email").classList.remove("border-danger")
    }

    if (password !== passwordConfirm || password === "" || passwordConfirm === "") {
        $(".password-error").classList.remove("d-none")
        $("#password").classList.add("border-danger")
        $("#passwordConfirm").classList.add("border-danger")
    } else {
        $(".password-error").classList.add("d-none")
        $("#password").classList.remove("border-danger")
        $("#passwordConfirm").classList.remove("border-danger")
    }

    if (!acceptTerms) {
        $(".terms-error").classList.remove("d-none")
        $("#terms").classList.add("border-danger")
    } else {
        $(".terms-error").classList.add("d-none")
        $("#terms").classList.remove("border-danger")
    }
}

const validateForm = () => {
    const username = $("#username").value
    const email = $("#email").value
    const password = $("#password").value
    const passwordConfirm = $("#passwordConfirm").value
    const acceptTerms = $("#terms").checked

    return username && reg.test(email) && password === passwordConfirm && acceptTerms
}

$("#submit").addEventListener("click", (e) => {
    e.preventDefault()
    validateFields()

    if (validateForm()) {
        $(".form").reset()
        alert("Your information has been submitted successfully")
    }
})