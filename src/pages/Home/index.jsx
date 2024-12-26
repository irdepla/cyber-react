import React from 'react';
import Card from '../../components/Card';

const Home = () => {
    return (
        <>
        <main className='main'>
            <section className='hero bg-custom-gradient'>
                <div className="container">
                    <div className="hero__wrapper flex flex-col items-center gap-12">
                    <div className="hero__info flex flex-col ">
                        <span className='hero__subtitle bg-custom-gradient font-semibold opacity-[40%] text-[25px]'>
                        Pro.Beyond.
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
