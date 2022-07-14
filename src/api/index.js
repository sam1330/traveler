import axios from "axios";

let url = process.env.REACT_APP_API_URL;


export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.request(url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": process.env.REACT_APP_API_HOST,
        // 'x-rapidapi-key': process.env.REACT_APP_API_KEY_SECONDARY
        "x-rapidapi-key": process.env.REACT_APP_API_KEY_PRIMARY,
      },
    });

    return data;
  } catch (error) {
    
  }
}