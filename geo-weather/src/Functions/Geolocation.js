import { formatAlphaNumericWithSpaces, formatNumbers, formatLength, formatLetters } from '../Util/DefaultValidation'

export function getGeolocation(obj) {
    console.log(obj);
}
export function geolocationFieldFormat(value, tag) {    
    if(tag === 'alpha')
    {   
        return formatAlphaNumericWithSpaces(value); 
    }
    else if(tag === 'num')
    {
        return formatNumbers(value);
    }
    else if(tag === 'zip')
    {
        let zipCode = formatNumbers(value);
        return formatLength(zipCode, 8);
    }
    else if(tag === 'state')
    {        
        return formatLetters(value);
    }    
}