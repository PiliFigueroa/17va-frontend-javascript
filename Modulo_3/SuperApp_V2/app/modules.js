export const $ = (selector) => document.querySelector(selector)
export const $$ = (selector) => document.querySelectorAll(selector)

export const SEL = {
    btnSubmit: "#show-form",
    btnEdit: "#edit-btn",
    btnDelete: "#delete-btn",
    btnCancel: "#cancel",
    tableHead: ".table",
    form: "#form",
    alert: "#alert"
}

export const Utils = {
    cleanContainer: (selector) => $(selector).innerHTML = '',
    hideElement: (selector) => $(selector).classList.add('d-none'),
    showElement: (selector) => $(selector).classList.remove('d-none'),
    isSubmit: false
}

export const Methods = {
    getUsers: (userId = "") => {
        fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                if (userId === "") {
                    Render.users(data)
                } else {
                    Render.populateForm(data)
                }
            })
    },
    registerUsers: () => {
        fetch("https://624f3f05bdda77e9a9bc0f10.mockapi.io/users", {
            method: "POST",
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(Methods.saveUser())
        })
    },
    editUser: (userId) => {
        fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${userId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(Methods.saveUser())
        }).finally(() => window.location.reload())
    },
    deleteUser: (userId) => {
        fetch(`https://624f3f05bdda77e9a9bc0f10.mockapi.io/users/${userId}`, {
            method: "DELETE"
        }).finally(() => window.location.reload())
    },
    saveUser: () => {
        return {
            name: $("#name").value,
            age: $("#age").value,
            email: $("#email").value
        }
    }
}

export const Render = {
    populateForm: ({ name, age, email }) => {
        $("#name").value = name
        $("#age").value = age
        $("#email").value = email
    },
    users: (users) => {
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
                Utils.hideElement(".table")
                Utils.hideElement("#add-btn")
                Utils.showElement("#edit-btn")
                Utils.showElement("#form")
                const userId = btn.getAttribute("data-id")
                $("#edit-btn").setAttribute("data-id", userId)
                Methods.getUsers(userId)
                Utils.isSubmit = false
            })
        }
    
        for (const btn of $$(".btn-delete")) {
            btn.addEventListener("click", () => {
                Utils.hideElement(".table")
                Utils.showElement("#alert")
                const userId = btn.getAttribute("data-id")
                $("#delete-btn").setAttribute("data-id", userId)
            })
        }
    }
}