"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { YouTubeEmbed } from "@next/third-parties/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { PoppinsFont, RobotoFont } from "../fontFamily/FontFamily";

const Section_4 = () => {
  const cards = [
    {
      name: "Josh Rango",
      profession: "Traveler",
      img: "https://visaaustraliaimmigration.com/wp-content/uploads/2024/05/51faf8ba-mask-group-a.png",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, fuga nesciunt. Esse dolor quaerat dolorem molestiae accusamus, nisi qui non corporis explicabo necessitatibus soluta animi unde ducimus blanditiis possimus eligendi?Tempora dicta eveniet ab, officiis animi quos quae totam ",
    },
    {
      name: "Josh Rango",
      profession: "Traveler",
      img: "https://visaaustraliaimmigration.com/wp-content/uploads/2024/05/51faf8ba-mask-group-a.png",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, fuga nesciunt. Esse dolor quaerat dolorem molestiae accusamus, nisi qui non corporis explicabo necessitatibus soluta animi unde ducimus blanditiis possimus eligendi?Tempora dicta eveniet ab, officiis animi quos quae totam ",
    },
    {
      name: "Josh Rango",
      profession: "Traveler",
      img: "https://visaaustraliaimmigration.com/wp-content/uploads/2024/05/51faf8ba-mask-group-a.png",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, fuga nesciunt. Esse dolor quaerat dolorem molestiae accusamus, nisi qui non corporis explicabo necessitatibus soluta animi unde ducimus blanditiis possimus eligendi?Tempora dicta eveniet ab, officiis animi quos quae totam ",
    },
    {
      name: "Josh Rango",
      profession: "Traveler",
      img: "https://visaaustraliaimmigration.com/wp-content/uploads/2024/05/51faf8ba-mask-group-a.png",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, fuga nesciunt. Esse dolor quaerat dolorem molestiae accusamus, nisi qui non corporis explicabo necessitatibus soluta animi unde ducimus blanditiis possimus eligendi?Tempora dicta eveniet ab, officiis animi quos quae totam ",
    },
  ];
  return (
    <div className="overflow-hidden pt-25">
      <div className=" max-w-[1440px] w-11/12 mx-auto">
        <h1
          data-aos="fade-left"
          className={` ${PoppinsFont.className} text-center leading-16 text-[64px] max-sm:leading-8  max-sm:text-3xl`}
        >
          Top Reviews 😍 for cleva
        </h1>
        <div data-aos="zoom-in" className=" mt-10 pb-10">
          <Swiper
            autoplay={{ delay: 5000 }}
            loop={true}
            slidesPerView={3}
            spaceBetween={50}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className=" h-full"
          >
            {cards?.map((item, index) => (
              <SwiperSlide key={index} className=" h-full">
                <div className=" border border-slate-100 p-4 rounded-3xl">
                  <p className=" text-[17px] text-slate-600 text-center">
                    {item?.descriptions}
                  </p>
                  <div className=" flex justify-center my-5">
                    <Image
                      src={item?.img}
                      alt={item?.name}
                      height={500}
                      width={500}
                      className=" w-20 h-20 rounded-full"
                    />
                  </div>
                  <h2
                    className={` ${RobotoFont.className} text-center text-[22px]`}
                  >
                    {item?.name}
                  </h2>
                  <h2
                    className={`${RobotoFont.className} text-center text-[16px]`}
                  >
                    {item?.profession}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" mt-25">
          <div
            data-aos="zoom-in"
            className="w-full aspect-video lg:h-[500px] mx-auto rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/EApr4RdOlDg?si=yqlp5UNUIIC-4w_u"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_4;
