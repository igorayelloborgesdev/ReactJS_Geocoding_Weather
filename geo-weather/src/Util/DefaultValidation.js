export function formatAlphaNumericWithSpaces(name) {    
    return name.replace(/[^\w\s]/gi, '');    
}
export function formatNumbers(numbers) {        
    return numbers.replace(/\D/g,'');    
}
export function formatLength(value, maxLength) {            
    return value.substring(0,  maxLength);
}
export function formatLetters(value) {        
    return value.replace(/[^a-zA-Z]+/g,'');    
}
export function stringIsEmptyOrNull(value) {        
    if((!value || value.length === 0 ))
        return true;
    return false;
}