import { Link, useNavigate } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";
import { Toaster, toast } from "sonner";

export const LoginCustomer = () => {
  
  const apiURL = import.meta.env.VITE_MY_NGROK_API;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const nav = useNavigate();
  const promise = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const handleLoginCustomer = async (e) => {
    e.preventDefault();

  setEmailError(false);
  setPasswordError(false);

  const fields = [
    {
      value: password,
      setError: setPasswordError,
      message: "Password is required",
    },
    { value: email, 
      setError: setEmailError, 
      message: "Email is required" 
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
    let response = await fetch(`${apiURL}/eRGMS/public/api/login-customer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json","ngrok-skip-browser-warning": "69420",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      },
    );

    if (response.ok) {
      const customerInfo = await response.json();
      console.log(customerInfo);
      localStorage.setItem("customer_id", customerInfo.data?.customer?.customer_id);
      localStorage.setItem("email", customerInfo.data?.customer?.email);
      localStorage.setItem("first_name",customerInfo.data?.customer?.first_name);
      localStorage.setItem("last_name",customerInfo.data?.customer?.last_name);
      localStorage.setItem("token", customerInfo.data?.token);

      toast.promise(promise, {
        loading: "Logging in...",
        success: () => {
        return 'Success Logging In';
        },
        error: "Error",
      });
      setTimeout(() => {
        nav("/dashboard-customer");
        return "Login Successfully";
      }, 1200);
    } else {
      if (response.status === 404){
        setEmailError(true);
        toast.error("User does not exist");
      } else if (response.status === 422){
        if (!password === "") {
          setPasswordError(true);
          toast.error("Incorrect password");
        }
      }
    }
  } catch (error) {
    toast.warning("Internal Server Error");
    console.log(error);
  }
};

  return (
    <>
      <div className="bg-gradient-to-tl from-primaryColor to-secondaryColor">
      <Toaster position='top-center' closeButton richColors/>
        <div className="py-16 px-80 h-screen">
          <div className="bg-slate-50 h-full rounded-2xl flex justify-between items-center relative">
            <Link to="/">
              <IoCloseCircle
                size={25}
                className="text-primaryColor absolute top-3 right-5 hover:text-opacity-85"
              />
            </Link>
            <div className="p-5 w-full">
              <form>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col items-center">
                    <img
                      src="/static/icons/Logo.png"
                      alt="logo"
                      className="w-[70px] justify-center"
                    />
                    <p className="font-medium">
                      Login as
                      <Link to="/login-employee">
                        <span className="text-primaryColor font-bold hover:text-opacity-75">
                          {" "}
                          Customer
                        </span>
                      </Link>
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className={` ${ 
                        emailError
                            ? "rounded-lg shadow-2xl px-5 py-2  w-full border border-red-500"
                            : "rounded-lg shadow-2xl px-5 py-2  w-full"
                          }`}
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className={` ${ 
                        passwordError 
                            ? "rounded-lg shadow-2xl px-5 py-2  w-full border border-red-500"
                            : "rounded-lg shadow-2xl px-5 py-2  w-full"
                          }`}
                    />
                    <div>
                      <p className="text-sm">
                        Don't have an account?
                        <Link to="/register">
                          <span className="text-primaryColor font-bold hover:text-opacity-85">
                            {" "}
                            Register
                          </span>
                        </Link>
                      </p>
                      <div
                        onClick={handleLoginCustomer}
                        className="bg-primaryColor py-2 px-10 rounded-lg hover:bg-opacity-85 font-bold text-white text-center items-center justify-center shadow-2xl cursor-pointer"
                      >
                        Login
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="p-5 w-full">
              <img
                src="/static/icons/Girl.png"
                alt="image"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
