import apiGeolocation from "../Services/GeolocationAPI";

export function getGeolocationService(queryString)
{
  try
  {
    apiGeolocation.get("address?" + queryString + "&benchmark=2020&format=json")
    .then((response) => console.log(response.data))
    .catch((err) => {
      console.error("Error: " + err);
    });
  }catch(e)
  {
    console.error("Search not found");
  }  
}