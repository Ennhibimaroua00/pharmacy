import { useEffect, useState } from "react";
import axios from "axios";
import { LayoutDashboard, Pill, ShoppingCart, Users } from "lucide-react";
import { Link } from "react-router-dom";


function MedDach() {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProduits();
  }, []);

  const fetchProduits = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/produits"
      );

      setProduits(res.data);
      setLoading(false);
    } catch (err) {
      setError("Erreur de chargement des produits");
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-600 ">
        Liste des Produits
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="w-full border border-gray-200 shadow-lg rounded-lg">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Nom</th>
              <th className="p-3">Description</th>
              <th className="p-3">Prix</th>
              <th className="p-3">Stock</th>
                <th className="p-3">Statut</th>
            </tr>
          </thead>
<tbody>
  {produits.map((prod) => (
    <tr key={prod.id} className="text-center border-b">
      <td className="p-2">{prod.id}</td>
      <td className="p-2">{prod.nom}</td>
      <td className="p-2">{prod.description}</td>
      <td className="p-2">{prod.prix} DH</td>
        <td className="p-2">{prod.quantite_stock}</td>
      <td className="p-2">
        {prod.quantite_stock > 0 ? (
          <span className="text-green-600 font-semibold">Disponible</span>
        ) : (
          <span className="text-red-500 font-semibold">Rupture</span>
        )}
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    // </div>
  );
}

export default MedDach;