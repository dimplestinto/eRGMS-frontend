export const ServiceModalC = ({ service = [] }) => {
  return (
    <>
      {service.map((service, index) => (
        <div
          key={index}
          className="h-[350px] border rounded-lg shadow-lg flex gap-10 p-10 relative"
        >
          <img
            src="/static/images/serviceLogo.png"
            alt="Image"
            className="h-full shadow-md rounded-lg"
          />
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[30px]">{service?.name}</h1>
            <p className="font-bold">
              Location: <span className="font-normal">{service?.location}</span>
            </p>
            <p className="font-bold">
              Recommended Business:{" "}
              <span className="font-normal">{service?.recommended_business}</span>
            </p>
            <p className="font-bold">
              Monthly Price: <span className="font-normal">{service?.monthly_price}</span>
            </p>
          </div>
          <button
            // onClick={}
            className="flex gap-2 px-4 py-2 bg-primaryColor text-white font-bold rounded-lg hover:bg-opacity-85 cursor-pointer absolute right-5 bottom-5"
          >
            Apply Now
          </button>
        </div>
      ))}
    </>
  );
};
