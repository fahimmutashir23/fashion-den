import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible, AiOutlineGoogle } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Login = () => {
  const { signInUser, logoutUser, googleSignIn } = useContext(AuthContext);
  const [passHideOpen, setPassHideOpen] = useState(false);
  const [wrongPassword, setWrongPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          return (
            Swal.fire(
              "Log In successful",
              "Thank you to login our website",
              "success"
            ) && navigate(location?.state ? location.state : "/")
          );
        } else {
          return (
            logoutUser() &&
            Swal.fire(
              "email not verified",
              "please check email and verify",
              "error"
            )
          );
        }
      })
      .catch(() => {
        setWrongPassword("Invalid email or password");
      });
    e.target.reset();
  };

  const handleLogInWithSocial = () => {
    googleSignIn().then(() => {
      Swal.fire(
        "Log In successful",
        "Thank you to login our website",
        "success"
      );
      navigate(location?.state ? location.state : "/");
    });
  };
  return (
    <div className="">
      <div
        data-aos="zoom-in"
        className="mt-20 flex justify-center items-center">

        <div className="relative flex flex-col rounded-xl bg-slate-900 dark:bg-yellow-100 bg-clip-border text-white dark:text-slate-900 shadow-md">
          <div className="bg-primary_color rounded-t-xl">
            <h3 className="text-7xl font-semibold text-center mt-3 tracking-normal text-secondary_color">
              Sign In
            </h3>
          </div>
          <form
            onSubmit={handleSignIn}
            className="mt-8 px-6  w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="email"
                  name="email"
                  required
                  className="peer h-full w-full rounded-md border border-yellow-100 border-t-transparent bg-transparent px-3 py-3 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-100 placeholder-shown:border-t-yellow-100 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-100 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-100 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type={passHideOpen ? "text" : "password"}
                  name="password"
                  required
                  className="peer h-full w-full rounded-md border border-yellow-100 border-t-transparent bg-transparent px-3 py-3 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-100 placeholder-shown:border-t-yellow-100 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-100 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-100 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
                <div
                  onClick={() => setPassHideOpen(!passHideOpen)}
                  className="text-2xl text-gray-500 absolute right-2 top-[10px]"
                >
                  {passHideOpen ? (
                    <AiFillEyeInvisible></AiFillEyeInvisible>
                  ) : (
                    <AiFillEye></AiFillEye>
                  )}
                </div>
              </div>
            </div>
            <input
              type="submit"
              value="Login"
              className="mt-6 block w-full select-none rounded-lg bg-yellow-100 dark:bg-slate-900 py-3 px-6 text-center align-middle text-lg font-bold uppercase text-slate-900 dark:text-yellow-100 shadow-md shadow-pink-500/20 hover:cursor-pointer transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            />
            <p className="text-sm font-mono font-semibold text-red-800">
              {wrongPassword}
            </p>
            <p className="mt-4 block text-center text-base font-normal leading-relaxed dark:text-slate-900 antialiased">
              You don not have an account?
              <Link
                to="/registration"
                className="font-medium ml-2 transition-colors hover:text-white_color"
              >
                SignUp
              </Link>
            </p>
          </form>
          <div className="px-6 mb-2">
            <p className="text-center text-primary_color font-bold">
              or
            </p>
            <hr />
            <div className="mt-2 text-secondary_color flex justify-center items-center">
              <span className=" font-bold">
                Sign in with:
              </span>
              <button onClick={handleLogInWithSocial}>
                <AiOutlineGoogle className="text-3xl text-primary_color ml-5 transition-colors hover:text-white_color"></AiOutlineGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
