import axios from "axios";
import { apiClient } from "../API/axios";

const PRODUCTS_GET_URL = "/products"

export async function getProducts() {
    const res = await apiClient.get(PRODUCTS_GET_URL)
    return res?.data?.data
}