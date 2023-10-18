import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="p-10 bg-neutral text-neutral-content">
      <footer className="footer md:flex justify-evenly items-center max-w-6xl mx-auto">
        <div className="md:w-1/3">
          <img src={logo} alt="" className="w-1/4" />
          <p className="text-xl">
            Fashions Den
            <br />
            <span className="text-sm">Providing reliable tech since 1992</span>
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center gap-16">
          <nav className="flex flex-col items-center gap-2">
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col items-center gap-2">
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
        </div>

        <nav className="md:w-1/3 flex flex-col md:items-end">
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a>
              <AiFillFacebook className="text-4xl"></AiFillFacebook>
            </a>
            <a>
              <AiFillYoutube className="text-4xl"></AiFillYoutube>
            </a>
            <a>
              <AiFillTwitterSquare className="text-4xl"></AiFillTwitterSquare>
            </a>
          </div>
        </nav>
      </footer>
      <p className="text-center mt-5">Copyright © 2023 - All right reserved by Fashions Den</p>
    </div>
  );
};

export default Footer;
