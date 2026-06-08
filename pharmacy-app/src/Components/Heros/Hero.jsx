import Logo from "../../assets/Logo.jfif";

function Hero() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-white to-green-50 dark:from-gray-900 dark:to-gray-800 flex items-center">

      {/* CONTAINER */}
      <div className="max-w-1400px mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">

          <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
            Livraison rapide • Produits certifiés
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white">

            Votre <span className="text-green-500">pharmacie </span>  en ligne livrée 24h/24
          </h1>

          <p className="text-black-600 dark:text-gray-300 text-lg leading-relaxed max-w-600px">
            Découvrez tous vos produits de santé, beauté et bien-être
            avec une livraison rapide et un service sécurisé partout au Maroc.
          </p>

        

          {/* STATS */}
          <div className="flex gap-10 pt-6">

            <div>
              <h2 className="text-3xl font-bold text-green-500">
                24/7
              </h2>

              <p className="text-gray-600 dark:text-gray-300 ">
                Service
              </p>
            </div>



            <div>
              <h2 className="text-3xl font-bold text-green-500">
                100%
              </h2>

              <p className="text-gray-600 dark:text-gray-300">
                Sécurisé
              </p>
            </div>
          </div>
      
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center relative">

          {/* BACKGROUND EFFECT */}
          <div className="absolute w-[350px] h-[350px] bg-green-300 rounded-full blur-3xl opacity-20"></div>

          <img
            src={Logo}
            alt="Hero"
            className="relative w-full max-w-[500px] rounded-3xl shadow-2xl object-cover hover:scale-105 transition duration-500 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;