import Image from "next/image";
import { PoppinsFont } from "../fontFamily/FontFamily";

const Section_2 = () => {
  const section3Imgs = [
    {
      title: "Furka Pass, Obergoms",
      image:
        "https://visaaustraliaimmigration.com/wp-content/uploads/2024/05/Untitled-design-8.png",
    },
    {
      title: "Rialto Bridge, Venezia",
      image:
        "https://visaaustraliaimmigration.com/wp-content/uploads/2024/05/Untitled-design-7.png",
    },
    {
      title: "Cinque Terre, Riomaggiore",
      image:
        "https://visaaustraliaimmigration.com/wp-content/uploads/2024/05/Untitled-design-9.png",
    },
    {
      title: "Nufenenpass, Obergoms VS",
      image:
        "https://visaaustraliaimmigration.com/wp-content/uploads/2024/05/Untitled-design-11.png",
    },
  ];

  return (
    <div className="overflow-hidden pt-25">
      <div className=" max-w-[1440px] w-11/12 mx-auto">
        <div className="">
          <h1
            data-aos="fade-left"
            className={`${PoppinsFont.className} leading-16 text-[64px] max-sm:leading-8 max-lg:text-center max-sm:text-2xl`}
          >
            Our Popular visa immigration country🌈
          </h1>

          <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-15">
            {section3Imgs?.map((img: any, idx: any) => (
              <div
                key={idx}
                data-aos={idx % 2 !== 0 ? "fade-down" : "fade-up"}
                className={`${
                  idx % 2 !== 0 ? "md:mt-10" : "md:mb-10"
                } relative overflow-hidden rounded-2xl`}
              >
                <Image
                  src={img.image}
                  alt={img?.title}
                  height={500}
                  width={500}
                  className=" sm:h-[400px] w-full object-cover"
                />
                <div className=" absolute bottom-0 p-5 flex justify-center w-full">
                  <h1
                    className={`${PoppinsFont.className} text-[32px] leading-8 text-white `}
                  >
                    {img?.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_2;
