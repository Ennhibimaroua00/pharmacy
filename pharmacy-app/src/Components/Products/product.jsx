import { useState } from "react";
import Header from "../headers/header";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Card";
import { Link } from "react-router-dom";

function Products() {
  const categorie = [
    "All",
    "Médicaments",
    "Matériel médical",
    "Soins",
    "Vétérinaires",
    "Orthopédie",
    "Beauté",
  ];

  const [activeTab, setActiveTab] = useState("All");


  // 🔍 FILTER PRODUCTS
  const filteredItems =
    activeTab === "All"
      ? ProductList
      : ProductList.filter(
          (item) => item.Categorie === activeTab
        );

  return (
    <section className=" from-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      <div className=" mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20">

        <Header Highlight="Produits" />

        {/* CATEGORIES */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10">
          {categorie.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-5 py-2 rounded-lg border-2 font-semibold transition duration-300 shadow-md text-sm sm:text-base
                ${
                  activeTab === cat
                    ? "bg-green-500 text-white border-green-500"
                    : "border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-9 mt-20">
          {filteredItems.slice(0, 4).map((item) => (
        <Cards 
    key={item.id}     // ◄-- L-key khass y-koun unik
    id={item.id}      // ◄-- HADA HOWA L-ID! Siftou b smiya s7i7a
    image={item.image}
    title={item.title}
    prix={item.prix}
    description={item.description}
  />
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="mt-15 mx-auto w-fit">
          <Link
            to="/AllProducts"
            className="px-6 py-3 rounded-full border-2 border-green-500 text-green-600 font-semibold hover:bg-green-500 hover:text-white transition duration-300 shadow-md"
          >
            View All
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Products;