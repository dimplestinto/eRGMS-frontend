import { Link } from "react-router-dom";
import { SidebarEmployee } from "../../components/sidebar/SidebarEmployee";
import { ServiceSlidebar } from "../ServiceSlidebar";
import { FaPlus } from "react-icons/fa";
import { ServiceModal } from "../../components/modal/ServiceModal";

export const DashboardEmployee = () => {
  return (
    <>
      <div>
        <SidebarEmployee />
        <div className="ml-60 py-10 px-10 flex flex-col gap-5 overflow-hidden">
          <div>
            <h1 className="font-bold text-[50px]">Rental Spaces</h1>
          </div>
          <div>
          <ServiceModal />
          </div>
        </div>
      </div>
    </>
  );
};
