import { useEffect, useState } from "react";
import axios from "axios";

function Commandes() {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    fetchCommandes();
  }, []);

  const fetchCommandes = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/commandes");
    setCommandes(res.data);
  };
const accepter = async (id) => {
  try {
    await axios.put(
      `http://127.0.0.1:8000/api/commandes/${id}`,
      {
        status: "acceptée",
      }
    );

    alert("✅ Commande acceptée");
    fetchCommandes();

  } catch (error) {
    console.error(error);
  }
};

const refuser = async (id) => {
  try {
    await axios.put(
      `http://127.0.0.1:8000/api/commandes/${id}`,
      {
        status: "refusée",
      }
    );

    alert("❌ Commande refusée");
    fetchCommandes();

  } catch (error) {
    console.error(error);
  }
};
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-600 mb-6">
        Liste des Commandes
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border shadow rounded-lg">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">user_id</th>
              <th className="p-3">total</th>
              <th className="p-3">Statut</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {commandes.map((cmd) => (
              <tr key={cmd.id} className="text-center border-b">
                <td className="p-2">{cmd.id}</td>
                <td className="p-2">{cmd.user_id}</td>
                <td className="p-2">{cmd.total}</td>
        

                <td className="p-2">
                  <span
                    className={
                      cmd.status === "acceptée"
                        ? "text-green-600 font-bold"
                        : cmd.status === "refusée"
                        ? "text-red-500 font-bold"
                        : "text-yellow-500 font-bold"
                    }
                  >
                    {cmd.statut}
                  </span>
                </td>

                <td className="p-2 flex gap-2 justify-center">
                  <button
                    onClick={() => accepter(cmd.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Accepter
                  </button>

                  <button
                    onClick={() => refuser(cmd.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Refuser
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Commandes;