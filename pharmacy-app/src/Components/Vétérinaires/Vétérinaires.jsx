import React from 'react'
import CategoriePage from '../CategoriePage'
import veteC from "../../assets/category/veteC.png";

const Vétérinaires = () => {
  return (
    <div>
      <CategoriePage title="Vétérinaires" bgImage={veteC} Categorie={['Vétérinaires']}/>
    </div>
  )
}

export default Vétérinaires
