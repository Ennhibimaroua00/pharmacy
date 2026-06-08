import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Pages/CartContext"; 
import { Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import axios from "axios";

function Panier() {
  // 1. Importation s7i7a: kandiro destructuring l-cartItems (li hiya l-array l-asli)
  const { cartItems, addToCart, removeFromCart, deleteFromCart } = useContext(CartContext) || {};

  // Hna kanchoufo l-data (bach n-t-mtt2d)
  const cart = cartItems || [];

const handleCheckout = async () => {
  const token = localStorage.getItem("token");
  
  if (cart.length === 0) return; // Ma-y-sift walo ila kan panier khawi

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/commandes", 
      {
        items: cart, // Laravel ghadi y-chouf had l-array
        total: total 
      },
      {
        headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json" // Mouhim bch Laravel y-fhmo
        }
      }
    );

    if (response.status === 201) {
      alert("🎉 Commande validée avec succès !");
      clearCart(); // ◄-- Daba khassk t-khwi l-panier!
      window.location.href = "/"; // Sift l-user l-home wlla l-page mes commandes
    }
  } catch (error) {
    console.error("Erreur:", error.response?.data || error.message);
    alert("Erreur: " + (error.response?.data?.message || "Veuillez réessayer"));
  }
};

  // 2. Calcul dyal total (Dima k-y-khdem m3a cartItems)
  const total = cart.reduce((sum, item) => {
    const prix = parseFloat(String(item.prix).replace("DH", "").trim()) || 0;
    const qty = Number(item.qty) || 1;
    return sum + prix * qty;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8 transition duration-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <ShoppingBag className="text-green-600" /> Mon Panier
        </h1>

        {cart.length === 0 ? (
          <div className="text-center bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Votre panier est vide</h2>
            <Link to="/" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full shadow-md">
              <ArrowLeft size={18} /> Retour à la boutique
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row justify-between items-center bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 gap-4">
                  <div className="flex gap-4 items-center">
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-xl" />
                    <div>
                      <h2 className="font-bold text-gray-800 dark:text-white">{item.title}</h2>
                      <p className="text-green-600 font-bold">{parseFloat(item.prix).toFixed(2)} DH</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 rounded-full p-1">
                      <button onClick={() => removeFromCart(item.id)} className="w-8 h-8 rounded-full bg-white">-</button>
                      <span className="font-bold">{item.qty}</span>
                      <button onClick={() => addToCart(item)} className="w-8 h-8 rounded-full bg-white">+</button>
                    </div>
                    <button onClick={() => deleteFromCart(item.id)} className="text-gray-400 hover:text-red-500">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md h-fit">
              <h2 className="text-xl font-bold mb-4">Résumé du panier</h2>
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total TTC</span>
                <span className="text-green-600">{total.toFixed(2)} DH</span>
              </div>
              <Link to="/commande" className="w-full  bg-green-600 text-white text-center font-bold py-3 rounded-full hover:bg-green-700 transition" onClick={handleCheckout}>
                Valider la commande
              </Link>
            </div>
          </div>
        )}
</div>
</div>
);
}

export default Panier;