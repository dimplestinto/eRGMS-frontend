import { Link, useNavigate } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";

export const LoginEmployee = () => {
  
  const apiURL = "https://9488-64-226-63-220.ngrok-free.app";
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  const handleLoginEmployee = async (e) => {
    e.preventDefault();

    if (email !== "" || password !== "") {
      try {
        let response = await fetch(
          apiURL + "/eRGMS/public/api/login-employee",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );

        if (response.ok) {
          const employeeInfo = await response.json();
          console.log(employeeInfo);
          localStorage.setItem(
            "employee_id",
            employeeInfo.data?.employee?.employee_id
          );
          localStorage.setItem("email", employeeInfo.data?.employee?.email);
          localStorage.setItem(
            "first_name",
            employeeInfo.data?.employee?.first_name
          );
          localStorage.setItem(
            "last_name",
            employeeInfo.data?.employee?.last_name
          );
          localStorage.setItem("token", employeeInfo.data?.token);
          setTimeout(() => {
            navigator("/dashboard-employee");
            return "Login Successfully";
          }, 1200);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="bg-gradient-to-tl from-primaryColor to-secondaryColor">
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
                      <Link to="/login-customer">
                        <span className="text-primaryColor font-bold hover:text-opacity-85">
                          {" "}
                          Employee
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
                      className="rounded-lg shadow-2xl px-5 py-2 "
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="rounded-lg shadow-2xl px-5 py-2 "
                    />
                    <div className="py-2">
                      <div
                        onClick={handleLoginEmployee}
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
