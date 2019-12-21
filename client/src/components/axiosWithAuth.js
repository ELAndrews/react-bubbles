import axios from "axios";

export default function axiosWithAuth() {
  const token = localStorage.getItem("token");

  const axiosInstance = axios.create({
    headers: {
      Authorization: token
    }
  });

  return axiosInstance;
}
