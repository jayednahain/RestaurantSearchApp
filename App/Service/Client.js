import axios from "axios";
import { DUMMYJSON } from "./AllBaseUrlConstant";

const axiosClientDummyJson = axios.create({
    baseURL: DUMMYJSON,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
});
  

export { axiosClientDummyJson } ;