import { MdEventAvailable } from "react-icons/md";

export const NavbarCustomer = () => {
  return (
    <>
      <div className="fixed top-0 w-full flex flex-wrap items-center justify-between h-[80px] drop-shadow-lg bg-white">
        <div className="md:absolute right-64">
          <div className="flex gap-2 px-4 py-2 bg-primaryColor text-white font-bold rounded-lg items-center">
          <MdEventAvailable />
            Apply Now
          </div>
        </div>
      </div>
    </>
  )
}