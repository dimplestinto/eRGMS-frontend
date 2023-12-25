export const ServiceModal = () => {
  
  const apiURL = import.meta.env.VITE_MY_NGROK_API;

  // const [rentalSpaces, setRentalSpaces] = useState([]);

  // useEffect(() => {
  //   // Fetch rental spaces from Laravel backend
  //   fetch.get(`${apiURL}/eRGMS/public/api/get-rental-spaces`)
  //     .then(response => {
  //       setRentalSpaces(response.data.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching rental spaces:', error);
  //     });
  // }, []);
  return (
    <>
      <div className="h-[350px] border rounded-lg shadow-lg flex gap-10 p-10 relative">
        <img
          src="/static/images/eRgmsLogo.png"
          alt="Image"
          className="h-full border border-primaryColor rounded-lg"
        />
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[30px]">Stall Renter</h1>
          <p className="font-bold">
            Location: <span className="font-normal">Kinaadman Hall</span>
          </p>
          <p className="font-bold">
            Recommended Business: <span className="font-normal">Food Services, Photocopy Services, School Supplies Services, Computer Encoding/Printing.</span>
          </p>
          <p className="font-bold">
            Monthly Price: <span className="font-normal">1200.00</span>
          </p>
        </div>
        <button
          // onClick={}
          className="flex gap-2 px-4 py-2 bg-primaryColor text-white font-bold rounded-lg hover:bg-opacity-85 cursor-pointer absolute right-5 bottom-5"
        >
          Edit
        </button>
      </div>
    </>
  );
};
