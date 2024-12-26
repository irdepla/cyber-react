import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from '../../components/CartProduct';

const Cart = () => {

    const cart = useSelector((store) => store.cart)

    return (

        <>
        <section className='cart'>
            <div className="container">
                <h1 className='font-semibold text-2xl mt-10'>Shopping Cart</h1>
            <div className=' grid grid-cols-1 gap-10  mt-10' key={cart.id}>
            {
                cart.map((item) => (
                    <CartProduct key={item.product.id} cartItem={item} />
                ))
            }
            </div>
            </div>
            </section>
        </>
    );
}

export default Cart;
