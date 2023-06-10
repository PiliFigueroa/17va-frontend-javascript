const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)
const cleanContainer = (selector) => $(selector).innerHTML = ''
const hideElement = (selector) => $(selector).classList.add('d-none')
const showElement = (selector) => $(selector).classList.remove('d-none')

let isSubmit = false

const getUsers = (userId = "") => {
    fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${userId}`)
        .then(res => res.json())
        .then(data => {
            if (userId === "") {
                renderUsers(data)
            } else {
                populateForm(data)
            }
        })
}

const registerUsers = () => {
    fetch("https://624f3f05bdda77e9a9bc0f10.mockapi.io/users", {
        method: "POST",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(saveUser())
    })
}

const editUser = (userId) => {
    fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${userId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(saveUser())
    }).finally(() => window.location.reload())
}

const deleteUser = (userId) => {
    fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${userId}`, {
        method: "DELETE"
    }).finally(() => window.location.reload())
}

const saveUser = () => {
    return {
        name: $("#name").value,
        age: $("#age").value,
        email: $("#email").value
    }
}

const populateForm = ({ name, age, email }) => {
    $("#name").value = name
    $("#age").value = age
    $("#email").value = email
}

const renderUsers = (users) => {
    if (users) {
        for (const { id, name, age, email } of users) {
            $("#container-table").innerHTML += `
                <tr>
                    <td>#${id}</td>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${email}</td>
                    <td>
                        <button class="btn btn-success btn-edit" data-id="${id}">Edit</button>
                        <button class="btn btn-danger btn-delete" data-id="${id}">Delete</button>
                    </td>
                </tr>
            `
        }
    }

    for (const btn of $$(".btn-edit")) {
        btn.addEventListener("click", () => {
            hideElement(".table")
            hideElement("#add-btn")
            showElement("#edit-btn")
            showElement("#form")
            const userId = btn.getAttribute("data-id")
            $("#edit-btn").setAttribute("data-id", userId)
            getUsers(userId)
            isSubmit = false
        })
    }

    for (const btn of $$(".btn-delete")) {
        btn.addEventListener("click", () => {
            hideElement(".table")
            showElement("#alert")
            const userId = btn.getAttribute("data-id")
            $("#delete-btn").setAttribute("data-id", userId)
        })
    }
}

$("#show-form").addEventListener("click", () => {
    hideElement(".table")
    hideElement("#edit-btn")
    showElement("#form")
    isSubmit = true
})

$("#form").addEventListener("submit", (e) => {
    e.preventDefault()
    if (isSubmit) {
        registerUsers()
    } else {
        const userId = $("#edit-btn").getAttribute("data-id")
        editUser(userId)
        hideElement("#form")
        
    }
    $("#form").reset()
})

$("#delete-btn").addEventListener("click", () => {
    const userId = $("#delete-btn").getAttribute("data-id")
    deleteUser(userId)
})

$("#cancel").addEventListener("click", () => {
    hideElement("#alert")
    showElement(".table")
})

window.addEventListener("load", () => {
    getUsers()
})