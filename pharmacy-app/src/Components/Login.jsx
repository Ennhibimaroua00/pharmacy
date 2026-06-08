import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios"; // ◄─── 1. Importi Axios hna
import Logo from "../assets/logo.jfif";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // 2. Beddelna l-logique dial handleLogin bach t-velli m7tota m3a Laravel
const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/login",
      {
        email,
        password,
      }
    );

    console.log(response.data);

    const { user, role } = response.data;

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");

    setLoading(false);

    // admin -> dashboard
    if (role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }

  } catch (err) {
    setLoading(false);

    if (err.response && err.response.data) {
      setError(
        err.response.data.message ||
        "Email ou mot de passe incorrect"
      );
    } else {
      setError("Impossible de se connecter au serveur Back-end.");
    }

    console.error(err);
  }
};

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-b from-white to-green-100 dark:from-gray-900 dark:to-gray-800 transition-all">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-3xl overflow-hidden w-full max-w-6xl grid md:grid-cols-2 relative">
        
        {/* LEFT SIDE */}
        <div className="bg-green-50 dark:bg-gray-800 flex items-center justify-center p-10 relative">
          <div className="absolute w-72 h-72 bg-white/20 dark:bg-gray-700/30 rounded-full animate-ping"></div>
          <img
            src={Logo}
            alt="logo"
            className="w-52 h-52 object-cover rounded-full shadow-2xl animate-spin"
            style={{ animationDuration: "8s" }}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-green-600 text-center">
            Login
          </h1>

          <p className="text-center text-gray-500 dark:text-gray-300 mb-6">
            Connectez-vous à votre compte
          </p>

          {/* Alert Error Style text-center */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl text-center mb-4 text-sm font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email"
              required // Zid had 'required' bach y-t-valida f front-end nishan
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:border-green-500"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:border-green-500"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-xl cursor-pointer text-gray-500 dark:text-white"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition disabled:bg-gray-400"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>

          {/* LINK */}
          <div className="text-center mt-4">
            <Link
              to="/create-account"
              className="relative font-semibold text-gray-700 dark:text-white transition hover:text-green-600
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0 after:bg-green-500
              after:transition-all after:duration-300 hover:after:w-full"
            >
              Créer un compte
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Login;