import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
const Section_5 = () => {
  return (
    <div className=" py-25 overflow-hidden">
      <section data-aos="fade-up" className="max-w-[1440px] w-11/12 mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <div>
            <div className="relative  max-md:flex max-md:justify-center ">
              <span className="text-red-500 text-3xl font-bold">
                ..........
              </span>
            </div>
            <h2 className=" max-md:text-center text-4xl md:text-5xl font-extrabold text-[#0f3186] leading-tight mb-4">
              Have Any Questions?
              <br />
              Let’s Start To Talk
            </h2>
            <p className=" mb-5 max-md:text-center">
              Nacetur Said Sursus Habitas Elefend Montes Torcont Parata Natak,
              Dis Thirty Days Lovertis Ed Dignisim Maurice Neta, Fermentum
            </p>

            <div className=" max-md:flex max-md:justify-center">
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="#"
                  className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600"
                >
                  <FaGooglePlusG />
                </Link>
                <Link
                  href="#"
                  className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600"
                >
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <form className="space-y-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full p-3 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <textarea
              rows={5}
              placeholder="Write Message"
              className="w-full p-3 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>

            <button
              type="submit"
              className="bg-red-600 text-white font-bold py-3 px-6 rounded-md hover:bg-red-700 transition"
            >
              SEND A MESSAGE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Section_5;
