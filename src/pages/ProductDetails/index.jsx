import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../service/productService';
import { addProducts } from '../../store/productSlice';
import { NavLink, useParams } from 'react-router';
import { getProduct } from '../../service/productDetailsService';

const ProductDetails = () => {

    const dispatch = useDispatch()
    const { id } = useParams();
    const product = useSelector((store) => store.products)


    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await getProduct(id)
                console.log("res:", res);
                dispatch(addProducts(res))
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts()
    }, [])

    return (
        <>
        <div className="container">
    <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center" key={product.id}>
          
          <img src={product.image} alt="" />
          <h1>{product.name}</h1>
          
          </div>
      </div>
      </div>
        </>
    );
}

export default ProductDetails;
