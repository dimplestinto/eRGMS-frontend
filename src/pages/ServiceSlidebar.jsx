import { ServiceModal } from "../components/modal/ServiceModal"

export const ServiceSlidebar = () => {
  return (
    <>
      <div className="w-max flex"> 
        <ServiceModal />
        <ServiceModal />
        <ServiceModal />
        <ServiceModal />
        <ServiceModal />
        <ServiceModal />
        <ServiceModal />
        <ServiceModal />
      </div>
    </>
  )
}