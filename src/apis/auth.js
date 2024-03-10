import axios from 'axios';
import { toast } from 'react-toastify';
const API = (token) =>
  axios.create({
    baseURL: "http://localhost:3000",
    headers: { Authorization: token },
  });
let url = "http://localhost:3000";
export const loginUser = async (body) => {
  try {
    return await axios.post(`https://chatify-95rq.onrender.com/auth/login`, body);
  } catch (error) {
    console.log('error in loginuser api');
  }
};
export const googleAuth = async (body) => {
  try {
    return await axios.post(`https://chatify-95rq.onrender.com/api/google`, body);
  } catch (error) {
    console.log(error);
  }
};
export const registerUser = async (body) => {
  try {
    return await axios.post(`https://chatify-95rq.onrender.com/auth/register`, body);
  } catch (error) {
    console.log('error in register api');
  }
};
export const validUser = async () => {
  try {
    const token = localStorage.getItem('userToken');

    const { data } = await API(token).get(`https://chatify-95rq.onrender.com/auth/valid`, {
      headers: { Authorization: token },
    });
    return data;
  } catch (error) {
    console.log('error in valid user api');
  }
};
export const searchUsers = async (id) => {
  try {
    const token = localStorage.getItem('userToken');

    return await API(token).get(`https://chatify-95rq.onrender.com/api/user?search=${id}`);
  } catch (error) {
    console.log('error in search users api');
  }
};
export const updateUser = async (id, body) => {
  try {
    const token = localStorage.getItem('userToken');

    const { data } = await API(token).patch(`https://chatify-95rq.onrender.com/api/users/update/${id}`, body);
    return data;
  } catch (error) {
    console.log('error in update user api');
    toast.error('Something Went Wrong.try Again!');
  }
};
export const checkValid = async () => {
  const data = await validUser();
  if (!data?.user) {
    window.location.href = '/login';
  } else {
    window.location.href = '/chats';
  }
};
