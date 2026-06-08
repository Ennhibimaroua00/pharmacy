import React, { useState } from "react";
import { useLocation } from "react-router-dom";
function CommandeForm() {
  const location = useLocation();

const produit = location.state?.produit || "";
const prix = location.state?.prix || "";
  const [formData, setFormData] = useState({
  nom: "",
  telephone: "",
  adresse: "",
  ville: "",
  produit: produit,
  quantite: 1,
  paiement: "Cash on Delivery",
});
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Commande envoyée avec succès !");
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-green-100 py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">

        {/* title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-600">
            Formulaire de Commande
          </h1>

          <p className="text-gray-500 mt-3">
            Remplissez les informations pour confirmer votre commande
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* nom */}
          <div>
            <label className="block mb-2 font-semibold">
              Nom complet
            </label>

            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Votre nom"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
              required
            />
          </div>

          {/* téléphone */}
          <div>
            <label className="block mb-2 font-semibold">
              Téléphone
            </label>

            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="+212..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
              required
            />
          </div>

          {/* adresse */}
          <div>
            <label className="block mb-2 font-semibold">
              Adresse
            </label>

            <input
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              placeholder="Votre adresse"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
              required
            />
          </div>

          {/* ville */}
          <div>
            <label className="block mb-2 font-semibold">
              Ville
            </label>

            <input
              type="text"
              name="ville"
              value={formData.ville}
              onChange={handleChange}
              placeholder="Salé"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
              required
            />
          </div>

          {/* produit + quantité */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-semibold">
                Produit
              </label>

              <input
                type="text"
                name="produit"
                value={formData.produit}
                onChange={handleChange}
                placeholder="Nom du produit"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
                required
              />

            </div>
            <div>
  <label className="block mb-2 font-semibold">
    Prix
  </label>

  <input
    type="text"
    value={`${prix} `}
    disabled
    className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-100"
  />
</div>

            <div>
              <label className="block mb-2 font-semibold">
                Quantité
              </label>

              <input
                type="number"
                name="quantite"
                min="1"
                value={formData.quantite}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
              />
            </div>

          </div>

          {/* paiement */}
          <div>
            <label className="block mb-2 font-semibold">
              Méthode de paiement
            </label>

            <select
              name="paiement"
              value={formData.paiement}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
            >
              <option>Cash on Delivery</option>
              <option>Carte Bancaire</option>
              <option>PayPal</option>
            </select>
            {formData.paiement === "Carte Bancaire" && (
  <div className="grid md:grid-cols-2 gap-6">

    <div>
      <label className="block mb-2 font-semibold">
        Numéro de carte
      </label>

      <input
        type="text"
        placeholder="1234 5678 9012 3456"
        className="w-full border border-gray-300 rounded-xl px-4 py-3"
      />
    </div>

    <div>
      <label className="block mb-2 font-semibold">
        Date d’expiration
      </label>

      <input
        type="text"
        placeholder="MM/YY"
        className="w-full border border-gray-300 rounded-xl px-4 py-3"
      />
    </div>

  </div>
)}
          </div>
{/* confirmer */}
  <div className="flex gap-4 pt-4">     
  <button
    type="submit"
    onclick={handleCheckout}
    className="inline-block px-6 py-3 rounded-full border-2 border-green-500 text-green-600 font-semibold hover:bg-green-500 hover:text-white transition duration-300 shadow-md"
  >
    Confirmer
  </button>

  {/* supprimer */}
  <button
    type="reset"
    className="inline-block px-6 py-3 rounded-full border-2 border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition duration-300 shadow-md"
  >
    Supprimer
  </button>
</div>  
        </form>
      </div>
    </section>
  );
}

export default CommandeForm;