import React from "react";
import Card from "../../components/Card";
import "./index.css";
import PhoneImageMobile from "../../assets/images/iphone-image-mobile.svg";
import Airpods from "../../assets/images/airpods-img.svg";
import VisionPro from "../../assets/images/vision-pro-img.svg";
import Playstation from "../../assets/images/PlayStation.svg";
import Macbook from "../../assets/images/MacBook.svg";

const Home = () => {
  return (
    <>
      <main className="main">
        <section className="hero">
          <div className="container">
            <div className="hero__wrapper pt-[88px] flex flex-col items-center gap-12">
              <div className="hero__info flex justify-center gap-4 items-center flex-col ">
                <span className="hero__subtitle text-center text-white bg-custom-gradient font-semibold opacity-[40%] text-[25px]">
                  Pro.Beyond.
                </span>
                <h1 className=" text-center text-white hero__title font-thin text-[72px]">
                  IPhone 14
                </h1>
                <span className=" text-center font-semibold text-[72px] text-white">
                  Pro
                </span>
                <span className="text-[#909090] font-medium text-[19px] text-center ">
                  Created to change everything for the better. For everyone
                </span>
                <button className=" mt-4 px-[56px] py-4 border-[1px] rounded-[6px] text-white border-solid">
                  Shop Now
                </button>
              </div>
              <div className="hero__img">
                <img src={PhoneImageMobile} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="technologies__section">
            <div className="grid">
          <div className="container flex flex-col gap-6 py-10 px-4 items-center">

              <div>
                <img src={Airpods} alt="" />
              </div>
              <div>
                <h2 className="font-light text-[34px]">
                  Apple AirPods <span className="font-medium">Max</span>
                </h2>
                <span>Computational audio. Listen, it's powerful</span>
              </div>

          </div>

          <div className="vision-pro__card flex flex-col gap-6 py-10 px-4 items-center bg-[#353535]">
              <div>
                <img src={VisionPro} alt="" />
              </div>
              <div className="text-center">
                <h2 className=" text-white font-light text-[34px]">
                  Apple Vision <span className="font-bold">Pro</span>
                </h2>
                <span className="text-[#909090] text-center">
                  An immersive way to experience entertainment
                </span>
              </div>
            </div>

            <div className="container flex flex-col gap-6 py-10 px-4 items-center">

              <div>
                <img src={Playstation} alt="" />
              </div>
              <div className="text-center">
                <h2 className="font-light text-[34px]">
                Playstation <span className="font-medium">5</span>
                </h2>
                <span>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</span>
              </div>
            </div>


            <div className="macbook__card flex flex-col gap-6 py-10 px-4 items-center bg-[#EDEDED]">
              <div>
                <img src={Macbook} alt="" />
              </div>
              <div className="text-center flex flex-col gap-4">
                <h2 className=" font-medium text-[34px]">
                Macbook <span className="font-light">Air</span>
                </h2>
                <span className="text-[#909090] text-center">
                The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
                </span>
                <button className="py-4 border-[1px] rounded-[6px] border-solid border-black px-[132px] font-medium">
                Shop Now
                </button>
              </div>
            </div>

            </div>


        </section>
      </main>
      <Card />
    </>
  );
};

export default Home;
