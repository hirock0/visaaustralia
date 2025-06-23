import { MdKeyboardArrowRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { PoppinsFont } from "../fontFamily/FontFamily";
const Section_3 = () => {
  const section4Imgs = [
    {
      title: "Furka Pass, Obergoms",
      city: "Dubai",
      image: "/images/dubai_city.png",
    },
    {
      title: "Rialto Bridge, Venezia",
      city: "Soudi",
      image: "/images/soudi-arab.png",
    },
    {
      title: "Cinque Terre, Riomaggiore",
      city: "Australia",
      image: "/images/australia.png",
    },
    {
      title: "Nufenenpass, Obergoms VS",
      city: "Maldives",
      image: "/images/maldives.png",
    },
  ];
  return (
    <div className="overflow-hidden pt-30">
      <div className=" max-w-[1440px] w-11/12 mx-auto">
        <div
          data-aos="fade-left"
          className=" flex max-sm:flex-col max-sm:gap-3 items-center justify-between"
        >
          <h1
            className={` ${PoppinsFont.className} leading-16 text-[64px] max-sm:leading-8 max-lg:text-center max-sm:text-3xl`}
          >
            Featured Destinations🌈
          </h1>
          <Link href="#">
            <button className=" flex items-center bg-red-400 rounded-full py-3 w-36 justify-center text-xl text-white font-semibold hover:bg-black hover:border-2 hover:border-red-500">
              <span>view all</span>

              <MdKeyboardArrowRight className=" text-2xl" />
            </button>
          </Link>
        </div>
        <div className=" mt-10">
          <div className=" grid gap-5 lg:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
            {section4Imgs?.map((img, idx) => (
              <div
                key={idx}
                data-aos={
                  idx === 0
                    ? "fade-down"
                    : idx === 1
                    ? "fade-left"
                    : idx === 2
                    ? "fade-right"
                    : "fade-up"
                }
                className={`${
                  idx == 0 || idx == 3 ? " lg:col-span-2" : ""
                } relative h-96 rounded-3xl overflow-hidden`}
              >
                <Image
                  src={img?.image}
                  alt={img?.title}
                  height={500}
                  width={500}
                  className=" w-full h-full object-cover"
                />
                <div className=" absolute z-20 left-0 right-0 top-0 bottom-0 flex items-center justify-center">
                  <button className=" bg-white font-semibold hover:bg-black hover:border-red-500 hover:border-2 hover:scale-105 transition-all hover:text-white w-35 flex items-center justify-center h-14 rounded-full">
                    <span className=" flex items-center gap-2">
                      <FaLocationDot className=" text-red-500" />
                      <span>{img?.city}</span>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_3;
