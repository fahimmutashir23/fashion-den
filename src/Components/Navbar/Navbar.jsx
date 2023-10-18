import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const Navbar = ({ handleTheme, theme }) => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logoutUser();
  };

  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProducts">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/cart">My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-yellow-100 dark:bg-slate-900 border-b-2 border-black dark:border-white dark:text-yellow-100">
      <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link to="/" className="dark:bg-white rounded-xl">
            <img src={logo} alt="" className="w-16" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>

        <div className="navbar-end">
          {user && (
            <div className="mr-2">
              <img src={user?.photoURL} className="rounded-full w-10 h-10" />
            </div>
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              className="btn px-5 hover:text-primary_color py-2 border-none bg-slate-900 dark:bg-green-300 rounded-md text-green-300 dark:text-slate-900"
            >
              <div className="space-y-1">
                <p>Log out</p>
                <p className="text-center">{user?.displayName}</p>
              </div>
            </button>
          ) : (
            <Link
              to="/login"
              className="btn px-5 hover:text-primary_color py-2 border-none bg-slate-900 dark:bg-green-300 rounded-md text-green-300 dark:text-slate-900"
            >
              Log in
            </Link>
          )}
          <div className="form-control">
            <label className="cursor-pointer label">
              {theme === "light" ? (
                <span className="label-text mr-3 font-semibold">dark</span>
              ) : (
                <span className="label-text mr-3 text-white font-semibold">
                  Light
                </span>
              )}

              <input
                onClick={handleTheme}
                type="checkbox"
                className="toggle toggle-primary"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  handleTheme: PropTypes.func,
  theme: PropTypes.string,
};

export default Navbar;
