import { Responsive } from "@/shared/responsive"
import { DesktopBanner, DesktopList, MobileBanner, MobileList } from "@/widgets/home"

export const HomePage = () => {
  return <div>
    <Responsive desktop={<DesktopBanner />} mobile={<MobileBanner />}/>
    <Responsive desktop={<DesktopList />} mobile={<MobileList />}/>
  </div>
}