import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useSwiper } from "swiper/react";

const SwiperBtn = () => {
    const swiper = useSwiper();
    return (
        <div className="mt-2">
            <button className="btn btn-circle btn-sm mr-2" onClick={()=>swiper.slidePrev()}>
                <AiOutlineArrowLeft></AiOutlineArrowLeft>
            </button>
            <button className="btn btn-circle btn-sm" onClick={()=>swiper.slideNext()}>
                <AiOutlineArrowRight></AiOutlineArrowRight>
            </button>
        </div>
    );
};

export default SwiperBtn;