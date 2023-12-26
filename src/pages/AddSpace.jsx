import { useState } from "react";
import { SidebarEmployee } from "../components/sidebar/SidebarEmployee";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const AddSpace = () => {
  const apiURL = import.meta.env.VITE_MY_NGROK_API;
  const token = localStorage.getItem("token");
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [recommended_business, setRecommended_Business] = useState("");
  const [location, setLocation] = useState("");
  const [monthly_price, setMonthly_Price] = useState("");

  const [nameError, setNameError] = useState(false);
  const [recoError, setRecoError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [mpriceError, setMpriceError] = useState(false);

  const promise = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const addSpace = async (e) => {
    e.preventDefault();

    setNameError(false);
    setRecoError(false);
    setLocationError(false);
    setMpriceError(false);

    const fields = [
      {
        value: monthly_price,
        setError: setMpriceError,
        message: "Monthly price is required",
      },
      {
        value: location,
        setError: setLocationError,
        message: "Location is required",
      },
      {
        value: recommended_business,
        setError: setRecoError,
        message: "Recommended business is required",
      },
      {
        value: name,
        setError: setNameError,
        message: "Name is required",
      },
    ];

    let isValid = true;

    fields.forEach((field) => {
      if (field.value === "") {
        field.setError(true);
        toast.error(field.message);
        isValid = false;
      }
    });

    try {
      let response = await fetch(
        `${apiURL}/eRGMS/public/api/add-rental-spaces`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "69420",
          },
          body: JSON.stringify({
            name,
            recommended_business,
            location,
            monthly_price,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.promise(promise, {
          loading: "Creating...",
          success: () => {
            return "Added sucessfully";
          },
          error: "Error",
        });
        setTimeout(() => {
          nav("/dashboard-employee");
        }, 1200);
      }
    } catch (error) {
      console.error("An error occurred while adding rental space:", error);
      toast.warning("Internal Server Error");
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
                <span className="font-bold">Rental Space:</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className={` ${
                    nameError
                      ? "rounded-lg shadow-2xl px-5 py-2  w-full border border-red-500 outline-none"
                      : "rounded-lg shadow-2xl px-5 py-2  w-full border border-primaryColor outline-none"
                  }`}
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-bold">Recommended Business:</span>
                <textarea
                  type="text"
                  value={recommended_business}
                  onChange={(e) => setRecommended_Business(e.target.value)}
                  placeholder="Recommended Business"
                  className={` ${
                    recoError
                      ? "rounded-lg shadow-2xl px-5 py-2  w-full border border-red-500"
                      : "rounded-lg shadow-2xl px-5 py-2  w-full border border-primaryColor"
                  }`}
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-bold">Location:</span>
                <textarea
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className={` ${
                    locationError
                      ? "rounded-lg shadow-2xl px-5 py-2  w-full border border-red-500"
                      : "rounded-lg shadow-2xl px-5 py-2  w-full border border-primaryColor"
                  }`}
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-bold">Monthly Price:</span>
                <input
                  type="text"
                  value={monthly_price}
                  onChange={(e) => setMonthly_Price(e.target.value)}
                  placeholder="Monthly Price"
                  className={` ${
                    mpriceError
                      ? "rounded-lg shadow-2xl px-5 py-2  w-full border border-red-500"
                      : "rounded-lg shadow-2xl px-5 py-2  w-full border border-primaryColor"
                  }`}
                />
              </div>
              <div className="flex">
                <div
                  onClick={addSpace}
                  className="bg-primaryColor py-2  px-10 rounded-lg hover:bg-opacity-75 font-bold text-white text-center items-center justify-center shadow-2xl cursor-pointer"
                >
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
