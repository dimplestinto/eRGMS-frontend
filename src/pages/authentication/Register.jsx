import { Link, useNavigate } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Toaster, toast } from "sonner";

export const Register = () => {
  const apiURL = import.meta.env.VITE_MY_NGROK_API;
  const nav = useNavigate();

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const [fnameError, setFnameError] = useState(false);
  const [lnameError, setLnameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [cpasswordError, setCpasswordError] = useState(false);

  const promise = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const handleRegister = async (e) => {
    e.preventDefault();

    setFnameError(false);
    setLnameError(false);
    setAddressError(false);
    setEmailError(false);
    setPasswordError(false);
    setCpasswordError(false);

    const fields = [
      {
        value: first_name,
        setError: setFnameError,
        message: "First name is required",
      },
      {
        value: last_name,
        setError: setLnameError,
        message: "Last name is required",
      },
      {
        value: address,
        setError: setAddressError,
        message: "Address is required",
      },
      { value: email, 
        setError: setEmailError, 
        message: "Email is required" 
      },
      {
        value: password,
        setError: setPasswordError,
        message: "Password is required",
      },
      {
        value: cpassword,
        setError: setCpasswordError,
        message: "Confirm Password is required",
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

    if (isValid) {
      if (!(password.length >= 8)) {
        toast.error("Password must be at least 8 characters");
        setPasswordError(true);
      } else if (password !== cpassword) {
        toast.error("Password not matched!");
        setPasswordError(true);
        setCpasswordError(true);
      } else {
        try {
          let response = await fetch(
            `${apiURL}/eRGMS/public/api/register-customer`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "ngrok-skip-browser-warning": "69420",
              },
              body: JSON.stringify({
                first_name,
                last_name,
                address,
                email,
                password,
              }),
            }
          );

          const data = await response.json();

          if (response.ok) {
            toast.promise(promise, {
              loading: "Creating...",
              success: () => {
                return "Account Created";
              },
              error: "Error",
            });
            setTimeout(() => {
              nav("/login-customer");
            }, 1200);
          } else if (
            response.status === 422 &&
            data.message === "The email has already been taken."
          ) {
            toast.error("Email already in use");
            setEmailError(true);
          }
        } catch (error) {
          console.error(error);
          toast.warning("Internal Server Error");
        }
      }
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
                    <p className="font-medium">Create an account</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <input
                        id="fname"
                        type="text"
                        value={first_name}
                        onChange={(e) => setFirst_name(e.target.value)}
                        placeholder="First Name"
                        className={` ${ 
                            fnameError 
                                ? "rounded-lg shadow-2xl px-5 py-2  w-full border border-red-500"
                                : "rounded-lg shadow-2xl px-5 py-2  w-full"
                              }`}
                      />
                      <input
                        type="text"
                        value={last_name}
                        onChange={(e) => setLast_name(e.target.value)}
                        placeholder="Last Name"
                        className={` ${ 
                          lnameError 
                              ? "rounded-lg shadow-2xl px-5 py-2  w-full border border-red-500"
                              : "rounded-lg shadow-2xl px-5 py-2  w-full"
                            }`}
                      />
                    </div>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address"
                      className={` ${ 
                        addressError
                            ? "rounded-lg shadow-2xl px-5 py-2  w-full border border-red-500"
                            : "rounded-lg shadow-2xl px-5 py-2  w-full"
                          }`}
                    />
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
                    <input
                      type="password"
                      value={cpassword}
                      onChange={(e) => setCpassword(e.target.value)}
                      placeholder="Confirm Password"
                      className={` ${ 
                        cpasswordError 
                            ? "rounded-lg shadow-2xl px-5 py-2  w-full border border-red-500"
                            : "rounded-lg shadow-2xl px-5 py-2  w-full"
                          }`}
                    />
                    {/* {type === "password" ? (
                        <span className=""
                        onClick={() => setType("text")}>
                        <FaEyeSlash />
                        </span>
                      ) : (
                        <span className=""> 
                        onClick={() => setType("password")}
                        <FaEye />
                        </span>
                    )} */}


                    <div>
                      <p className="text-sm">
                        Already have an account?
                        <Link to="/login-customer">
                          <span className="text-primaryColor font-bold hover:text-opacity-85">
                            {" "}
                            Login
                          </span>
                        </Link>
                      </p>
                      <div
                        onClick={handleRegister}
                        className="bg-primaryColor py-2 px-10 rounded-lg hover:bg-opacity-75 font-bold text-white text-center items-center justify-center shadow-2xl cursor-pointer"
                      >
                        Register
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="p-5 w-full">
              <img
                src="/static/icons/Boy.png"
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
