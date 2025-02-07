import { Route, Routes } from "react-router"
import Services from "./pages/Services"
import TrainingCourses from "./pages/TrainingCourses"
import DigitalContentServices from "./pages/DigitalContentServices"
import ContactUs from "./pages/Contactus"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import SoftwareSupport from "./pages/SoftwareSupport"


function Routing() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/training-courses" element={<TrainingCourses />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/digital-content-services" element={<DigitalContentServices />} />
    <Route path="/software-support" element={<SoftwareSupport />} />
   </Routes>
  )
}

export default Routing
