import ProductList from "./ProductList/ProductList";
import Cards from "./Cards/Card";
import Banner from "./Banner";
import Categorie from "./Categories/Catego";

const CategoriePage = ({ title, bgImage, Categorie = [] }) => {

  let filteredItems = Categorie.includes("All")
    ? ProductList
    : ProductList.filter((item) =>
        Categorie.includes(item.Categorie)
      );

  const renderProduct = filteredItems.map((product) => {
    return (
      <Cards
        key={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        prix={product.prix}
      />
    );
  });

  return (
    <div >
      <Banner title={title} bgImage={bgImage} />

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 py-16 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-white to-green-100 dark:bg-gray-800 dark:text-white">        {renderProduct}
      </div>
    </div>
  );
};

export default CategoriePage;