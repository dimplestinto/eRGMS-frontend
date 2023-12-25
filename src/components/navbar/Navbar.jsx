import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 w-full flex flex-wrap items-center justify-between h-[60px] px-10 drop-shadow-lg bg-white">
        <div>
          <img src="/static/icons/Logo.png" alt="Logo" className="w-[100px]" />
        </div>
        {/* <ul className="flex gap-10 items-center justify-center ">
          <li>
            <a href="#" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <Link to="/services">
          <li>
            <a href="#services" className="hover:text-yellow-500">
              Services
            </a>
          </li>
          </Link>
          <Link to="/about">
            <li>
              <a href="#about" className="hover:text-yellow-500">
                About
              </a>
            </li>
          </Link>
        </ul> */}
          <Link to="/login-customer">
            <div className="bg-primaryColor py-2 px-10 rounded-lg hover:bg-opacity-85 font-bold text-white">
              Login
            </div>
          </Link>
      </div>
    </>
  );
};
