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

let suma = 0;

prompt(
  "Seleccione la pizza que desea (escriba SALIR si no quiere realizar el pedido)"
);
while (pizza !== "salir") {
  switch (pizza) {
    case "jamon":
    case "tomate":
      this.precio = 1200;
      break;

    case "panceta":
    case "rucula":
      this.precio = 1500;
      break;

    case "fugazzeta":
    case "pepperoni":
      this.precio = 2000;
      break;
  }
  suma = suma + this.precio;

  console.log("El costo de la pizza seleccionada es: $" + this.precio);
  pizza = prompt(
    "Seleccione otra pizza (Ingrese la palabra salir si no desea otra pizza"
  );
}
console.log("total del pedido: $" + precio);
alert(
  "El total de su pedido es: $" + suma + " ¡Gracias por elegir nuestras pizzas!"
);
