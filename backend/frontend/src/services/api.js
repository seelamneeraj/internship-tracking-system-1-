import axios from 'axios';

const API = axios.create({
  baseURL:
    'https://stackblitzstartersz3etqtnu-tcnl--5000--4c73681d.local-credentialless.webcontainer.io/api',
});

export default API;
