import axios from "axios";

const api = axios.create({
  baseURL: "https://api-deslocamento.herokuapp.com/api/v1/",
  headers: {
    "Content-Type": "Application/json",
  },
});

export { api };
