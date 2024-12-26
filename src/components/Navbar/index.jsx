import React from 'react';
import cyberLogo from "../../assets/icons/cyber-logo.svg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';


const Navbar = () => {


  const cartLength = useSelector((store) => store.cart.length);


    return (
        <>
        <nav className='nav border'>
            <div className="container">
                <div className="nav__wrapper py-8 px-4 flex justify-between items-center">
                    <div className='nav__logo'>
                        <NavLink to="/">
                        <img src={cyberLogo} alt="" />
                        </NavLink>
                    </div>
                    <Button>
                        <NavLink className='relative' to="/cart" >
                        <ShoppingCartIcon />
                        <div className='bg-red-800 absolute text-white left-[20px] top-[15px] w-[25px] rounded-[30px]'>
                            {cartLength}
                        </div>
                        </NavLink>
                    </Button>
                    <button className='flex flex-col gap-[5px]'>
                        <span className='w-[25px]  border border-black'></span>
                        <span className='w-[25px] border border-black'></span>
                        <span className='w-[25px] border border-black'></span>
                    </button>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
