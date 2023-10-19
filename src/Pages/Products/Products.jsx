import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import slider_1 from "../../assets/slider_1.jpg"
import slider_2 from "../../assets/slider_2.jpg"
import slider_3 from "../../assets/slider_3.jpg"
import slider_4 from "../../assets/slider_4.jpg"
import slider_5 from "../../assets/slider_5.jpg"
import slider_6 from "../../assets/slider_6.jpg"
import slider_7 from "../../assets/slider_7.jpg"
import slider_8 from "../../assets/slider_8.jpg"
import { Helmet } from "react-helmet-async";

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
      <Helmet><title>Fashion Den | Products</title></Helmet>
      <div>
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          loop={true}
          autoplay = {{delay: 1500}}
          breakpoints={{
            425: { slidesPerView: 1, spaceBetween: 5 },
            768: { slidesPerView: 1, spaceBetween: 10 },
            1152: { slidesPerView: 1, spaceBetween: 10 }
          }}
        >
          <SwiperSlide>
          <img src={slider_8} className="w-full h-96 border-2 border-black" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={slider_7} className="w-full h-96 border-2 border-black" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={slider_3} className="w-full h-96 border-2 border-black" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={slider_4} className="w-full h-96 border-2 border-black" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={slider_5} className="w-full h-96 border-2 border-black" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={slider_6} className="w-full h-96 border-2 border-black" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={slider_2} className="w-full h-96 border-2 border-black" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={slider_1} className="w-full h-96 border-2 border-black" />
          </SwiperSlide>
        </Swiper>
      </div>

      <h1 className="text-4xl font-semibold rounded-xl border-b-2 border-slate-900 dark:border-green-300 max-w-fit px-2  dark:text-white mx-auto my-5">
        Our Products
      </h1>
      <h1 className="text-center dark:text-white">
        {products.length > 0 ? "" : "Sorry! We have no available Product now"}
      </h1>

      <div className="md:grid grid-cols-2 gap-6">
        {products?.map((product, idx) => (
          <ProductsCard key={idx} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
