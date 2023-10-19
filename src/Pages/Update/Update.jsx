import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const loadedData = useLoaderData();
    const {_id, name, type, price, photo, rating, brand } = loadedData

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const brand = e.target.brand.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const photo = e.target.photo.value;
        const rating = e.target.rating.value;
        const getValue = { name, brand, type, price, photo, rating }

        fetch(`http://localhost:5000/fashions/${_id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(getValue)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Successful',
                    text: 'You are successfully added My Cart',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                e.target.reset()
            }
        })
    }
    return (
        <div className="pt-7">
            <Helmet><title>Fashion Den | Update Product</title></Helmet>
            <h1 className="text-4xl font-semibold rounded-xl border-b-2 border-slate-900 dark:border-green-300 max-w-fit px-2  dark:text-white mx-auto">
          Update Product
            </h1>
            <div>
                <form onSubmit={handleSubmit} className="py-6 px-14">
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex flex-col gap-3 md:w-1/2">
                            <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="p-3 rounded-md dark:bg-slate-700 dark:text-white"/>
                            <select name="brand" className="p-3 rounded-md dark:bg-slate-700 dark:text-white">
                                <option value={brand}>{brand}</option>
                            </select>
                            <input type="text" name="type" defaultValue={type} placeholder="Product Type" className="p-3 rounded-md dark:bg-slate-700 dark:text-white"/>
                        </div>
                        <div className="flex flex-col gap-3 md:w-1/2">
                            <input type="text" name="price" defaultValue={price} placeholder="price $" className="p-3 rounded-md dark:bg-slate-700 dark:text-white"/>
                            <input type="text" name="photo" defaultValue={photo} placeholder="Image" className="p-3 rounded-md dark:bg-slate-700 dark:text-white"/>
                            <input type="text" name="rating" defaultValue={rating} placeholder="rating" className="p-3 rounded-md dark:bg-slate-700 dark:text-white"/>
                        </div>
                    </div>
                    <input type="submit" value="Update Product" className="w-full btn mt-3 dark:bg-slate-700 dark:text-green-300 border-none" />
                </form>
            </div>            
        </div>
    );
};

export default Update;