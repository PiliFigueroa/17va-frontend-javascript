# Empleades

## Ejercicios

Hacer las siguientes funciones:

1. `empleadesQueHacenGuardia`, que devuelva un array con todes les empleades que hacen guardia

2. `empleadesPorPais`, que tome por parámetro el nombre de un país y devuelva un array con todes les empleades que son de dicho país

3. `empleadesPorArea`, que tome por parámetro el nombre de un área y devuelva un array con todes les empleades que son de dicho área

4. `empleadesConSueldoMayorA`, que tome por parámetro un número como sueldo y devuelva un array con todes les empleades que tengan un sueldo mayor a dicho número, ordenados de menor a mayor según sueldo

5. `empleadesConMasLenguajes`, que tome por parámetro un número y devuelva un array con aquelles empleades que sepan más lenguajes que dicho número

6. `sueldoPromedioEmpleades`, que devuelva el sueldo promedio de todos los empleados

7. `sueldoPromedioPorSeniority`, que tome por parámetro un seniority, y devuelva el sueldo promedio de todes les empleades que tengan ese seniority

8. `buscarEmpleades`, que tome por parámetros area, puesto y seniority, y devuelva un array con les empleades que pertenezcan a dicha area, puesto y seniority

9. `errorEnProduccion`, que ponga en true la propiedad haceGuardia de todos los empleados

10. `subirDeCategoria`, que tome como parámetro un objeto empleade. Si diche empleade no tiene un seniority "Senior", cambiar el valor de su propiedad seniority con el siguiente que le corresponde en orden ("Trainee" -> "Junior" -> "Semisenior" -> "Senior"), y le incremente en 10000 el sueldo

11. `agregarTecnologias`, que agregue a todos los objetos empleades la propiedad tecnologías,que es un array conteniendo los valores "GIT" y "Node.js"

12. `empleadeSabeLenguaje`, que tome por parámetro un objeto empleade (elemento del array empleades) y un lenguaje y devuelva true si dicho empleade sabe dicho lenguaje

13. `empleadesQueSabenLenguaje`, que tome por parámetro un lenguaje y devuelva todes les empleades que saben dicho lenguaje (usar la función anterior)

14. `empleadesQueSabenLenguajes`, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan todos esos lenguajes

15. `empleadesQueSabenAlgunosLenguajes`, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan al menos uno de esos lenguajes

16. `empleadesConMejorSueldo`, que devuelva un array con los 10 mejores empleades pagos (investigar metodo sort)

17. `obtenerTitulosCompletos`, que devuelva un array donde cada elemento es un string con la forma "nombre, puesto seniority, area", p.ej.: "Nadia Conrad, Senior Backend Developer, Desarrollo", habiendo un elemento por cada empleade (usar map)

18. `obtenerInfoPersonal`, que devuelva un array donde cada elemento es un objeto con las propiedades

    - nombre
    - pais
    - edad
      habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original (usar map)

19. `obtenerInfoPuestos`, que devuelva un array donde cada elemento es un objeto con las propiedades

    - nombre
    - area
    - puesto
    - seniority
      habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original (usar map)

20. `obtenerInfoSeniority`, que devuelva un array donde cada elemento es un objeto con las propiedades

    - nombre
    - seniority
    - sueldo
    - cantidadLenguajes
      habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original, eecepto cantidadLenguajes, que es un número indicando la cantidad de lenguajes que sabe (usar map)

21. `obtenerInfoPagos`, que devuelva una array donde cada elemento es un objeto con las propiedades

    - nombre
    - sueldoBruto
    - obraSocial
    - jubilacion
    - sueldoNeto
      habiendo un elemento por cada empleade, donde
    - sueldoBruto es el sueldo del objeto original
    - obraSocial es el 3% del sueldoBruto
    - jubilacion es el 11% del sueldoBruto
    - sueldoNeto es el resultado de restarle a sueldoBruto los valores de obraSocial y jubilacion

22. `obtenerEstadisticasSeniority` que devuelva un objeto donde cada propiedad es un seniority y el valor la cantidad de empleades con dicho seniority

23. `obtenerEstadisticasLenguajes` que devuelva un objeto donde cada propiedad es un lenguaje y el valor la cantidad de empleades que saben dicho lenguaje