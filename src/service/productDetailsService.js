import { useParams } from "react-router";
import { apiClient } from "../API/axios";


export async function getProduct(id) {
  const PRODUCTS_GET_URL = "/products/" + id;
  const res = await apiClient.get(PRODUCTS_GET_URL);
  return res?.data?.data;
}
