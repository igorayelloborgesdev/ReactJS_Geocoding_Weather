import apiGeolocation from "../Services/GeolocationAPI";

export async function getGeolocationService(queryString) {
  try {
    const res = await apiGeolocation
      // .get("address?" + queryString + "&benchmark=2020&format=json")
      .get("address?street=4600+Silver+Hill+Rd&city=Washington&state=DC&benchmark=2020&format=json")
      .then((response) => {
        var obj = {
          coordinates: response.data.result.addressMatches[0].coordinates,
          matchedAddress: response.data.result.addressMatches[0].matchedAddress,
        };        
        return obj;     
      })
      .catch((err) => {
        console.error("Error: " + err);
      });
      return res;
  } catch (e) {
    console.error("Search not found");
  }
}
