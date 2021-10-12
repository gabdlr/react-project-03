//Obtiene la diferencia de años
export function obtenerDiferenciaAnio(anio){
    return new Date().getFullYear() - anio;
}

//Calcula el total a pagar segun el origen
export function calcularMarca(marca){
    let incremento;
    switch(marca){
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

//Calcula el tipo de seguro
export function obtenerPlan(plan) {
    return (plan === 'basico' ? 1.2 : 1.5)
}

//Muestra la primer letra mayuscula
export function primerMayus(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}