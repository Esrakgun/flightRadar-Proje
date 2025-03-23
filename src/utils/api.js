import axios from "axios";


const api=axios.create({
    baseURL:"https://flight-radar1.p.rapidapi.com",
    headers: {
      'x-rapidapi-key': '29d4da8facmsh2127697d318b220p1337a1jsn04c53f3e26d1',
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    },
});

export default api;