import { useState } from "react";
import Logo from "../assets/logo.jfif";

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé avec succès");

    setFormData({
      nom: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-b from-white to-green-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">

      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-3xl overflow-hidden w-full max-w-6xl grid md:grid-cols-2 relative">

        {/* LEFT */}
        <div className="bg-green-50 dark:bg-gray-800 flex items-center justify-center p-10 relative transition-all">

          <div className="absolute w-72 h-72 bg-white/20 dark:bg-gray-700/30 rounded-full animate-ping"></div>

          <img
            src={Logo}
            alt="logo"
            className="w-52 h-52 object-cover rounded-full shadow-2xl animate-spin"
            style={{ animationDuration: "8s" }}
          />
        </div>

        {/* RIGHT */}
        <div className="p-8 md:p-12 flex flex-col justify-center">

          <h1 className="text-4xl font-bold text-green-600 text-center">
            Contactez-nous
          </h1>

          <p className="text-center text-gray-500 dark:text-gray-300 mb-6">
            Nous sommes à votre disposition
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              value={formData.nom}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:border-green-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:border-green-500"
            />

            <textarea
              name="message"
              placeholder="Votre message..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:border-green-500 resize-none"
            />

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition"
            >
              Envoyer
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;