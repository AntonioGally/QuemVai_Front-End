import axios from "axios";

import { getTokenAdmin, getToken } from "./auth";

const api = axios.create({
    baseURL: "http://192.168.15.12:6868"
  });

  api.interceptors.request.use(async config => {
    const tokenAdmin = getTokenAdmin();
    const tokenUser = getToken();
    if (tokenAdmin) {      
      config.headers.Authorization = `Bearer ${tokenAdmin}`;
    }
    else{
      if (tokenUser){
        config.headers.Authorization = `Bearer ${tokenUser}`;
      }
    }
    return config;
  });

  export default api;