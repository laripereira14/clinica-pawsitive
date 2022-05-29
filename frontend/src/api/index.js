import axios from 'axios';

const url = 'http://localhost/backend/';

export const sendMail = data => axios.post(`${url}`, data, { headers: {"Access-Control-Allow-Origin": "*" } });