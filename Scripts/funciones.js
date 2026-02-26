function calcularCostoPeso(peso) {
    return peso * 2.0;
}

function calcularCostoDistancia(distancia) {
    return distancia * 0.05;
}

function calcularSubtotal(peso, distancia) {
    const costoPeso = calcularCostoPeso(peso);
    const costoDistancia = calcularCostoDistancia(distancia);
    return costoPeso + costoDistancia;
}

function calcularDescuento(subtotal, codigo) {
    const codigoDescuento = (codigo || '').trim().toUpperCase();

    if (!codigoDescuento) {
        return { descuento: 0, codigoValido: true };
    }

    if (codigoDescuento === 'WEB10') {
        return { descuento: subtotal * 0.1, codigoValido: true };
    }

    if (codigoDescuento === 'WEB20') {
        return { descuento: subtotal * 0.2, codigoValido: true };
    }

    return { descuento: 0, codigoValido: false };
}

function calcularImpuesto(totalConDescuento) {
    return totalConDescuento * 0.08;
}

function calcularTotalFinal(totalConDescuento, impuesto) {
    return totalConDescuento + impuesto;
}

export {calcularCostoPeso, calcularCostoDistancia, calcularSubtotal, calcularDescuento, calcularImpuesto,calcularTotalFinal };