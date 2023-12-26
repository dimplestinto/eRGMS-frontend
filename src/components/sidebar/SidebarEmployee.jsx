import { SiWindows } from "react-icons/si";
import { FaServicestack } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { Toaster, toast } from "sonner";

export const SidebarEmployee = () => {
  const apiURL = import.meta.env.VITE_MY_NGROK_API;

  const nav = useNavigate();
  const promise = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const token = localStorage.getItem("token");

  const handleLogoutCustomer = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(apiURL + "/eRGMS/public/api/logout-employee", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      });

      toast.promise(promise, {
        loading: "Signing out...",
        success: () => {
          return "Success Signing out";
        },
        error: "Error",
      });

      if (response.ok) {
        setTimeout(() => {
          nav("/");
          localStorage.clear();
          return "Account Logout";
        }, 1200);
      }
    } catch (error) {
      toast.error("Error logging out. Please try again.");
      console.log(error);
    }
  };

  return (
    <>
      <div className="fixed flex flex-col py-4 px-10 bg-white w-72 h-screen items-center shadow-lg justify-between">
        <div>
          <Toaster position="top-right" closeButton richColors />
          <div className="w-28 pt-0 py-2">
            <div className="font-bold flex gap-2">
              <img
                src="/static/images/eRgmsLogo.png"
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
            <Link to="/dashboard-employee">
              <div className="flex gap-2 px-4 py-2 text-primaryColor font-bold rounded-lg items-center justify-start hover:bg-gray-100">
                <FaServicestack />
                Rental Spaces
              </div>
            </Link>
            <Link to="/add-space">
              <div className="flex gap-2 px-4 py-2 text-primaryColor font-bold rounded-lg items-center justify-start hover:bg-gray-100">
                <FaPlus />
                Add Space
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
