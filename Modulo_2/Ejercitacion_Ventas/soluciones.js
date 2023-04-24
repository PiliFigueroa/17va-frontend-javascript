// - Crear una funcion `precioMaquina(componentes)` que recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

// Creo una funcion auxiliar que me devuelva el precio de un unico componente que recibe por parametro
const precioComponente = (componente) => {
    for (const articulo of local.precios) {
      if (componente === articulo.componente) {
        return articulo.precio
      }
    }
  }
  
//   console.log(precioComponente("Motherboard ASUS 1500"))
  
  // Hago la funcion del ejercicio reutilizando la funcion auxiliar
  const precioMaquina = (componentes) => {
    let sumaTotal = 0
    for (const componente of componentes) {
      sumaTotal += precioComponente(componente)
    }
    return sumaTotal
  }
  
// console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]))

// ### cantidadVentasComponente
// - Crear una funcion `cantidadVentasComponente(componente)` que recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.

const cantidadVentasComponente = (componente) => {
    const { ventas } = local
    let acc = 0
    for (const { componentes } of ventas) {
        for (const articulo of componentes) {
            if (articulo === componente) {
                acc += 1
            }
        }
    }
    return acc
}

// console.log(cantidadVentasComponente("Motherboard ASUS 1500"))
// console.log(cantidadVentasComponente("Monitor GPRS 3000"))

  // ### vendedoraDelMes
  // - Crear una funcion `vendedoraDelMes(mes, anio)`, se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const vendedoraDelMes = (mes, anio) => {
    // Primero resto una unidad al mes para que me coincida con lo que usaria un usuario
    mes--
    const { ventas, vendedoras } = local
    // Primero filtro las ventas por fecha segun mis parametros
    const filtradoPorFecha = ventas.filter(venta => venta.fecha.getMonth() === mes && venta.fecha.getFullYear() === anio)
    
    // Me creo un objeto vacio para poder guardar las ventas totales de cada vendedora
    const ventasFiltradas = {}
    // Itero por las vendedoras para poder acumular el total vendido de cada una y crear la propiedad en el objeto vacio que guarde ese total
    for (const vendedora of vendedoras) {
        let acc = 0
        const ventasPorVendedora = filtradoPorFecha.filter(venta => venta.nombreVendedora === vendedora)
        for (const venta of ventasPorVendedora) {
            acc += precioMaquina(venta.componentes)
        }
        ventasFiltradas[vendedora] = acc
    }

    // Creo variables auxiliares para poder guardar y comparar entre el total vendido de cada vendedora segun mi objeto nuevo creado con ese total
    let mejorVenta = 0
    let mejorVendedora = ""
    for (const key in ventasFiltradas) {
        if (ventasFiltradas[key] > mejorVenta) {
            mejorVenta = ventasFiltradas[key]
            mejorVendedora = key
        }
    }
    return mejorVendedora
}

// console.log(vendedoraDelMes(1, 2019))
// console.log(vendedoraDelMes(2, 2019))

// ### ventasMes
// - Crear una funcion `ventasMes(mes, anio)` debe obtener las ventas totales de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const ventasMes = (mes, anio) => {
    mes--
    const { ventas } = local
    const filtradoPorFecha = ventas.filter(({ fecha }) => fecha.getMonth() === mes && fecha.getFullYear() === anio)
    let acc = 0
    for (const { componentes } of filtradoPorFecha) {
        acc += precioMaquina(componentes)
    }
    return acc
}

// console.log(ventasMes(1, 2019))
// console.log(ventasMes(2, 2019))

// ### ventasVendedora
// - Crear una funcion `ventasVendedora(nombre)` debe obtener el monto de ventas totales realizadas por una vendedora sin límite de fecha.

const ventasVendedora = (vendedora) => {
    const { ventas } = local
    const ventasPorVendedora = ventas.filter(venta => venta.nombreVendedora === vendedora)
    let acc = 0
    for (const venta of ventasPorVendedora) {
        acc += precioMaquina(venta.componentes)
    }
    return acc
}

// console.log(ventasVendedora("Ada"))
// console.log(ventasVendedora("Grace"))
// console.log(ventasVendedora("Hedy"))
// console.log(ventasVendedora("Sheryl"))

// ### componenteMasVendido
// - Crear una funcion `componenteMasVendido()`, devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función `cantidadVentasComponente`.

const componenteMasVendido = () => {
    const { ventas } = local
    const componentesVendidos = {}
    for (const { componentes } of ventas) {
        let acc = 0
        for (const articulo of componentes) {
            acc += cantidadVentasComponente(articulo)
            componentesVendidos[articulo] = acc
        }
    }
    let masVendido = ""
    let cantidadVendida = 0
    for (const key in componentesVendidos) {
        if (componentesVendidos[key] > cantidadVendida) {
            cantidadVendida = componenteMasVendido[key]
            masVendido = key
        }
    }
    return masVendido
}

// console.log(componenteMasVendido())

// ### huboVentas
// - Crear una funcion `huboVentas(mes, anio)` que indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const huboVentas = (mes, anio) => {
    mes--
    const { ventas } = local
    return ventas.some(({ fecha }) => fecha.getMonth() === mes && fecha.getFullYear() === anio)
}

// console.log(huboVentas(1, 2019))
// console.log(huboVentas(2, 2019))
// console.log(huboVentas(3, 2019))

// ### sucursalDelMes
// - Crear la función `sucursalDelMes(mes, anio)`, que se le pasa dos parámetros numéricos, y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const sucursalDelMes = (mes, anio) => {
    mes--
    const { ventas, sucursales } = local
    const ventasPorFecha = ventas.filter(({ fecha }) => fecha.getMonth() === mes && fecha.getFullYear() === anio)
    const sucursalDelMes = {}
    for (const nombreSucursal of sucursales) {
        let acc = 0
        const ventasPorSucural = ventasPorFecha.filter(({ sucursal }) => sucursal === nombreSucursal)
        for (const venta of ventasPorSucural) {
            acc += precioMaquina(venta.componentes)
        }
        sucursalDelMes[nombreSucursal] = acc
    }
    let mejorVenta = 0
    let mejorSucursal = ""
    for (const key in sucursalDelMes) {
        if (sucursalDelMes[key] > mejorVenta) {
            mejorVenta = sucursalDelMes[key]
            mejorSucursal = key
        }
    }
    return mejorSucursal
}

console.log(sucursalDelMes(1, 2019))
console.log(sucursalDelMes(2, 2019))