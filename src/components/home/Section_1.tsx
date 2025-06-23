import Image from "next/image";
import { FaRegCircleRight } from "react-icons/fa6";
import { PoppinsFont } from "../fontFamily/FontFamily";
const Section_1 = () => {
  const items = Array(12).fill(0);
  return (
    <div className=" overflow-hidden pt-50">
      <div className=" flex lg:gap-5 max-lg:gap-10  max-lg:flex-col  max-w-[1440px]  w-11/12 mx-auto">
        <div className=" w-1/2 max-lg:w-full flex justify-center items-center">
          <div className=" flex gap-3 ">
            <div className=" space-y-5 flex flex-col items-center justify-center">
              <Image
                src="https://cdn.pixabay.com/photo/2020/06/17/21/05/heaven-5311146_960_720.jpg"
                alt="img-1 "
                height={500}
                width={500}
                className=" w-80 rounded-2xl hover:scale-95 transition-all"
              />
              <Image
                src="https://cdn.pixabay.com/photo/2019/12/16/05/08/opera-house-4698517_960_720.jpg"
                alt="img-2"
                height={500}
                width={500}
                data-aos="fade-right"
                className=" w-60 rounded-2xl hover:scale-95 transition-all"
              />
            </div>
            <div className="space-y-3">
              <Image
                src="https://cdn.pixabay.com/photo/2021/07/26/13/20/man-6494289_960_720.jpg"
                alt="img-1 "
                height={500}
                width={500}
                data-aos="fade-up"
                className=" h-80 object-cover w-72 rounded-2xl hover:scale-95 transition-all"
              />
              <Image
                src="https://cdn.pixabay.com/photo/2016/09/29/11/33/discuss-1702638_960_720.jpg"
                alt="img-2"
                height={500}
                width={500}
                data-aos="fade-up"
                className=" h-48 object-cover w-72 rounded-2xl hover:scale-95 transition-all"
              />
            </div>
          </div>
        </div>
        {/* ---------------------------- */}
        <div className=" w-1/2  max-lg:w-full flex flex-col justify-center items-center ">
          <div className="">
            {/* divider_start */}
            <div
              data-aos="fade-up"
              className=" max-lg:flex max-lg:justify-center my-5"
            >
              <div className=" flex items-center h-fit gap-2 ">
                {items.map((_, index: any) => (
                  <div className=" text-7xl" key={index}>
                    <div className=" w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
            {/* divider_end */}
            {/* ------------------ */}

            <div className=" space-y-5 max-lg:space-y-3 max-sm:space-y-5">
              <h1
                data-aos="fade-up"
                className={`${PoppinsFont.className} leading-12 max-sm:leading-8 max-lg:text-center text-[40px] max-sm:text-2xl text-[#0f3186]`}
              >
                We Are Dedicated To Shaping The Dreams Of Individuals
              </h1>
              <p data-aos="fade-up" className=" text-[17px] max-sm:text-[14px]">
                With our unwavering commitment to excellence and a team of
                experienced immigration experts, we have established ourselves
                as a reliable and trusted partner in the field of immigration.
              </p>
              <p data-aos="fade-up" className="text-[17px] max-sm:text-[14px]">
                Founded [Year], [Company Name] was born out of a passion for
                helping people achieve their dreams of living and working in
                their dream destinations. Over the years, we have grown into a
                dynamic and forward-thinking immigration consultancy, serving
                clients from all corners of the globe.
              </p>

              <div
                data-aos="fade-up"
                className=" h-12 max-lg:flex max-lg:justify-center"
              >
                <button className=" flex items-center gap-3 hover:bg-white hover:text-red-500 hover:scale-105 transition-all hover:border-2 hover:border-red-500 text-[17.5px] font-extrabold uppercase bg-red-500 py-4 px-8 rounded-md text-white">
                  <span>more about</span>

                  <FaRegCircleRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_1;
