import Header from "../headers/header";
import { Link } from "react-router-dom";
import medC from "../../assets/category/medC.png";
import mtC from "../../assets/category/mtC.png";
import soinC from "../../assets/category/soinC.png";
import oC from "../../assets/category/oC.png";
import veteC from "../../assets/category/veteC.png";
import beutC from "../../assets/category/beutC.png";

const Category = [
  {
    id: 1,
    title: "Médicaments",
    description:"Produits pharmaceutiques destinés à prévenir, soulager et traiter diverses maladies.",
    Image: medC,
    path:'/médicament'
  },

  {
    id: 2,
    title: "Matériel médical",
    description: "Équipements et accessoires médicaux pour le suivi et les soins de santé.",
    Image: mtC,
    path:'/médicamentMédicale'

  },

  {
    id: 3,
    title: "Soins",
    description: "Produits d’hygiène et de soins quotidiens pour le corps et le bien-être.",
    Image: soinC,
   path: "/soins"
  },

  {
    id: 4,
    title: "Vétérinaires",
    description:"Produits et médicaments dédiés à la santé des animaux.",
    Image: veteC,
    path:'/vétérinaires'
  },

  {
    id: 5,
    title: "Orthopédie",
    description:"Produits conçus pour soutenir et soulager les articulations et muscles.",
    Image: oC,
 path: "/orthopedie"
  },

  {
    id: 6,
    title: "Beauté",
    description:"Produits cosmétiques pour le soin du visage, du corps et des cheveux.",
    Image: beutC,
    path:'/beautés'
  },
];

function Categorie() {

  const renderCards = Category.map((card) => {
    return (

      <div key={card.id} className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden group hover:-translate-y-2">

        {/* IMAGE */}
        <div className="overflow-hidden">
          <img src={card.Image} alt={card.title} className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"/>
        </div>

        {/* Card CONTENT */}
        <div className="p-6 flex flex-col gap-4">

          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
            {card.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {card.description}
          </p>
   <Link to={card.path}   className="w-fit px-6 py-3 rounded-full border-2 border-green-500 text-green-600 font-semibold hover:bg-green-500 hover:text-white transition duration-300 shadow-md">
            Découvrir
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section className="py-20  bg-gradient-to-r from-white to-green-50 dark:from-gray-900 dark:to-gray-800 ">    
      <div className="max-w-1400px mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 ">
          <Header Highlight="Catégories" />
        </div>

        {/* fonctionCARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {renderCards}
        </div>
      </div>
    </section>
  );
}

export default Categorie;