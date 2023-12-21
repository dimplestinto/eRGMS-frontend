import { Link } from "react-router-dom";

export const Heropage = () => {
  return (
    <>
      <div className="bg-gradient-to-tl from-primaryColor to-secondaryColor">
        <div className="h-screen flex items-center justify-center px-20">
          <div className="flex flex-col items-start">
            <h1 className="lg:text-[60px] md:text-[30px] font-bold text-white drop-shadow-md">
              Take your business to the{" "}
              <span className="text-primaryColor">next level.</span>
            </h1>
            <p className="text-white pt-2 pb-5">
              Thinking of starting or expanding your business? Look no further
              than <i>Caraga State University's</i> Office of{" "}
              <b>Resource Generation Management Services (RGMS).</b>
            </p>
            <Link to="/register">
              <div className=" px-4 py-2 bg-white text-black font-bold w-auto rounded-full hover:bg-primaryColor hover:text-white">
                Register Now!
              </div>
            </Link>
          </div>
          <div>
            <img
              src="/static/images/Heropage.png"
              alt="image"
              className="w-[800px] drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};
