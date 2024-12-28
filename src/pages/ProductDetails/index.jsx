import React, { useEffect, useState } from 'react';
import { getProducts, getProductsById } from '../../service/productService';
import { addProducts } from '../../store/productSlice';
import { data, NavLink, useParams } from 'react-router';
import { getProduct } from '../../service/productDetailsService';

const ProductDetails = () => {

    const id = useParams().id
    const [product, setProduct] = useState(null)

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await getProductsById(id, (data) => setProduct(data))
                setProduct(res)
                console.log("product:", product);
            } catch (error) {
                console.log(error);

            }
        }
        fetchProduct()
    }, [])


    // if (!product) {
    //     return <p>Loading product details...</p>; // Handle loading state
    // }

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
