import {calcularCostoPeso, calcularCostoDistancia, calcularSubtotal, calcularDescuento, calcularImpuesto, calcularTotalFinal
} from './Funciones.js';

// Selectores de elementos del DOM
const btnEjecutar = document.getElementById("ejecutar");
const laRespuesta = document.getElementById("laRespuesta");
const btnRecordar = document.getElementById("recordar");
const errorDiv = document.getElementById("error");


// Función para calcular
function calcular(){
    errorDiv.innerHTML = '';
    laRespuesta.innerHTML = '';

    const nombre = document.getElementById("elNombre").value.trim();   
    const peso = parseFloat(document.getElementById("elPeso").value);
    const distancia = parseFloat(document.getElementById("laDistancia").value);
    const codigo = document.getElementById("elCodigo").value.trim();

    // Validación de campos vacíos
    if (!nombre || !peso || !distancia) {
        errorDiv.innerHTML = 'Completa los campos obligatorios.';
        return;
    }

    // Validación de números válidos y mayores que 0
    if (!Number.isFinite(peso) || peso <= 0 || !Number.isFinite(distancia) || distancia <= 0){
        errorDiv.innerHTML = 'Peso y distancia deben ser números válidos y mayores que 0.';
        return;
    }

    // Calculo
    const costoPeso = calcularCostoPeso(peso);
    const costoDistancia = calcularCostoDistancia(distancia);
    const subtotal = calcularSubtotal(peso, distancia);
    const { descuento, codigoValido } = calcularDescuento(subtotal, codigo);
    const totalConDescuento = subtotal - descuento;
    const impuesto = calcularImpuesto(totalConDescuento);
    const totalFinal = calcularTotalFinal(totalConDescuento, impuesto);

    // Validación de código de descuento inválido
    if (codigo && !codigoValido){
        errorDiv.innerHTML = 'Código no válido, no se aplicó descuento.';
    }

    // Mostrar resultados
laRespuesta.innerHTML = `
Resultado de la cotizacion:
Nombre del cliente: ${nombre}
Costo por peso: ${costoPeso}
Costo por distancia: ${costoDistancia}
Subtotal: ${subtotal}
Descuento aplicado: ${descuento}
Impuesto: ${impuesto}
Total final: ${totalFinal}
    `;
}

// Limpia los campos del formulario y el área de respuesta
function limpiarFormulario(){
    document.getElementById("elNombre").value = '';
    document.getElementById("elPeso").value = '';
    document.getElementById("laDistancia").value = '';
    document.getElementById("elCodigo").value = '';
    errorDiv.innerHTML = "";
    laRespuesta.innerHTML = 'Salida---';
}

// Event listeners
btnEjecutar.addEventListener('click', calcular);
btnRecordar.addEventListener('click', limpiarFormulario);


