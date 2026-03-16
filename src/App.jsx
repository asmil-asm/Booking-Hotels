import Home from "./pages/Home/Home"
import Header from "./Component/Header/Header"
import { Routes ,Route } from "react-router-dom"
import Footer from "./Component/Footer/Footer"
import About from "./pages/About/About"
import  {Contact}  from "./pages/Contact/Contact"
import Hotels from "./pages/Hotels/Hotels"
import HotelData from "./pages/HotelData/HotelData"
function App() {

  return (
    <div >
    <Header/>
    <Routes>
      <Route path="/Booking-Hotels" element={<Home/>}/>
      <Route path="/Booking-Hotels/about-us" element={<About/>}/>
      <Route path="/Booking-Hotels/contact-us" element={<Contact/>}/>
      <Route path="/Booking-Hotels/hotels" element={<Hotels/>}/>
      <Route path="/Booking-Hotels/hotel/:id" element={<HotelData/>}/>
      
    </Routes>
    <Footer/>
    
    </div>
  )
}

export default App
