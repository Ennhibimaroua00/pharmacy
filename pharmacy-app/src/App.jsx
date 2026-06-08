import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Login from "./Components/Login";
import CreateAccount from "./Components/create-account";
import Dashboard from "./Pages/dachboard";
import Soin from "./Components/Soins/Soin";
import Médicament from "./Components/Médicaments/Médicament";
import MédicamentMédicale from "./Components/MédicamentMédicale/MédicamentMédicale";
import Vétérinaires from "./Components/Vétérinaires/Vétérinaires";
import Beautés from "./Components/Beautés/Beautés";
import Orthopédie from "./Components/Orthopédie/Orthopédie";
import AllProducts from "./Components/AllProducts/AllProducts";
import CommandeForm from "./Pages/CommandeForm";
import Layout from "./Pages/Layout";
import Panier from "./Pages/Panier";
import { CartProvider } from "./Pages/CartContext";
import MedDach from "./Pages/MedDach";
import CmdDach from "./Pages/CmdDach";

function App() {
  return (
    <CartProvider>
      <Routes>
         
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="médicament" element={<Médicament />} />
          <Route path="médicamentMédicale" element={<MédicamentMédicale />} />
          <Route path="vétérinaires" element={<Vétérinaires />} />
          <Route path="beautés" element={<Beautés />} />
          <Route path="soins" element={<Soin />} />
          <Route path="orthopedie" element={<Orthopédie />} />
          <Route path="AllProducts" element={<AllProducts />} />
          <Route path="commande" element={<CommandeForm />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="MedDach" element={<MedDach />} />
          <Route path="CmdDach" element={<CmdDach />} />
        </Route>

      </Routes>
    </CartProvider>
  );
}
export default App;