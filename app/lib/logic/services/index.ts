import axios from 'axios';

export const privateApi = axios.create({
  baseURL: `${process.env.API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});
