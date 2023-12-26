import { Link } from "react-router-dom";
import { SidebarEmployee } from "../../components/sidebar/SidebarEmployee";
import { ServiceSlidebar } from "../ServiceSlidebar";
import { FaPlus } from "react-icons/fa";
import { ServiceModal } from "../../components/modal/ServiceModal";
import { useState, useEffect } from "react";

export const DashboardEmployee = () => {

  const apiURL = import.meta.env.VITE_MY_NGROK_API;
  const token = localStorage.getItem("token");

  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        let response = await fetch(`${apiURL}/eRGMS/public/api/get-rental-spaces`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "69420",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setResponseData(data.data);
          console.log(data);
        } else {
          console.log("Failed to fetch services")
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchServices();
  }, [token]);

  return (
    <>
      <div>
        <SidebarEmployee />
        <div className="ml-60 py-10 px-10 flex flex-col gap-5 overflow-hidden">
          <div>
            <h1 className="font-bold text-[50px]">Rental Spaces</h1>
          </div>
          <div>
          <ServiceModal service={responseData}/>
          </div>
        </div>
      </div>
    </>
  );
};
