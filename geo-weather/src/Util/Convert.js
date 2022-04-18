export function convertFahrenheitToCelcius(temperatureFahrenheit) {    
    return parseInt(Math.abs(((temperatureFahrenheit - 32) * 5)/9));
}