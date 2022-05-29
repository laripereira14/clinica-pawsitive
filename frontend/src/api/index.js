import axios from 'axios';

const url = 'https://clinica-pawsitive.herokuapp.com/';

export const sendMail = data => axios.post(`${url}`, data, { headers: {"Access-Control-Allow-Origin": "*" } });