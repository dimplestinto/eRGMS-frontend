import { SiWindows } from "react-icons/si";
import { FaServicestack } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

export const SidebarCustomer = () => {
  const apiURL = "https://9488-64-226-63-220.ngrok-free.app";

  const navigator = useNavigate();

  const token = localStorage.getItem("token");

  console.log(token);

  const handleLogoutCustomer = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(apiURL + "/eRGMS/public/api/logout-customer", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setTimeout(() => {
          navigator("/");
          localStorage.clear();
          return "Account Logout";
        }, 1200);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="fixed flex flex-col py-4 px-10 bg-white w-60 h-screen items-center shadow-lg justify-between">
        <div>
          <div className="w-28 pt-0 py-2">
            <div className="font-bold flex gap-2">
              <img
                src="/public/static/images/eRgmsLogo.png"
                alt="logo"
                className="h-14"
              />
              <p className="py-4 text-xl">RGMS</p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 pt-5">
            <div className="flex gap-2 px-4 py-2 bg-primaryColor text-white font-bold rounded-lg items-center justify-start ">
              <SiWindows />
              Dashboard
            </div>
            <Link>
              <div className="flex gap-2 px-4 py-2 text-primaryColor font-bold rounded-lg items-center justify-start hover:bg-gray-100">
                <FaServicestack />
                Rental Spaces
              </div>
            </Link>
            <Link>
              <div className="flex gap-2 px-4 py-2 text-primaryColor font-bold rounded-lg items-center justify-start hover:bg-gray-100">
                <FaUser />
                Profile
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full py-5">
          <div
            onClick={handleLogoutCustomer}
            className="flex gap-2 px-4 py-2 text-primaryColor font-bold rounded-lg items-center justify-start cursor-pointer hover:bg-gray-100"
          >
            <IoIosLogOut />
            Sign Out
          </div>
        </div>
      </div>
    </>
  );
};
