import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const { _id, name, brand, type, price, photo, rating } = product;

  console.log(product);
  return (
    <div>
      <div className=" bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="">
          <img
            className="p-8 rounded-t-lg h-96 w-full"
            src={photo}
            alt="product image"
          />
        </div>
        <div className="px-5 pb-5">
          <div>
            <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Brand Name: <span className="text-blue-500 uppercase">{brand}</span>
            </h5>
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Type : <span className="text-blue-500">{type}</span>
            </h5>
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Price : <span className="text-slate-900 bg-green-300 px-2 py-1 rounded-md">{price}</span>
            </h5>
            <h5 className="flex items-center text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Ratings : <span className="text-slate-900 ml-2">{rating}</span> <AiFillStar></AiFillStar>
            </h5>
          </div>

          <div className="flex items-center justify-between">
            <Link
              to={`/details/${_id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </Link>
            <Link
              to={`/update/${_id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductsCard.propTypes = {
  product: PropTypes.object,
};

export default ProductsCard;
