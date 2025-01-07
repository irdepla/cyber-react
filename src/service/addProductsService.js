import { apiClient } from "../API/axios";

const PRODUCTS_POST_URL = "/products";

export async function addProducts(productData) {
  try {
    const res = await apiClient.post(PRODUCTS_POST_URL, productData);
    return res.data;
  } catch (error) {
    throw error;
  }
}
