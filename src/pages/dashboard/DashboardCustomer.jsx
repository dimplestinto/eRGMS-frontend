import { Link } from "react-router-dom";
import { SidebarCustomer } from "../../components/sidebar/SidebarCustomer";
import { FaPlus } from "react-icons/fa";
import { ServiceModalC } from "../../components/modal/ServiceModalC";
import { useState, useEffect } from "react";

export const DashboardCustomer = () => {

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
        <SidebarCustomer />
        <div className="ml-72 py-10 px-10 flex flex-col gap-5 overflow-hidden">
          <div>
            <h1 className="font-bold text-[50px]">Rental Spaces</h1>
          </div>
          <div className="flex flex-col gap-10">
          <ServiceModalC service={responseData}/>
          </div>
        </div>
      </div>
    </>
  );
};
