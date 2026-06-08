import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.jfif";
import { FiLogOut } from "react-icons/fi";
import axios from "axios";
import { CartContext } from "../../Pages/CartContext";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
        const [openCat, setOpenCat] = useState(false);
  const navigate = useNavigate();
   const [search, setSearch] = useState("");
  const [produits , setProduits] = useState([]);
  const filteredProduits = produits.filter((item) =>
    item.nom.toLowerCase().includes(search.toLowerCase())
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const { addToCart } = useContext(CartContext);
  const addToPanier = (product) => {
    addToCart(product);
    alert(`${product.nom} ajouté au panier !`);
};
  const { cart } = useContext(CartContext);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const handleLogout = async () => {
    try {
      if (token) {
        await axios.post("http://127.0.0.1:8000/api/logout", {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    } catch (err) {
      console.error("Erreur déconnexion serveur:", err);
    }

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setOpen(false);
    navigate("/login");
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
   const fetchProduits = async () => {
  if (search.trim() !== "") {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/chercher?query=${search}`
      );

      setProduits(response.data);
      console.log(response.data);
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  } else {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/produits"
      );

      setProduits(response.data);
    } catch (err) {
      console.error(err);
    }
  }
    };
  const delayDebounceFn = setTimeout(() => {
    fetchProduits();
  }, 300);

  return () => clearTimeout(delayDebounceFn);
}, ([search],[darkMode]));
  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-xl border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex justify-between items-center transition duration-300">

      {/* LOGO */}
      <div className="flex items-center gap-3">
        <img
          src={Logo}
          alt="Logo"
          className="w-12 h-12 rounded-full object-cover border-2 border-green-500 shadow-md"
        />
        <h1 className="font-bold tracking-wide text-2xl text-green-600 dark:text-white">
          Pharmacie
        </h1>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 dark:text-white">
        <Link
          to="/"
          className="relative hover:text-green-600 transition font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all hover:after:w-full"
        >
          Accueil
        </Link>

        {/* DROPDOWN CATEGORIE */}
        <div className="relative group">
          <button className="flex items-center gap-1 relative  hover:text-green-600 transition font-semibold">
            Catégorie
          </button>
          {/* MEGA MENU */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 hidden  group-hover:flex flex-col gap-4 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 z-50 w-[260px] border border-gray-100 dark:border-gray-700">
            <Link to="/medicaments" className="hover:text-green-600 transition dark:text-white">Médicaments</Link>
            <Link to="/soins" className="hover:text-green-600 transition dark:text-white">Soins</Link>
            <Link to="/beaute" className="hover:text-green-600 transition dark:text-white">Beauté</Link>
            <Link to="/veterinaires" className="hover:text-green-600 transition dark:text-white">Vétérinaires</Link>
            <Link to="/materiel-medical" className="hover:text-green-600 transition dark:text-white">Matériel médical</Link>
            <Link to="/orthopedie" className="hover:text-green-600 transition dark:text-white">Orthopédie</Link>
          </div>
        </div>

        <Link
          to="/contact"
          className="relative hover:text-green-600 transition font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all hover:after:w-full"
        >
          Contacter-Nous
        </Link>
      </div>

      {/* SEARCH DESKTOP */}

<div className="hidden lg:flex relative items-center">
  <input
    type="text"
    placeholder="Rechercher un produit..."
    className="w-72 border border-green-300 bg-white dark:bg-gray-800 dark:text-white rounded-full py-2 pl-11 pr-4 outline-none focus:ring-2 focus:ring-green-400 transition"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <button className="absolute left-3 text-green-500 dark:text-white">
    <Search size={18} />
  </button>

  {search.length > 0 && (
  <div className="absolute top-14 left-0 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto">

    {filteredProduits.length > 0 ? (
      filteredProduits.map((item) => (
        <div
          key={item.id}
          className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-700 flex justify-between items-center"
        >
          {/* Infos produit */}
          <div>
            <span className="font-medium dark:text-white block">
              {item.nom}
            </span>

            <span className="text-green-600 text-sm">
              {item.prix} DH
            </span>
          </div>

          {/* Button panier */}
          <button
            onClick={() => addToPanier(item)}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm transition cursor-pointer"
          >
            Add to panier
          </button>
        </div>
      ))
    ) : (
      <div className="p-4 text-gray-500 text-center">
        Aucun produit trouvé
      </div>
    )}
  </div>
)}
</div>

      {/* ICONS DESKTOP */}
      <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-white">
        
        {/* CONDITION AUTH DESKTOP */}
        {isLoggedIn && user?.name ? (
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <User size={20} className="text-green-600 dark:text-green-400" />
              <span className="text-xs font-semibold text-green-600 dark:text-green-400 max-w-[80px] truncate">  {user.name.split(" ")[0]}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-600 flex items-center gap-1 font-semibold text-sm transition"
            >
              <FiLogOut size={16} />
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="flex flex-col items-center group">
            <User className="group-hover:scale-110 group-hover:text-green-600 transition" size={22} />
            <span className="text-xs group-hover:text-green-600 transition">Connexion</span>
          </Link>
        )}

        {/* PANIER DESKTOP */}
        <Link to="/panier" className="flex flex-col items-center relative group">
          <ShoppingCart className="group-hover:scale-110 group-hover:text-green-600 transition" size={22} />
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 rounded-full font-bold">
            {/* {getCartCount()} */}
          </span>
          <span className="text-xs group-hover:text-green-600 transition">Panier</span>
        </Link>
      </div>

      {/* DARK MODE DESKTOP */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="hidden md:flex items-center justify-center p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:scale-110 transition"
      >
        {darkMode ? <Sun className="text-yellow-400" size={20} /> : <Moon className="text-gray-700 dark:text-white" size={20} />}
      </button>

      {/* MOBILE BUTTONS */}
      <div className="flex items-center gap-3 md:hidden">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 transition"
        >
          {darkMode ? <Sun className="text-yellow-400" size={20} /> : <Moon className="text-gray-700 dark:text-white" size={20} />}
        </button>
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="text-gray-700 dark:text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div className="absolute top-full left-0 w-full min-h-screen bg-white dark:bg-gray-900 shadow-md flex flex-col items-center text-center gap-6 py-8 px-6 md:hidden z-50 transition-all duration-300">

          {/* SEARCH MOBILE */}
          <div className="relative w-full max-w-[320px] mx-auto">

            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full border border-green-300 bg-white dark:bg-gray-800 dark:text-white rounded-full py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-green-400"
            />

            <Search
              className="absolute left-3 top-2.5 text-green-500 dark:text-white"
              size={18}
            />

          </div>

          {/* HOME */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-gray-700 dark:text-white hover:text-green-600 transition"
          >
            Accueil
          </Link>

          {/* MOBILE CATEGORY */}
          <div className="w-full flex flex-col items-center">

            <button
              onClick={() => setOpenCat(!openCat)}
              className="flex items-center gap-2 text-gray-700 dark:text-white hover:text-green-600 transition"
            >

              Catégorie


            </button>

            {openCat && (
              <div className="flex flex-col items-center gap-3 mt-4">

                <Link
                  to="/medicaments"
                  onClick={() => setOpen(false)}
                  className="text-gray-700 dark:text-white hover:text-green-600 transition"
                >
                  Médicaments
                </Link>

                <Link
                  to="/soins"
                  onClick={() => setOpen(false)}
                  className="text-gray-700 dark:text-white hover:text-green-600 transition"
                >
                  Soins
                </Link>

                <Link
                  to="/beaute"
                  onClick={() => setOpen(false)}
                  className="text-gray-700 dark:text-white hover:text-green-600 transition"
                >
                  Beauté
                </Link>

                <Link
                  to="/veterinaires"
                  onClick={() => setOpen(false)}
                  className="text-gray-700 dark:text-white hover:text-green-600 transition"
                >
                  Vétérinaires
                </Link>

                <Link
                  to="/materiel-medical"
                  onClick={() => setOpen(false)}
                  className="text-gray-700 dark:text-white hover:text-green-600 transition"
                >
                  Matériel médical
                </Link>

                <Link
                  to="/orthopedie"
                  onClick={() => setOpen(false)}
                  className="text-gray-700 dark:text-white hover:text-green-600 transition"
                >
                  Orthopédie
                </Link>

              </div>
            )}

          </div>

          {/* CONTACT */}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-gray-700 dark:text-white hover:text-green-600 transition"
          >
            Contacter-Nous
          </Link>

          {/* COMPTE */}
          <Link
            to="/Compte"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-gray-700 dark:text-white hover:text-green-600 transition"
          >

            <User size={18} />
            Compte

          </Link>

     


          {/* PANIER */}
          <Link
            to="/panier"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 relative text-gray-700 dark:text-white hover:text-green-600 transition"
          >

            <ShoppingCart size={18} />

            Panier

            <span className="absolute -top-2 left-16 bg-green-500 text-white text-xs px-1 rounded-full">
              2
            </span>

          </Link>

        </div>
      )}
</nav>
  );
}



export default Navbar;