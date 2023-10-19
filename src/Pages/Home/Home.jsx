import { useLoaderData } from "react-router-dom";
import HomeCard from "../../Components/HomeCard/HomeCard";
import Banner from "../../Components/Banner/Banner";
import BecomeAMember from "../../Components/BecomeAMember/BecomeAmember";

const Home = () => {
  const loadedData = useLoaderData();
  return (
    <div>
        <Banner></Banner>
      <div className="pt-10">
        <h1 className="text-4xl font-semibold rounded-xl border-b-2 border-slate-900 dark:border-green-300 max-w-fit px-2  dark:text-white mx-auto">
          Fashion Brands
        </h1>
        <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-4 py-6">
          {loadedData?.map((data) => (
            <HomeCard key={data.id} data={data}></HomeCard>
          ))}
        </div>
      </div>
      <BecomeAMember></BecomeAMember>
    </div>
  );
};

export default Home;
