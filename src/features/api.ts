import axios from "axios";

// const options = (baseURL: string, data: object) => ({
//     url: 'https://praora.zendesk.com/api/v2/' + baseURL,
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     data
//   });

const api = axios.create({
  baseURL: "https://praora.zendesk.com/api/v2/",
});

export default api;