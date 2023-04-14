# Ejercitacion ventas y vendedoras

- Para esta ejercitacion integradora es bueno tener en cuenta que las primeras funciones que se piden, nos seran utiles para reutilizarlas en aquellas funciones mas complejas.
- Les sera util crear funciones auxiliares en caso de verlo necesario, que les resuelvan cosas pequeñas para reutilizarlas en las demas.

### precioMaquina
- Crear una funcion `precioMaquina(componentes)` que recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

### cantidadVentasComponente
- Crear una funcion `cantidadVentasComponente(componente)` que recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.

### vendedoraDelMes
- Crear una funcion `vendedoraDelMes(mes, anio)`, se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

### ventasMes
- Crear una funcion `ventasMes(mes, anio)` debe obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

### ventasVendedora
- Crear una funcion `ventasVendedora(nombre)` debe obtener las ventas totales realizadas por una vendedora sin límite de fecha.

### componenteMasVendido
- Crear una funcion `componenteMasVendido()`, devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función `cantidadVentasComponente`.

### huboVentas
- Crear una funcion `huboVentas(mes, anio)` que indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

### ventasSucursal
- Crear la función `ventasSucursal(sucursal)`, que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

### optimizacion
- Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?

### sucursalDelMes
- Crear la función `sucursalDelMes(mes, anio)`, que se le pasa dos parámetros numéricos, y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

### renderPorMes
- Crear una funcion `renderPorMes()` que muestre una lista ordenada del importe total vendido por cada mes/año (usar console.log, no crear una lista en html).

### renderPorSucursal
- Crear una funcion `renderPorSucursal()` que muestre una lista del importe total vendido por cada sucursal. (Usar console.log, no crear una lista en html).

### render
- Crear una funcion `render()` que tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó. (Usar console.log, no crear una lista en html).