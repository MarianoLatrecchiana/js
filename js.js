let pizza = prompt("Ingrese el nombre de la pizza deseada");
let valor = 0;

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
  console.log("El costo de la pizza seleccionada es: " + valor);
  pizza = prompt(
    "Ingrese el nombre de la pizza deseada (ingrese la palabra salir si no desea otra pizza)"
  );
}
alert("Gracias por tu pedido");
