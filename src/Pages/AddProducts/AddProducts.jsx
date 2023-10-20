import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddProducts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const photo = e.target.photo.value;
    const rating = e.target.rating.value;
    const description = e.target.description.value;
    const getValue = { name, brand, type, price, photo, rating, description };

    fetch(
      "https://fashion-den-server-d5jfcnxyw-fahimmutashir23.vercel.app/fashions",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(getValue),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Successful",
            text: "You are successfully added this product",
            icon: "success",
            confirmButtonText: "Cool",
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className="pt-7">
      <Helmet>
        <title>Fashion Den | Add Products</title>
      </Helmet>
      <h1 className="text-4xl font-semibold rounded-xl border-b-2 border-slate-900 dark:border-green-300 max-w-fit px-2  dark:text-white mx-auto">
        Add Products
      </h1>
      <div>
        <form onSubmit={handleSubmit} className="py-6 px-14">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex flex-col gap-3 md:w-1/2">
              <input
                type="text"
                required
                name="name"
                placeholder="Product Name"
                className="p-3 rounded-md dark:bg-slate-700 dark:text-white"
              />
              <select
                name="brand"
                required
                className="p-3 rounded-md dark:bg-slate-700 dark:text-white"
              >
                <option>Select Brand</option>
                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
                <option value="lotto">Lotto</option>
                <option value="puma">Puma</option>
                <option value="burberry">Burberry</option>
                <option value="armani">Armani</option>
              </select>
              <input
                type="text"
                required
                name="type"
                placeholder="Product Type"
                className="p-3 rounded-md dark:bg-slate-700 dark:text-white"
              />
              <input
                type="text"
                required
                name="price"
                placeholder="price $"
                className="p-3 rounded-md dark:bg-slate-700 dark:text-white"
              />
            </div>
            <div className="flex flex-col gap-3 md:w-1/2">
              <input
                type="text"
                required
                name="photo"
                placeholder="Image"
                className="p-3 rounded-md dark:bg-slate-700 dark:text-white"
              />
              <input
                type="text"
                required
                name="rating"
                placeholder="rating"
                className="p-3 rounded-md dark:bg-slate-700 dark:text-white"
              />
              <textarea
                name="description"
                required
                placeholder="Short Description"
                cols="30"
                rows="4"
                className="p-2 rounded-md dark:bg-slate-700 dark:text-white"
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="w-full btn mt-3 dark:bg-slate-700 dark:text-green-300 border-none"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
