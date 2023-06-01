const products = [
    {
        id: 1,
        image: "https://www.dualgames.es/productos/imagenes/img_6201_c4cfc5feafcf28c483b146d051067378_1.jpg",
        name: "Set 7 dados basicos",
        category: "dados",
        description: "Malesuada proin libero nunc consequat interdum. Massa id neque aliquam vestibulum morbi blandit. Nunc eget lorem dolor sed. At tellus at urna condimentum mattis. Cras fermentum odio eu feugiat pretium nibh. Nulla pharetra diam sit amet. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Dui id ornare arcu odio. Massa id neque aliquam vestibulum morbi blandit cursus risus. Rhoncus urna neque viverra justo nec. Eu scelerisque felis imperdiet proin. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Bibendum enim facilisis gravida neque convallis a cras. Et sollicitudin ac orci phasellus egestas tellus rutrum.",
        free_shipping: true,
        price: 1500
    },
    {
        id: 2,
        image: "https://http2.mlstatic.com/D_NQ_NP_605297-MLA44101147410_112020-O.jpg",
        name: "Player's handbook",
        category: "libros",
        description: "Malesuada proin libero nunc consequat interdum. Massa id neque aliquam vestibulum morbi blandit. Nunc eget lorem dolor sed. At tellus at urna condimentum mattis. Cras fermentum odio eu feugiat pretium nibh. Nulla pharetra diam sit amet. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Dui id ornare arcu odio. Massa id neque aliquam vestibulum morbi blandit cursus risus. Rhoncus urna neque viverra justo nec. Eu scelerisque felis imperdiet proin. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Bibendum enim facilisis gravida neque convallis a cras. Et sollicitudin ac orci phasellus egestas tellus rutrum.",
        free_shipping: false,
        price: 11999
    },
    {
        id: 3,
        image: "https://http2.mlstatic.com/D_NQ_NP_620372-MLA32999154967_112019-O.webp",
        name: "Folios Gold Premium",
        category: "accesorios",
        description: "Malesuada proin libero nunc consequat interdum. Massa id neque aliquam vestibulum morbi blandit. Nunc eget lorem dolor sed. At tellus at urna condimentum mattis. Cras fermentum odio eu feugiat pretium nibh. Nulla pharetra diam sit amet. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Dui id ornare arcu odio. Massa id neque aliquam vestibulum morbi blandit cursus risus. Rhoncus urna neque viverra justo nec. Eu scelerisque felis imperdiet proin. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Bibendum enim facilisis gravida neque convallis a cras. Et sollicitudin ac orci phasellus egestas tellus rutrum.",
        free_shipping: false,
        price: 200
    },
    {
        id: 4,
        image: "https://m.media-amazon.com/images/I/71meLUBjkuL._AC_SX425_.jpg",
        name: "Kit miniaturas inicial",
        category: "figuras",
        description: "Malesuada proin libero nunc consequat interdum. Massa id neque aliquam vestibulum morbi blandit. Nunc eget lorem dolor sed. At tellus at urna condimentum mattis. Cras fermentum odio eu feugiat pretium nibh. Nulla pharetra diam sit amet. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Dui id ornare arcu odio. Massa id neque aliquam vestibulum morbi blandit cursus risus. Rhoncus urna neque viverra justo nec. Eu scelerisque felis imperdiet proin. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Bibendum enim facilisis gravida neque convallis a cras. Et sollicitudin ac orci phasellus egestas tellus rutrum.",
        free_shipping: true,
        price: 2500
    }
]

const operation = {
    type: "gasto",
    amount: 1500,
    id: "324234234",
    description: "lkashdlasd",
    date: new Date()
}

const $ = (selector) => document.querySelector(selector)

const renderProducts = (products) => {
    for (const { image, name, category, description, free_shipping, price } of products) {
        const backgroundColor = free_shipping ? "bg-success" : "bg-danger"
        const operation = free_shipping ? "+" : "-"
        $(".row").innerHTML += `
            <div class="col">
                <div class="card ${backgroundColor}" style="width: 18rem;">
                    <img src="${image}" class="card-img-top" alt="${name}" width="300px">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${description}</p>
                        <p class="card-text">${category}</p>
                        <p class="card-text">$${operation}${price}</p>
                        <a href="#" class="btn btn-primary">Ver producto</a>
                    </div>
                </div>
            </div>
        `
    }
}

renderProducts(products)