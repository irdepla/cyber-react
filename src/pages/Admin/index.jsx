import React, { useEffect, useState } from "react";
import { getOrders } from "../../service/ordersService";

const Admin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders(){
        const res = await getOrders()
        console.log(res);
        setOrders(res)
    }
    fetchOrders()
  }, [])

  return (
    <>
    <div className="">
      {orders.map((order) => (
        <div className="p-4 border-black border border-solid grid grid-cols-1 gap-2 " key={order.id}>
            <h1>{order.address}</h1>
            <h1>{order.date}</h1>
            <h1>{order.status}</h1>
            <h1 className="font-bold">${order.total}</h1>
        </div>
      ))}
      </div>
    </>
  );
};

export default Admin;
