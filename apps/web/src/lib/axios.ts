import axios from "axios";
import { backendUrl } from "../config";

function httpClient(baseURL: string) {

  console.log(baseURL);
  const client = axios.create({ 
    baseURL,
    timeout: 4000,
    timeoutErrorMessage: "Connection Problem",
  });
  return client;
}
  
export const client = httpClient(backendUrl);