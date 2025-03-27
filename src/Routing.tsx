import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import DigitalContentServices from "./pages/DigitalContentServices";
import Home from "./pages/Home";
import AerospaceDefence from "./pages/industries/AerospaceDefence";
import Automotive from "./pages/industries/Automotive";
import Banking from "./pages/industries/Banking";
import Communications from "./pages/industries/Communications";
import ConsumerElectronics from "./pages/industries/ConsumerElectronics";
import ConsumerPackageGoods from "./pages/industries/ConsumerPackageGoods";
import Education from "./pages/industries/Education";
import EngineeringConstruction from "./pages/industries/EngineeringConstruction";
import IndustriesAndProcess from "./pages/industries/IndustriesAndProcess";
import Insurance from "./pages/industries/Insurance";
import LifeScienceAndPharma from "./pages/industries/LifeScienceAndPharma";
import MediaandInfo from "./pages/industries/MediaandInfo";
import NaturalResources from "./pages/industries/NaturalResources";
import Oilandgas from "./pages/industries/Oilandgas";
import PlatformandSoftware from "./pages/industries/PlatformandSoftware";
import Professional from "./pages/industries/Professional";
import PublicSector from "./pages/industries/PublicSector";
import Retail from "./pages/industries/Retail";
import Semiconductor from "./pages/industries/Semiconductor";
import TransportationAndServices from "./pages/industries/TransportationAndServices";
import Utilities from "./pages/industries/Utilities";
import Services from "./pages/Services";
import SoftwareSupport from "./pages/SoftwareSupport";
import TrainingCourses from "./pages/TrainingCourses";
import MedicalDevices from "./pages/industries/Medicaldevices";



function Routing() {
  return (

   <div>
    


<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/industries/automotive" element={<Automotive/>}/>
    <Route path="/training-courses" element={<TrainingCourses />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/digital-content-services" element={<DigitalContentServices />} />
    <Route path="/software-support" element={<SoftwareSupport />} />
    <Route path="//industries/aerospace-defense" element = {<AerospaceDefence/>}/>
    <Route path="//industries/banking" element = {<Banking/>}/>
    <Route path="//industries/communications" element = {<Communications/>}/>
    <Route path="//industries/cpg" element = {<ConsumerPackageGoods/>}/>
    <Route path="//industries/education" element = {<Education/>}/>
    <Route path="//industries/manufacturing" element = {<IndustriesAndProcess/>}/>
    <Route path="//industries/insurance" element = {<Insurance/>}/>
    <Route path="//industries/life-sciences" element = {<LifeScienceAndPharma/>}/>
    <Route path="//industries/consumer-electronics" element = {<ConsumerElectronics/>}/>
    <Route path="//industries/engineering-construction" element = {<EngineeringConstruction/>}/>
    <Route path="//industries/engineering-construction" element = {<EngineeringConstruction/>}/>
    <Route path="//industries/media" element = {<MediaandInfo/>}/>
    <Route path="//industries/natural-resources" element={<NaturalResources/>}/>
    <Route path="//industries/oil-gas" element ={<Oilandgas/>}/>
    <Route path="//industries/software" element={<PlatformandSoftware/>}/>
    <Route path="//industries/professional-services" element={<Professional/>}/>
    <Route path="//industries/public-sector" element={<PublicSector/>}/>
    <Route path="//industries/retail" element={<Retail/>}/>
    <Route path="//industries/transportation" element={<TransportationAndServices/>}/>
    <Route path="//industries/utilities" element={<Utilities/>}/>
    <Route path="//industries/semiconductors" element={<Semiconductor/>}/>
    <Route path="//industries/medical-devices" element={<MedicalDevices/>}/>



    




                                                    

   </Routes>
   </div>
  )
}

export default Routing
