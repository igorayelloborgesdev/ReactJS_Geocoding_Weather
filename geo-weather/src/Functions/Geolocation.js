import {
  formatAlphaNumericWithSpaces,
  formatNumbers,
  formatLength,
  formatLetters,
  stringIsEmptyOrNull,
} from "../Util/DefaultValidation";
import { getGeolocationService } from "../Services/GeolocationService";
import { urlFormatQueryString } from "../Util/DefaulUrl";
import { searchAllFilledVariablesInObj } from "../Util/ObjectValidation";

export async function getGeolocation(obj) {
  var validationFieldsMsg = validateFieldsBeforeSendToGeolocation(obj);
  if (!validationFieldsMsg.success) return validationFieldsMsg;
  var dictParams = searchAllFilledVariablesInObj(obj);
  dictParams["street"] = mergeNumberAndAddress(
    dictParams,
    "street",
    "houseNumber"
  );
  delete dictParams["houseNumber"];
  var queryString = urlFormatQueryString(dictParams);
  return await getGeolocationService(queryString);
}
export function geolocationFieldFormat(value, tag) {
  if (tag === "alpha") {
    return formatAlphaNumericWithSpaces(value);
  } else if (tag === "num") {
    return formatNumbers(value);
  } else if (tag === "zip") {
    let zipCode = formatNumbers(value);
    return formatLength(zipCode, 9);
  } else if (tag === "state") {
    let state = formatLetters(value);
    return formatLength(state, 2);
  }
}
function validateFieldsBeforeSendToGeolocation(obj) {
  try {
    if (stringIsEmptyOrNull(obj.street)) {
      throw new Error("Street name not filled");
    }
    if (stringIsEmptyOrNull(obj.houseNumber)) {
      throw new Error("House number not filled");
    }
    if (
      stringIsEmptyOrNull(obj.zip) &&
      (stringIsEmptyOrNull(obj.city) || stringIsEmptyOrNull(obj.state))
    ) {
      throw new Error("Please fill Zip or city/ State");
    }
    return { "message": "", "success": true };
  } catch (e) {
    return { "message": e.toString(), "success": false };
  }
}
function mergeNumberAndAddress(dict, addressKey, numberKey) {
  return dict[numberKey] + " " + dict[addressKey];
}
