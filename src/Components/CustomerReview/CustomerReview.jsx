import { useEffect, useState } from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { AiFillStar } from "react-icons/ai";
import SwiperBtn from "../SwiperBtn/SwiperBtn";

const CustomerReview = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://fashion-den-server-q9kscegii-fahimmutashir23.vercel.app/reviews"
    )
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="pt-8">
      <h1 className="text-4xl font-semibold rounded-xl border-b-2 border-slate-900 dark:border-green-300 max-w-fit px-2 dark:text-white mx-auto mb-4">
        Customer Review
      </h1>

      <div>
        <Swiper
          modules={[Navigation, A11y]}
          loop={true}
          breakpoints={{
            425: { slidesPerView: 1, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1152: { slidesPerView: 3.5, spaceBetween: 50 },
          }}
        >
          {data?.map((oneData) => (
            <SwiperSlide key={oneData._id} className="">
              <div className="rounded-2xl">
                <div className="w-full max-w-md h-40 bg-slate-100 border border-gray-200 rounded-lg shadow sm:p-3 dark:bg-gray-800 dark:border-gray-700">
                  <div className="flow-root">
                    <li className="py-3 sm:py-4">
                      <div className="flex space-x-4">
                        <div className="">
                          <img
                            className="w-10 h-10 rounded-full"
                            src={oneData?.photo}
                            alt="Neil image"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <p>{oneData?.name}</p>
                            <p className="ml-2">{oneData?.ratings}</p>
                            <p>
                              <AiFillStar className="text-yellow-300"></AiFillStar>
                            </p>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {oneData?.short_review}
                          </p>
                        </div>
                        <div className="text-gray-900 dark:text-white"></div>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="flex justify-center mb-4">
            <SwiperBtn></SwiperBtn>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReview;
