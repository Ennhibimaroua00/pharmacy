import { useState } from "react";

import promo1 from "../../assets/CARDPROMO/promo1.png";
import promo2 from "../../assets/CARDPROMO/promo2.png";
import promo3 from "../../assets/CARDPROMO/promo3.jpeg";

const images = [promo1, promo2, promo3];

function Promotion() {

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-r from-white to-green-50 dark:from-gray-900 dark:to-gray-800">

      <div className="w-fit mx-auto mb-10">
        <h2 className="md:text-6xl text-[3rem] font-bold text-black-500">
          Promotions
        </h2>

        <div className="w-32 h-1 bg-green-500 mt-4 ml-auto"></div>
      </div>

      <div className="relative flex justify-center items-center ">

        {/* image */}
        <img
          src={images[index]}
          alt="promo"
          className="w-[700px] h-[350px] object-contain rounded-3xl shadow-xl "
        />

        {/* left button */}
        <button
          onClick={prevSlide}
          className="absolute left-10 bg-white/70 hover:bg-white text-black text-3xl px-4 py-2 rounded-full"
        >
          ❮
        </button>

        {/* right button */}
        <button
          onClick={nextSlide}
          className="absolute right-10 bg-white/70 hover:bg-white text-black text-3xl px-4 py-2 rounded-full"
        >
          ❯
        </button>

      </div>

    </section>
  );
}

export default Promotion;