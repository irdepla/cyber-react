import { apiClient } from "../API/axios";



const ORDERS_URL = "/orders"


export async function addOrder(body) {
    const res = await apiClient.post(ORDERS_URL, body);
    return res?.data
}