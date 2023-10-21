import { useContext } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/Provider";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const loadedData = useLoaderData();
  const filteredData = loadedData.filter((item) => item.email === user.email);
  const [data, setData] = useState(filteredData);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
        fetch(
          `https://fashion-den-server-o5dkrww4y-fahimmutashir23.vercel.app/fashionsCart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount) {
              Swal.fire({
                title: "Successful",
                text: "You are successfully added My Cart",
                icon: "success",
                confirmButtonText: "Cool",
              });
              const remaining = data?.filter((item) => item._id !== id);
              setData(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="py-8 md:pb-32">
      <Helmet>
        <title>Fashion Den | Cart</title>
      </Helmet>
      <h1 className="text-4xl font-semibold rounded-xl border-b-2 border-slate-900 dark:border-green-300 max-w-fit px-2  dark:text-white mx-auto mb-5">
        My Cart
      </h1>
      <h1 className="text-center dark:text-white">
        {data.length > 0 ? "" : "You have no Cart Product."}
      </h1>
      <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((item) => (
          <div key={item._id} data-aos="zoom-in" className="overflow-x-hidden">
            <div>
              <div className=" bg-white border-2 border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="mb-4 flex items-center justify-center">
                  <img
                    className="p-6 rounded-t-lg h-56"
                    src={item.photo}
                    alt="product image"
                  />
                </div>
                <div className="px-5 pb-5">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {item.name}
                    </div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.brand}
                    </div>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="px-3 py-2 bg-green-300 dark:bg-slate-300 rounded-md"
                    >
                      Delete Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
