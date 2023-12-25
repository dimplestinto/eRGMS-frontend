import { useState } from "react";
import { SidebarEmployee } from "../components/sidebar/SidebarEmployee";
import { useNavigate } from "react-router-dom";

export const AddSpace = () => {
  
  const apiURL = import.meta.env.VITE_MY_NGROK_API;
  const token = localStorage.getItem("token");

    const [name, setName] = useState("");
    const [recommended_business, setRecommended_Business] = useState("");
    const [location, setLocation] = useState("");
    const [monthly_price, setMonthly_Price] = useState("");

    const nav = useNavigate();

  const addSpace = async () => {
    try {
      let response = await fetch(`${apiURL}/eRGMS/public/api/add-rental-spaces`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,"ngrok-skip-browser-warning": "69420",
        },
        body: JSON.stringify({
          name,
          recommended_business,
          location,
          monthly_price,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        setTimeout(() => {
          nav("/dashboard-employee");
          return data;
        }, 1200);
      }
    } catch (error) {
      console.error("An error occurred while adding rental space:", error);
    }
  };

  return (
    <>
      <SidebarEmployee />
      <div className="ml-60 p-10">
        <div>
          <h1 className="font-bold text-[40px]">ADD RENTAL SPACES</h1>
        </div>
        <div className="p-10 w-full">
          <form>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <span className="font-bold">Name of Rental Space:</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="rounded-lg shadow-2xl px-5 py-2 w-auto border-2 border-primaryColor outline-none"
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-bold">Recommended Business:</span>
                <textarea
                  type="text"
                  value={recommended_business}
                  onChange={(e) => setRecommended_Business(e.target.value)}
                  placeholder="Recommended Business"
                  className="rounded-lg shadow-2xl px-5 py-2 w-auto border-2 border-primaryColor outline-none"
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-bold">Location:</span>
                <textarea
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="rounded-lg shadow-2xl px-5 py-2 w-auto border-2 border-primaryColor outline-none"
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-bold">Monthly Price:</span>
                <input
                  type="text"
                  value={monthly_price}
                  onChange={(e) => setMonthly_Price(e.target.value)}
                  placeholder="Monthly Price"
                  className="rounded-lg shadow-2xl px-5 py-2 w-auto border-2 border-primaryColor outline-none"
                />
              </div>
              <div className="flex">
                <div 
                  onClick={addSpace}
                  className="bg-primaryColor py-2  px-10 rounded-lg hover:bg-opacity-75 font-bold text-white text-center items-center justify-center shadow-2xl cursor-pointer">
                  Add Space
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
