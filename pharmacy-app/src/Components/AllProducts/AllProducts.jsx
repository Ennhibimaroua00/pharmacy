import CategoriePage from '../CategoriePage'
import all from "../../assets/category/all.jpeg";

const AllProducts = () => {
  return (
    <div>
      <CategoriePage title="View All" bgImage={all}  Categorie={['All']}/>
    </div>
  )
}

export default AllProducts
