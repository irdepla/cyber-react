import React from 'react';
import Card from '../../components/Card';
import "./index.css"

const Home = () => {
    return (
        <>
        <main className='main'>
            <section className='hero'>
                <div className="container">
                    <div className="hero__wrapper flex flex-col items-center gap-12">
                    <div className="hero__info flex flex-col ">
                        <span className='hero__subtitle text-center text-white bg-custom-gradient font-semibold opacity-[40%] text-[25px]'>
                        Pro.Beyond.
                        </span>
                        <h1 className=' text-center text-white hero__title font-thin text-[72px]'>
                        IPhone 14
                        </h1>
                        <span className=' text-center font-semibold text-[72px] text-white'>Pro</span>
                        <span className='text-[#909090] '>
                        Created to change everything for the better. For everyone
                        </span>
                    </div>
                    <div className="hero__img"></div>
                    </div>
                </div>
            </section>
        </main>
        <Card />
        </>
    );
}

export default Home;
