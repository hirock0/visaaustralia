"use client";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
import { PoppinsFont } from "../fontFamily/FontFamily";
const Banner = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useRouter(); // Initialize navigate

  const bannerImgs = [
    {
      title: "img-1",
      image:
        "https://cdn.pixabay.com/photo/2022/03/04/05/41/ukraine-7046610_1280.jpg",
    },
    {
      title: "img-2",
      image:
        "https://cdn.pixabay.com/photo/2017/08/28/18/51/international-2690850_960_720.jpg",
    },
    {
      title: "img-3",
      image:
        "https://cdn.pixabay.com/photo/2020/06/20/02/42/usa-5319479_960_720.jpg",
    },
  ];

  const handleSearch = () => {
    if (searchText.trim()) {
      // Redirect to the search URL with the query parameter
      navigate.push(`/search/${searchText}`);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="h-[580px] overflow-hidden relative">
        <Swiper
          effect="fade"
          autoplay={{ delay: 5000 }}
          loop={true}
          modules={[Pagination, Autoplay, EffectFade]}
          fadeEffect={{ crossFade: true }}
          className="h-full"
        >
          {bannerImgs?.map((img: any, index: any) => (
            <SwiperSlide key={index} className="h-full">
              <Image
                src={img?.image}
                alt={img?.title}
                fill
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* main-box-start */}
        <div className="bg-[#1a005252] absolute top-0 z-50 left-0 right-0 bottom-0">
          <div className="flex gap-30 max-md:gap-0 max-sm:gap-20 max-sm:flex-col max-sm:justify-center max-w-[1440px] w-11/12 mx-auto h-full">
            <div className="text-white w-1/2 max-sm:w-full flex items-center justify-center">
              <div
                data-aos="fade-right"
                className="space-y-5 max-lg:space-y-3 max-sm:text-center max-sm:space-y-5 max-sm:flex max-sm:flex-col max-sm:items-center"
              >
                <h1
                  className={` ${PoppinsFont.className} text-5xl max-lg:text-[32px]`}
                >
                  Fulfill Your Dream
                </h1>
                <p className="text-[20px] leading-8">
                  We help people to apply visa in Australia .We handle all the
                  hassle to submitting documents.
                </p>
                <div className="h-12">
                  <button className="hover:bg-white hover:text-red-500 hover:scale-105 transition-all hover:border-2 hover:border-red-500 text-[17.5px] font-extrabold uppercase bg-red-500 py-4 px-8 rounded-md text-white">
                    contact us
                  </button>
                </div>
              </div>
            </div>
            {/* ------------------- */}
            <div className="w-1/2 max-sm:w-full flex items-center justify-center">
              <div
                data-aos="fade-left"
                className="space-y-3 bg-white p-5 rounded-xl w-full"
              >
                <h1
                  className={` ${PoppinsFont.className} text-[34px] max-lg:text-[32px] text-center`}
                >
                  Check Your Visa Status
                </h1>
                <div className="flex items-center border border-red-500 rounded-full px-4">
                  <input
                    type="text"
                    name=""
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                    placeholder="Enter Your Passport Number"
                    className="h-12 w-full outline-0"
                  />
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSearchText("")}
                      className={`${searchText === "" ? "hidden" : "block"}`}
                    >
                      <IoMdClose />
                    </button>

                    <IoSearch
                      onClick={handleSearch} // On click of search icon, navigate with the search text
                      className="text-red-500 text-3xl font-extrabold cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Image
              src="https://i.ibb.co/NgMqzTMs/485633ab-group-1-1.png"
              alt="vector"
              height={500}
              width={500}
              data-aos="fade-right"
              className="lg:w-2/12 absolute lg:right-[35%] lg:bottom-10 max-lg:top-[5%] max-lg:left-[3%] max-lg:w-5/11 min-[1600px]:hidden"
            />
          </div>
        </div>
        {/* main-box-end */}
      </div>
    </div>
  );
};

export default Banner;
