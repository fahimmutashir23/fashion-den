import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";

const Products = () => {
  const loadedData = useLoaderData();
  const brandName = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredData = loadedData?.filter(
      (data) => data.brand === brandName.brand.toLowerCase()
    );
    setProducts(filteredData);
  }, [loadedData, brandName.brand]);

  return (
    <div className="py-8 md:pb-32">
      <h1 className="text-4xl font-semibold rounded-xl border-b-2 border-slate-900 dark:border-green-300 max-w-fit px-2  dark:text-white mx-auto mb-5">
        Our Products
      </h1>
      <h1 className="text-center dark:text-white">
            {
                products.length > 0 ? "" : "Sorry! We have no available Product now"
            }
        </h1>

      <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product, idx) => (
          <ProductsCard key={idx} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
