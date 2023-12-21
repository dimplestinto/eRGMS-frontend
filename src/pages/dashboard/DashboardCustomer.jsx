import { NavbarCustomer } from "../../components/navbar/NavbarCustomer"
import { SidebarCustomer } from "../../components/sidebar/SidebarCustomer"


export const DashboardCustomer = () => {
  return(
    <>
    <div className="bg-gray-300 h-screen">
      <div  className="ml-60" >
        <NavbarCustomer />
      </div>
      <SidebarCustomer />
    </div>
    </>
  )
}