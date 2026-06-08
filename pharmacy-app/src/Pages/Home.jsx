import Hero from "../Components/Heros/Hero";
import Categorie from "../Components/Categories/Catego";
import Promotion from "../Components/Promotions/Promotion";
import Product from "../Components/Products/product";
import Avis from "../Components/AvisClients/Avis"

function Home(){

    return(
        <div>
           
            <Hero/>
            <Categorie/>
            <Promotion/>
            <Product />
            <Avis/>
          

        </div> 
    )
}
export default Home;