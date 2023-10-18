import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const loadedData = useLoaderData();
  const detailsId = useParams();
  const [details, setDetails] = useState([]);
  console.log(details);

  useEffect(() => {
    const findData = loadedData?.find((data) => data._id === detailsId.id);
    setDetails(findData);
  }, [loadedData, detailsId]);

  return (
    <div className="py-8">
      <h1 className="text-center font-semibold text-2xl dark:text-green-300 mb-5">{details.name}</h1>
      <div>
        <div className="card lg:card-side bg-base-100 dark:bg-gray-800 shadow-xl">
          <figure>
            <img
              src={details.photo}
              alt="Album"
              className="md:rounded-l-2xl ml-2"
            />
          </figure>
          <div className="card-body">
            <div>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Brand Name: <span className="text-blue-500 uppercase">{details.brand}</span>
            </h5>
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Type : <span className="text-blue-500">{details.type}</span>
            </h5>
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Price : <span className="text-slate-900 bg-green-300 px-2 py-1 rounded-md">{details.price}</span>
            </h5>
            <h5 className="flex items-center text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Ratings : <span className="text-slate-900 ml-2">{details.rating}</span> <AiFillStar></AiFillStar>
            </h5>
          </div>
          <div className="h-32">
            <h5 className=" text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Descriptions : <span className="text-slate-900 ml-2 dark:text-white">{details.description}</span>
            </h5>
          </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
