import Logo from "../../assets/logo.jfif";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

import { Link } from "react-router-dom";

function Footer() {
  const [openCat, setOpenCat] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-white-200 to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-19 pb-7 ">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img
              src={Logo}
              alt="Logo"
              className="w-14 h-14 rounded-full object-cover border-2 border-green-500 shadow-lg"
            />
            <h1 className="text-2xl sm:text-3xl font-bold text-green-500">
              Pharmacie
            </h1>
          </div>

          <p className="text-gray-600 dark:text-gray-400 leading-7 text-sm sm:text-base">
            Découvrez les meilleurs produits de beauté, soins et matériel médical avec qualité et confiance.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h2 className="text-xl font-semibold mb-5 text-green-500">
            Liens
          </h2>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400">

            <li>
              <Link to="/" className="hover:text-green-500 font-bold transition">
                Accueil
              </Link>
            </li>

            {/* CATEGORY */}
            <li>
              <div
                onClick={() => setOpenCat(!openCat)}
                className="flex justify-between items-center cursor-pointer hover:text-green-500 transition font-bold"
              >
                Catégorie 
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openCat ? "max-h-60 mt-3" : "max-h-0"
                }`}
              >
                <ul className="ml-4 space-y-2 text-sm">

                  <li>
                    <Link to="/médicament" className="hover:text-green-500">
                      Médicaments
                    </Link>
                  </li>

                  <li>
                    <Link to="/MédicamentMédicale" className="hover:text-green-500">
                      Matériel médical
                    </Link>
                  </li>

                  <li>
                    <Link to="/soins" className="hover:text-green-500">
                      Soins
                    </Link>
                  </li>

                  <li>
                    <Link to="/Vétérinaires" className="hover:text-green-500">
                      Vétérinaires
                    </Link>
                  </li>

                  <li>
                    <Link to="/orthopedie" className="hover:text-green-500">
                      Orthopédie
                    </Link>
                  </li>

                  <li>
                    <Link to="/Beautés" className="hover:text-green-500">
                      Beauté
                    </Link>
                  </li>

                </ul>
              </div>
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-xl font-semibold mb-5 text-green-500">
            Contactez-Nous
          </h2>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            <li>
              <span className="font-semibold text-gray-800 dark:text-white">
                Location:
              </span>{" "}
              Salé, Maroc
            </li>

            <li>
              <span className="font-semibold text-gray-800 dark:text-white">
                Téléphone:
              </span>{" "}
              05 10 55 70 60
            </li>

            <li>
              <span className="font-semibold text-gray-800 dark:text-white">
                Email:
              </span>{" "}
              Pharmacie@gmail.com
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h2 className="text-xl font-semibold mb-5 text-green-500">
            Réseaux
          </h2>

          <div className="flex gap-4 flex-wrap">

            <a href="#" className="w-12 h-12 rounded-full dark:bg-gray-700 hover:bg-blue-500 hover:text-white flex items-center justify-center transition hover:scale-110">
              <FaFacebookF size={20} />
            </a>

            <a href="#" className="w-12 h-12 rounded-full dark:bg-gray-700 hover:bg-pink-500 hover:text-white flex items-center justify-center transition hover:scale-110">
              <FaInstagram size={20} />
            </a>

            <a href="#" className="w-12 h-12 rounded-full dark:bg-gray-700 hover:bg-green-500 hover:text-white flex items-center justify-center transition hover:scale-110">
              <FaWhatsapp size={20} />
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm text-gray-600 dark:text-gray-400 px-4">
        © 2026 PHARMACIE - Tous droits réservés
      </div>

    </footer>
  );
}

export default Footer;