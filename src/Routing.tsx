import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import DigitalContentServices from "./pages/DigitalContentServices";
import Home from "./pages/Home";
import AerospaceDefence from "./pages/industries/AerospaceDefence";
import Automotive from "./pages/industries/Automotive";
import Banking from "./pages/industries/Banking";
import Communications from "./pages/industries/Communications";
import ConsumerPackageGoods from "./pages/industries/ConsumerPackageGoods";
import Education from "./pages/industries/Education";
import IndustriesAndProcess from "./pages/industries/IndustriesAndProcess";
import Insurance from "./pages/industries/Insurance";
import LifeScienceAndPharma from "./pages/industries/LifeScienceAndPharma";
import Services from "./pages/Services";
import SoftwareSupport from "./pages/SoftwareSupport";
import TrainingCourses from "./pages/TrainingCourses";

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
    <Route path="//industries/consumerPackage" element = {<ConsumerPackageGoods/>}/>
    <Route path="//industries/education" element = {<Education/>}/>
    <Route path="//industries/industries-and-process" element = {<IndustriesAndProcess/>}/>
    <Route path="//industries/insurance" element = {<Insurance/>}/>
    <Route path="//industries/lifescience-and-pharma" element = {<LifeScienceAndPharma/>}/>
    






   </Routes>
   </div>
  )
}

export default Routing
