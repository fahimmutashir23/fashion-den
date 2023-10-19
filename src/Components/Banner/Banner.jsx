import banner from "../../assets/Banner.jpg";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div className="pt-4">
      <div
        className="hero h-96 rounded-lg"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-20 rounded-lg"></div>
        <div className="">
          <div className="max-w-sm md:max-w-4xl mt-56 md:ml-7 text-2xl">
            <Marquee style={{backgroundColor: '#FAF3F0', padding: '5px', borderRadius: '5px'}}>
              <p>Elevate Your Style with Fashion Den.</p>
              <p className="mx-5">Discover the Latest Trends and Timeless Classics.</p>
              <p>Shop the Perfect Look for Every Occasion.</p>
              <p className="mx-5">Explore Our Exclusive Collection Today.</p>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
