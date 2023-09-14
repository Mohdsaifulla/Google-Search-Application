import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyDRTWc5gyysD8WfSQsSCm2cRszxw027hMs",
  cx: "13817b869d0074e95",
};

// const params = {
//   'key': import.meta.env.VITE_SOME_KEY_ONE,
//   'CX': import.meta.env.VITE_SOME_KEY_TWO,
// };

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
