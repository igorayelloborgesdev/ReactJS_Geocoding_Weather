import {
  formatAlphaNumericWithSpaces,
  formatNumbers,
  formatLength,
  formatLetters,
  stringIsEmptyOrNull,
} from "../Util/DefaultValidation";

export function getGeolocation(obj) {
  validateFieldsBeforeSendToGeolocation(obj);
}
export function geolocationFieldFormat(value, tag) {
  if (tag === "alpha") {
    return formatAlphaNumericWithSpaces(value);
  } else if (tag === "num") {
    return formatNumbers(value);
  } else if (tag === "zip") {
    let zipCode = formatNumbers(value);
    return formatLength(zipCode, 8);
  } else if (tag === "state") {
    return formatLetters(value);
  }
}
function validateFieldsBeforeSendToGeolocation(obj) {
  try {
    if (
      stringIsEmptyOrNull(obj.streetName) ||
      stringIsEmptyOrNull(obj.houseNumber)
    ) {
      throw new "Street name or house number not filled"();
    }
  } catch (e) {
    console.log(e);
  }
}
