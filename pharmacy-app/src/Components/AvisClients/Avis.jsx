import React, { useState } from "react";
import Header from "../headers/header";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Avis = () => {
  const reviews = [
    {
      name: "Carlos Mendes",
      profession: "Fitness Coach",
      text: "J'apprécie la sélection de produits de santé et de bien-être. Service rapide et fiable.",
      rating: 5,
      img: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Natasha Monghel",
      profession: "Nutritionniste",
      text: "Des produits de qualité et un excellent service. Je recommande vivement cette pharmacie.",
      rating: 5,
      img: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Emily Johnson",
      profession: "Food Blogger",
      text: "Livraison rapide et emballage soigné. Très satisfaite de mon expérience.",
      rating: 4,
      img: "https://i.pravatar.cc/100?img=3",
    },
    {
      name: "Ahmed Karim",
      profession: "Client fidèle",
      text: "Le site est facile à utiliser et les produits sont authentiques.",
      rating: 5,
      img: "https://i.pravatar.cc/100?img=4",
    },
    {
      name: "Fatima Zahra",
      profession: "Cliente",
      text: "Excellent rapport qualité-prix et service client très réactif.",
      rating: 5,
      img: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "Yassine",
      profession: "Sportif",
      text: "Je commande souvent ici et je suis toujours satisfait.",
      rating: 4,
      img: "https://i.pravatar.cc/100?img=6",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 3 >= reviews.length ? 0 : prev + 3));
  };

  const prev = () => {
    setIndex((prev) =>
      prev - 3 < 0 ? reviews.length - 3 : prev - 3
    );
  };

  const visible = reviews.slice(index, index + 3);

  return (
    <section className="bg-gradient-to-b from-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">

      <div className="max-w-7xl mx-auto px-6 ">

        <Header Highlight="Avis Clients" />

        {/* BUTTONS */}
        <div className="flex justify-end gap-3 mb-8">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-green-500 hover:text-white transition"
          >
            <IoIosArrowBack className="mx-auto text-xl text-gray-700 dark:text-white" />
          </button>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-green-500 hover:text-white transition"
          >
            <IoIosArrowForward className="mx-auto text-xl text-gray-700 dark:text-white" />
          </button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">

          {visible.map((review, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >

              <div className="flex items-center gap-4 mb-6">

                <img
                  src={review.img}
                  alt={review.name}
                  className="w-16 h-16 rounded-full border-2 border-green-500 object-cover"
                />

                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                    {review.name}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {review.profession}
                  </p>

                  <div className="flex mt-1">
                    {[...Array(review.rating)].map((_, index) => (
                      <span
                        key={index}
                        className="text-yellow-400 text-lg"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-7 text-sm">
                {review.text}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Avis;