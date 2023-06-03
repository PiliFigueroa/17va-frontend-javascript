const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)
const hideElement = (selector) => $(selector).classList.add('d-none')
const showElement = (selector) => $(selector).classList.remove('d-none')
const cleanContainer = (selector) => $(selector).innerHTML = ''

let cart = []

const getProducts = (categoryName) => {
    fetch(`https://fakestoreapi.com/products${categoryName ? `/category/${categoryName}` : ""}`)
        .then(res => res.json())
        .then(products => renderProducts(products))
}

const getProduct = (productId) => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(products => renderProductDetail(products))
}

const renderProducts = (products) => {
    cleanContainer("#container-products")
    if (products) {
        for (const { title, price, image, category, id } of products) {
            $("#container-products").innerHTML += `
            <div class="card m-2" style="width: 18rem;">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text"><b>Price:</b> $${price}</p>
                    <p class="card-text"><b>Category:</b> ${category}</p>
                    <button class="btn btn-primary" onclick="getProduct('${id}')">Ver producto</button>
                </div>
            </div>
            `
        }
    }
}

const renderProductDetail = (product) => {
    const { title, price, image, category, id, description, rating } = product
    cleanContainer("#container-products")
    $("#container-products").innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text"><b>Price:</b> $${price}</p>
                        <p class="card-text"><b>Category:</b> ${category}</p>
                        <p class="card-text"><b>Rating:</b> ${rating.rate}</p>
                        <p class="card-text"><b>Description:</b> ${description}</p>
                        <button class="btn btn-success" id="add-product">Agregar Producto</button>
                    </div>
                </div>
            </div>
        </div>
    `

    $("#add-product").addEventListener("click", () => {
        addToCart(product)
    })

}

const renderCartTable = (cartList) => {
    cleanContainer("#table-products")
    let totalPrice = 0
    for (const { id, title, price, quantity } of cartList) {
        const subTotal = price * quantity
        totalPrice += subTotal
        $("#table-products").innerHTML += `
            <tr>
                <th scope="row">${title}</th>
                <td>$${price}</td>
                <td>${quantity}</td>
                <td>$${subTotal}</td>
                <td>
                    <button class="btn btn-danger delete-product" data-id="${id}"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>
        `
    }
    $(".total-price").innerHTML = `$${totalPrice}`

    for (const btn of $$(".delete-product")) {
        btn.addEventListener("click", () => {
            const productId = btn.getAttribute("data-id")
            cart = cart.filter(product => product.id != productId)
            console.log(cart)
            renderCartTable(cart)
        })
    }
}

const addToCart = (product) => {
    const productExists = isInCart(product.id)
    if (productExists) {
        const newQuantity = productExists.quantity + 1
        cart = cart.map(product => {
            if (product.id === productExists.id) {
                const copyProduct = {...product, quantity: newQuantity}
                return copyProduct
            }
            return product
        })
    } else {
        const copyProduct = {...product, quantity: 1}
        cart.push(copyProduct)
    }
}

const isInCart = (id) => cart.find(product => product.id === id)

const cleanCart = () => {
    cart = []
    $("#table-products").innerHTML = "No hay productos en el carrito :("
    $(".total-price").innerHTML = ""
}

for (const btn of $$(".categories")) {
    btn.addEventListener("click", () => {
        const categoryName = btn.name
        getProducts(categoryName)
        hideElement(".table")
        hideElement(".container-cart-details")
    })
}

$("#cart-btn").addEventListener("click", () => {
    cleanContainer("#container-products")
    showElement(".table")
    showElement(".container-cart-details")
    renderCartTable(cart)
})

$("#empty-cart").addEventListener("click", cleanCart)

window.addEventListener('load', () => {
    getProducts()
})