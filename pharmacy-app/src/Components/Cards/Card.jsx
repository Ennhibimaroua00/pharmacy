import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Pages/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function Cards({ id, image, title, description, prix }) {
  const { addToCart } = useContext(CartContext);

const handleAdd = () => {
  // TEST: Wach l-id kayn?
  console.log("Adding:", { id, title }); 
  addToCart({ id, image, title, prix: Number(prix) });
};

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
      
      {/* Bouton Ajouter au panier */}
      <div className="flex justify-between mb-3">
        <button 
          onClick={handleAdd}
          className="bg-green-200 text-white px-4 py-2 rounded-lg hover:bg-green-700 cursor-pointer transition"
        >
          <FaShoppingCart />
        </button>
      </div>

      <div className="flex justify-center">
        <img src={image} alt={title} className="w-40 h-40 object-cover rounded-lg" />
      </div>

      <div className="text-center mt-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
        <p className="text-xl font-semibold text-green-600 mt-3">{prix} DH</p>

        {/* Bouton Commander (Link to /commande) */}
        <Link
          to="/commande"
          state={{ produit: title, prix: prix }}
          className="inline-block mt-4 px-6 py-3 rounded-full border-2 border-green-500 text-green-600 font-semibold hover:bg-green-500 hover:text-white transition"
          
        >
        Commander
        </Link>
      </div>
    </div>
  );
}

export default Cards;