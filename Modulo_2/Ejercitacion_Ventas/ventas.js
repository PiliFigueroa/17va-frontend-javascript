const local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  sucursales: ["Centro", "Caballito"],

  ventas: [
    // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
    {
      fecha: new Date(2019, 1, 4),
      nombreVendedora: "Grace",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 1),
      nombreVendedora: "Ada",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 2),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "Motherboard MZI"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 10),
      nombreVendedora: "Ada",
      componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 0, 12),
      nombreVendedora: "Grace",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 24),
      nombreVendedora: "Sheryl",
      componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 12),
      nombreVendedora: "Hedy",
      componentes: ["Monitor GPRS 3000", "HDD Toyiva"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 1),
      nombreVendedora: "Ada",
      componentes: ["Motherboard MZI", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 11),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "RAM Quinston"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 15),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 12),
      nombreVendedora: "Hedy",
      componentes: ["Motherboard ASUS 1500", "HDD Toyiva"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 21),
      nombreVendedora: "Grace",
      componentes: ["Motherboard MZI", "RAM Quinston"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 8),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 16),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 27),
      nombreVendedora: "Hedy",
      componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 22),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 5),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1500", "RAM Quinston"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 1),
      nombreVendedora: "Grace",
      componentes: ["Motherboard MZI", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    {
      fecha: new Date(2019, 1, 7),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor GPRS 3000", "RAM Quinston"],
      sucursal: "Caballito",
    },
    {
      fecha: new Date(2019, 1, 14),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
      sucursal: "Centro",
    },
  ],

  precios: [
    { 
      componente: "Monitor GPRS 3000",
      precio: 200 
    },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 },
  ],
};

// - Crear una funcion `precioMaquina(componentes)` que recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

// Creo una funcion auxiliar que me devuelva el precio de un unico componente que recibe por parametro
const precioComponente = (componente) => {
  for (const articulo of local.precios) {
    if (componente === articulo.componente) {
      return articulo.precio
    }
  }
}

console.log(precioComponente("Motherboard ASUS 1500"))

// Hago la funcion del ejercicio reutilizando la funcion auxiliar
const precioMaquina = (componentes) => {
  let sumaTotal = 0
  for (const componente of componentes) {
    sumaTotal += precioComponente(componente)
  }
  return sumaTotal
}

console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])) // 320