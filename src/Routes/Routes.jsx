import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/AddCart/Cart";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Products from "../Pages/Products/Products";
import Details from "../Pages/Details/Details";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/fashionsBrand`)
            },
            {
                path: "/cart",
                element: <Cart></Cart>,
                loader: () => fetch(`http://localhost:5000/fashionsCart`)
            },
            {
                path: "/addProducts",
                element:<AddProducts></AddProducts>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/products/:brand",
                element: <Products></Products>,
                loader: () => fetch(`http://localhost:5000/fashions`)
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: () => fetch(`http://localhost:5000/fashions`)
            }
        ]
    }
])

export default Routes;