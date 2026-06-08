// import { useState } from "react";

// function UserList() {
//   const [orders] = useState([
//     {
//       id: 1,
//       nom: "Aicha Benali",
//       produit: "Paracétamol",
//       quantite: 2,
//       prixUnitaire: 20,
//       statut: "Livré",
//     },
//     {
//       id: 2,
//       nom: "Youssef El Amrani",
//       produit: "Vitamine C",
//       quantite: 3,
//       prixUnitaire: 15,
//       statut: "En cours",
//     },
//     {
//       id: 3,
//       nom: "Sara Fathi",
//       produit: "Sirop Toux",
//       quantite: 1,
//       prixUnitaire: 35,
//       statut: "En attente",
//     },
//   ]);

//   const getStatusColor = (statut) => {
//     switch (statut) {
//       case "Livré":
//         return "bg-green-500";
//       case "En cours":
//         return "bg-yellow-500";
//       case "En attente":
//         return "bg-red-500";
//       default:
//         return "bg-gray-400";
//     }
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-white to-green-100 dark:from-gray-900 dark:to-gray-800 p-6">

//       <h1 className="text-3xl font-bold text-center text-green-600 dark:text-green-400 mb-8">
//         Liste des commandes
//       </h1>

//       <div className="max-w-6xl mx-auto overflow-x-auto">

//         <table className="w-full bg-white dark:bg-gray-900 shadow-xl rounded-xl overflow-hidden">

//           {/* HEADER */}
//           <thead className="bg-green-500 text-white">
//             <tr>
//               <th className="p-3 text-left">Nom complet</th>
//               <th className="p-3 text-left">Produit</th>
//               <th className="p-3 text-left">Quantité</th>
//               <th className="p-3 text-left">Prix total</th>
//               <th className="p-3 text-left">Statut</th>
//             </tr>
//           </thead>

//           {/* BODY */}
//           <tbody>
//             {orders.map((order) => (
//               <tr
//                 key={order.id}
//                 className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
//               >
//                 <td className="p-3 text-gray-800 dark:text-white">
//                   {order.nom}
//                 </td>

//                 <td className="p-3 text-gray-800 dark:text-white">
//                   {order.produit}
//                 </td>

//                 <td className="p-3 text-gray-800 dark:text-white">
//                   {order.quantite}
//                 </td>

//                 <td className="p-3 text-gray-800 dark:text-white">
//                   {order.quantite * order.prixUnitaire} DH
//                 </td>

//                 <td className="p-3">
//                   <span
//                     className={`text-white px-3 py-1 rounded-full text-sm ${getStatusColor(
//                       order.statut
//                     )}`}
//                   >
//                     {order.statut}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>

//         </table>

//       </div>
//     </section>
//   );
// }

// export default UserList;