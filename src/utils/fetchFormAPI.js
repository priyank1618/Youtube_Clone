import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
      part: 'snippet',
      videoId: 'M7FIvfx5J10'
    },
    headers: {
      'X-RapidAPI-Key':'9fe2af991dmsh0de558dd94fc2e9p16ff05jsn560dbf9039ff',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'


    }
  };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };

  //'9fe2af991dmsh0de558dd94fc2e9p16ff05jsn560dbf9039ff'
  