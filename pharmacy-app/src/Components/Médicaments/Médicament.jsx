import CategoriePage from '../CategoriePage'
import medC from "../../assets/category/medC.png";


const Médicament = () => {
  return (
    <div>
     <CategoriePage bgImage={medC} title='Médicaments' Categorie={['Médicaments']}/>
    </div>
  )
}

export default Médicament
