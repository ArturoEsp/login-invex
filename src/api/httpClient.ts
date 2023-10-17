import axios from "axios";
import { EnvConstants } from "../constants";

const HttpClient = axios.create({
  baseURL: EnvConstants.API_URL,
  headers: {
    Accept: 'application/json',
    "Content-Type": 'application/x-www-form-urlencoded',
  }
});

export default HttpClient;