import axios from 'axios';

const url = 'http://localhost/backend';

//https://clinica-pawsitive.herokuapp.com/

export const sendMail = data => axios.post(`${url}/send_mail.php`, data, { headers: {"Access-Control-Allow-Origin": "*" } });
export const signUp = data => axios.post(`${url}/sign_up.php`, data, { headers: {"Access-Control-Allow-Origin": "*" } });
export const login = data => axios.post(`${url}/login.php`, data, { headers: {"Access-Control-Allow-Origin": "*" } });
export const updateData = data => axios.post(`${url}/update_client.php`, data, { headers: {"Access-Control-Allow-Origin": "*" } });

export const getCarteirinhas = () => axios.get(`${url}/get_carteirinhas.php`, { headers: {"Access-Control-Allow-Origin": "*" } });
export const getServices = (carteirinha) => axios.get(`${url}/get_services.php?carteirinha=${carteirinha}`, { headers: {"Access-Control-Allow-Origin": "*" } });