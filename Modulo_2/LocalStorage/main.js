// What is localstorage? Adventages and disadventages
// Es el almacenamiento del navegaador al cual podemos acceder y usar con javascript

// JSON.parse() and JSON.stringify()

const theme = {
    color: "dark"
}

// console.log("obj original:", theme)
// const themeParseado = JSON.stringify(theme)
// console.log("obj json:", themeParseado)

// const reparsearTheme = JSON.parse(themeParseado)
// console.log("obj reconvertido:", reparsearTheme)

const user = {
    username: "Pilar"
}

// setItem(key, data)
const themeParseado = JSON.stringify(theme)
localStorage.setItem("theme", themeParseado)
localStorage.setItem("user", JSON.stringify(user))

// getItem(key)
const themeDelLocalStorage = JSON.parse(localStorage.getItem("theme"))
console.log(themeDelLocalStorage)

// removeItem(key)
localStorage.removeItem("user")