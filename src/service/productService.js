import { apiClient } from "../API/axios";

const PRODUCTS_GET_URL = "/products";
const SINGLE_PRODUCT_URL = `/products/`;

export async function getProducts() {
    const res = await apiClient.get(PRODUCTS_GET_URL);
    return res?.data?.data;
}

export async function getProductsById(id) {
    const res = await apiClient.get(`${SINGLE_PRODUCT_URL}${id}`);
    return res?.data?.data; 
}
