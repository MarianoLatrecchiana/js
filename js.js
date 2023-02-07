/*/Calcular costo de productos seleccionados por el cliente/;
PRIMER PRE ENTREGAR
let pizza = prompt(
  "Seleccione la pizza que desea (escriba SALIR si no quiere realizar el pedido)"
);
let suma = 0;

while (pizza !== "salir") {
  switch (pizza) {
    case "jamon":
    case "tomate":
      valor = 1200;
      break;

    case "panceta":
    case "rucula":
      valor = 1500;
      break;

    case "fugazzeta":
    case "pepperoni":
      valor = 2000;
      break;
  }
  suma = suma + valor;

  console.log("El costo de la pizza seleccionada es: $" + valor);
  pizza = prompt(
    "Seleccione otra pizza (Ingrese la palabra salir si no desea otra pizza"
  );
}
console.log("total del pedido: $" + suma);
alert(
  "El total de su pedido es: $" + suma + " ¡Gracias por elegir nuestras pizzas!"
);
*/

//SEGUNDA PRE ENTREGA
// Objetos array bucle for

class pizza {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
  vender() {
    this.vendido = true;
  }
}
const pizzas = [];
pizzas.push(new pizza("jamon", "1200"));
pizzas.push(new pizza("tomate", "1200"));
pizzas.push(new pizza("panceta", "1500"));
pizzas.push(new pizza("rucula", "1500"));
pizzas.push(new pizza("fugazzeta", "2000"));
pizzas.push(new pizza("pepperoni", "2000"));
for (const pizza of pizzas) pizza.sumaIva();

console.log(pizzas);
let suma = 0;
prompt(
  "Seleccione la pizza que desea (escriba SALIR si no quiere realizar el pedido)"
);

while (pizza !== "salir") {
  switch (pizza) {
    case "jamon":
    case "tomate":
      valor = this.precio;
      break;

    case "panceta":
    case "rucula":
      valor = this.precio;
      break;

    case "fugazzeta":
    case "pepperoni":
      valor = this.precio;
      break;
  }
  suma = suma + this.precio;

  console.log("El costo de la pizza seleccionada es: $" + this.precio);
  pizza = prompt(
    "Seleccione otra pizza (Ingrese la palabra salir si no desea otra pizza"
  );
}
console.log("total del pedido: $" + suma);
alert(
  "El total de su pedido es: $" + suma + " ¡Gracias por elegir nuestras pizzas!"
);
