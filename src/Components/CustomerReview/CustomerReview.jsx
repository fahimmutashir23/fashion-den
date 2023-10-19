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
    fetch("http://localhost:5000/reviews")
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
            <SwiperSlide key={oneData._id} className="p-2">
              <div className="rounded-2xl relative">

                <div className="flex flex-col rounded-xl bg-white dark:bg-gray-800 dark:text-green-300 shadow-md hover:scale-[1.05] transition 1s max-w-min px-1">

                  <div className="mx-auto mt-2 h-52 w-64 overflow-hidden rounded-xl shadow-lg ">
                    <img src={oneData?.photo} className="h-60 w-64" />
                  </div>
                  <div className="py-2 text-center">
                    <h4 className="mb-2 text-2xl font-semibold ">
                      {oneData?.name}
                    </h4>
                    <div className=" font-medium h-24">
                      <p className="text-base px-1">
                        {oneData?.short_review}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-card">
                          Ratings : {oneData?.ratings}
                        </p>
                        <p>
                          <AiFillStar className="text-yellow-300"></AiFillStar>
                        </p>
                      </div>
                    </div>
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
