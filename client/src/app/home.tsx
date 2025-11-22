import { Responsive } from "@/shared/responsive"
import { DesktopBanner, MobileBanner } from "@/widgets/home"

export const HomePage = () => {
  return <div>
    <Responsive desktop={<DesktopBanner />} mobile={<MobileBanner />}/>
  </div>
}