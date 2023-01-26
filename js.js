/Calcular costo de productos seleccionados por el cliente/;

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
