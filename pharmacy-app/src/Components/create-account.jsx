import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios"; // ◄─── 1. Importi Axios hna

function CreateAccount() {
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    age: "",
    pays: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isStrongPassword = (pass) => pass.length >= 6;

  // 2. Radd handleSubit m9adda m3a Axios o async/catch
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    if (!isStrongPassword(form.password)) {
      return setError("Password must be at least 6 characters");
    }

    setLoading(true);

    try {
      // Hna kankhadmo b l-route dial Laravel /api/register
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        // N-la7mo Nom o Prénom f 'name' b7al standard dial Laravel
        name: `${form.prenom} ${form.nom}`, 
        email: form.email,
        password: form.password,
        password_confirmation: form.confirmPassword // ◄── Laravel Sanctum kay-bghih hka exact
      });

      // Melli dâz register s7i7, Laravel kay-rj3 Token o User
      const { token, user } = response.data;

      // 💾 Khbi l-Token o l-User f localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", "true");

      setLoading(false);
      
      // Redirection direct l Login aw l l-Page d'accueil
      navigate("/login");

    } catch (err) {
      setLoading(false);
      
      // Affichage dial l-errors ila kân email déjà existant f database misalnya
      if (err.response && err.response.data && err.response.data.errors) {
        const backendErrors = err.response.data.errors;
        // Jib l-error l-lowla li l9aha Laravel
        const firstErrorKey = Object.keys(backendErrors)[0];
        setError(backendErrors[firstErrorKey][0]);
      } else if (err.response && err.response.data) {
        setError(err.response.data.message || "Une erreur est survenue.");
      } else {
        setError("Impossible de contacter le serveur Back-end.");
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-green-100 dark:from-gray-900 dark:to-gray-800 px-4 transition-all">
      <div className="w-full max-w-5xl bg-green-50 dark:bg-gray-900 shadow-2xl rounded-3xl p-8">
        
        <h1 className="text-3xl font-bold text-center text-green-500 mb-8">
          Create Account
        </h1>

        {error && (
          <p className="bg-red-50 border border-red-200 text-red-500 text-center p-3 rounded-xl mb-4 text-sm font-medium">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <input
            name="nom"
            required
            placeholder="Nom"
            onChange={handleChange}
            className="p-3 border border-green-500 rounded-xl dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />

          <input
            name="prenom"
            required
            placeholder="Prénom"
            onChange={handleChange}
            className="p-3 border border-green-500 rounded-xl dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />

          <input
            name="age"
            placeholder="Âge"
            onChange={handleChange}
            className="p-3 border border-green-500 rounded-xl dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />

          <select
            name="pays"
            onChange={handleChange}
            className="p-3 border border-green-500 rounded-xl dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            <option value="">Pays</option>
            <option>Maroc</option>
            <option>France</option>
            <option>Spain</option>
            <option>USA</option>
          </select>

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            onChange={handleChange}
            className="p-3 border border-green-500 rounded-xl md:col-span-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />

          {/* PASSWORD */}
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              required
              placeholder="Password"
              onChange={handleChange}
              className="w-full p-3 border border-green-500 rounded-xl dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-3 cursor-pointer text-gray-600 dark:text-white"
            >
              {showPass ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              required
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full p-3 border border-green-500 rounded-xl dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-3 cursor-pointer text-gray-600 dark:text-white"
            >
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition disabled:bg-gray-400"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="md:col-span-2 border border-green-500 text-green-600 py-3 rounded-xl hover:bg-green-50 dark:hover:bg-gray-800"
          >
            Déjà compte ? Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateAccount;