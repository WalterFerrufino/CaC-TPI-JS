// const valorTicket = 200;
// const Estudiante = 0.2;
// const Trainee = 0.5;
// const Junior = 0.85;

// var cantidadDeTickets = 0;

// function totalAPagar(cantidadDeTickets, valorTicket, categoria) {
//     const cantidadDeTickets = document.getElementById("cantidad");
//     const categoria = document.getElementById("categoria");

//     return cantidadDeTickets * valorTicket * categoria;


// }


// const totalAPagar = document.getElementById("totalAPagar");
// totalAPagar.innerText = totalAPagar;



function calcularPrecioConDescuento(cantidad, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = 200*((cantidad * porcentajePrecioConDescuento) / 100);

    return precioConDescuento;
}

function onClickButtonTotalAmount() {

    const InputQuantity = document.getElementById("InputQuantity");
    const quantityValue = InputQuantity.value;

    const inputCategoria = document.getElementById("InputCategoria");
    const valorCategoria = inputCategoria.value;

    switch (valorCategoria) {
        case "Estudiante":
            descuento = 80;
            break
        case "Trainee":
            descuento = 50;
            break
        case "Junior":
            descuento = 15;
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(quantityValue, descuento);

    const total = document.getElementById("Total");
    total.innerText = precioConDescuento;
}

