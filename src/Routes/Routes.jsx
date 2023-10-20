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
import Update from "../Pages/Update/Update";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            `https://fashion-den-server-d5jfcnxyw-fahimmutashir23.vercel.app/fashionsBrand`
          ),
      },
      {
        path: "/cart",
        element: (
          <PrivetRoute>
            <Cart></Cart>
          </PrivetRoute>
        ),
        loader: () =>
          fetch(
            `https://fashion-den-server-d5jfcnxyw-fahimmutashir23.vercel.app/fashionsCart`
          ),
      },
      {
        path: "/addProducts",
        element: (
          <PrivetRoute>
            <AddProducts></AddProducts>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/products/:brand",
        element: <Products></Products>,
        loader: () =>
          fetch(
            `https://fashion-den-server-d5jfcnxyw-fahimmutashir23.vercel.app/fashions`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <Details></Details>
          </PrivetRoute>
        ),
        loader: () =>
          fetch(
            `https://fashion-den-server-d5jfcnxyw-fahimmutashir23.vercel.app/fashions`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <Update></Update>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://fashion-den-server-d5jfcnxyw-fahimmutashir23.vercel.app/fashions/${params.id}`
          ),
      },
    ],
  },
]);

export default Routes;
