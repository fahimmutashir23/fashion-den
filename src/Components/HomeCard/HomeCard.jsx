import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const HomeCard = ({ data }) => {
  const { logo, brand_name } = data;

  return (
    <Link to={`/products/${brand_name}`} data-aos= "zoom-in" className="overflow-x-hidden">
      <div>
        <div className=" bg-white border-2 border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="h-56 flex items-center justify-center">
            <img
              className="p-6 w-3/5 rounded-t-lg text-white"
              src={logo}
              alt="product image"
            />
          </div>
          <div className="px-5 pb-5">
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {brand_name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

HomeCard.propTypes = {
  data: PropTypes.object,
};

export default HomeCard;
