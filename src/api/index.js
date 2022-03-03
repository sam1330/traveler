import axios from "axios";

let url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.request(url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '673830bc4emsh3eb58b89412f902p119a97jsn5d2283904f9d'
      }
    });

    return data;
  } catch (error) {
    
  }
}