import axios from "axios";
import { apiClient } from "../API/axios";
import { useParams } from "react-router";

const PRODUCTS_GET_URL = "/products"

export async function getProducts() {
    const res = await apiClient.get(PRODUCTS_GET_URL)
    return res?.data?.data
}

const SINGLE_PRODUCT_URL = `/products/`; // Ensure trailing slash

export async function getProductsById(id) {
    const res = await apiClient.get(`${SINGLE_PRODUCT_URL}${id}`); // Append `id` with proper URL
    return res?.data?.data;
}
