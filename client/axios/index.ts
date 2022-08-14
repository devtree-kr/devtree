import Axios from "axios";
export const isBrowser = () => typeof window !== "undefined";
const getCsrToken = () => (isBrowser() ? sessionStorage.getItem("access_token")?.toString() : "");
export const clientAxios = Axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:23018`,
  headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest", authorization: `Bearer ${getCsrToken()}` },
});

export const ssrAxios = Axios.create({
  baseURL: "http://nest:3000",
  headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest", authorization: `Bearer ${getCsrToken()}` },
});
