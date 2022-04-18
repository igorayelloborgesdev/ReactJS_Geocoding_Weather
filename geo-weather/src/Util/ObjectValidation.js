export function searchAllFilledVariablesInObj(obj) {
    var newDict = {};
    for (var variable in obj)
    {                
        if((obj[variable] || obj[variable].length > 0 ))
        {            
            newDict[variable] = obj[variable];            
        }            
    }         
    return newDict;
}
