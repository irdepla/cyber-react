import React from 'react';
import Card from '../../components/Card';
import "./index.css"
import PhoneImageMobile from "../../assets/images/iphone-image-mobile.svg"

const Home = () => {
    return (
        <>
        <main className='main'>
            <section className='hero'>
                <div className="container">
                    <div className="hero__wrapper pt-[88px] flex flex-col items-center gap-12">
                    <div className="hero__info flex justify-center gap-4 items-center flex-col ">
                        <span className='hero__subtitle text-center text-white bg-custom-gradient font-semibold opacity-[40%] text-[25px]'>
                        Pro.Beyond.
                        </span>
                        <h1 className=' text-center text-white hero__title font-thin text-[72px]'>
                        IPhone 14
                        </h1>
                        <span className=' text-center font-semibold text-[72px] text-white'>Pro</span>
                        <span className='text-[#909090] font-medium text-[19px] text-center '>
                        Created to change everything for the better. For everyone 
                        </span>
                        <button className=" mt-4 px-[56px] py-4 border-[1px] rounded-[6px] text-white border-solid">Shop Now</button>
                    </div>
                    <div className="hero__img">
                        <img src={PhoneImageMobile} alt="" />
                    </div>
                    </div>
                </div>
            </section>
        </main>
        <Card />
        </>
    );
}

export default Home;
