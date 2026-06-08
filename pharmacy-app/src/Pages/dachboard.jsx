import {
  LayoutDashboard,
  Pill,
  Users,
  ShoppingCart,
  Package,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white p-5">
        <h1 className="text-2xl font-bold mb-8">Pharmacie Admin</h1>

        <nav className="space-y-4">
          <a
            href=""
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-600 transition"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </a>

          <Link
            to="/MedDach"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-600 transition"
          >
            <Pill size={20} />
            Médicaments
          </Link>

          <Link
            to="/CmdDach"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-600 transition"
          >
            <ShoppingCart size={20} />
            Commandes
          </Link>

          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-600 transition"
          >
            <Users size={20} />
            Clients
          </a>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">
          Dashboard Pharmacie
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Médicaments</p>
                <h3 className="text-2xl font-bold">71</h3>
              </div>
              <Pill className="text-green-600" size={35} />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Clients</p>
                <h3 className="text-2xl font-bold">120</h3>
              </div>
              <Users className="text-blue-600" size={35} />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Commandes</p>
                <h3 className="text-2xl font-bold">80</h3>
              </div>
              <ShoppingCart className="text-orange-500" size={35} />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Stock faible</p>
                <h3 className="text-2xl font-bold">15</h3>
              </div>
              <AlertTriangle className="text-red-500" size={35} />
            </div>
          </div>
        </div>

        {/* Table médicaments */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">
            Liste des Médicaments
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-100 text-left">
                  <th className="p-3">Nom</th>
                  <th className="p-3">Catégorie</th>
                  <th className="p-3">Prix</th>
                  <th className="p-3">Stock</th>
                  <th className="p-3">Statut</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Doliprane</td>
                  <td className="p-3">Médicament</td>
                  <td className="p-3">50 DH</td>
                  <td className="p-3">25</td>
                  <td className="p-3 text-green-600 font-semibold">
                    Disponible
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Paracétamol</td>
                  <td className="p-3">Médicament</td>
                  <td className="p-3">35 DH</td>
                  <td className="p-3">10</td>
                  <td className="p-3 text-yellow-500 font-semibold">
                    Faible
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="p-3">Amoxicilline</td>
                  <td className="p-3">Médicament</td>
                  <td className="p-3">80 DH</td>
                  <td className="p-3">0</td>
                  <td className="p-3 text-red-500 font-semibold">
                    Rupture
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;