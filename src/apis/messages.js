import axios from 'axios';
const API = (token) =>
  axios.create({
    baseURL: "https://chatify-95rq.onrender.com",
    headers: { Authorization: token },
  });
export const sendMessage = async (body) => {
  try {
    const token = localStorage.getItem('userToken');
    const { data } = await API(token).post('https://chatify-95rq.onrender.com/api/message/', body);
    return data;
  } catch (error) {
    console.log('error in sendmessage api' + error);
  }
};
export const fetchMessages = async (id) => {
  try {
    const token = localStorage.getItem('userToken');

    const { data } = await API(token).get(`https://chatify-95rq.onrender.com/api/message/${id}`);
    return data;
  } catch (error) {
    console.log('error in fetch Message API ' + error);
  }
};
