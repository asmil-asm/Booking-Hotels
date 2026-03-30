import { hotels } from "../../hotels"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Rooms.css'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import MoudelRoom from "./MoudelRoom";
import {Usedata }from "../../Context/ContextComponent";
import { useState } from "react";

const Rooms = () => {
const {id}=useParams();
const hotel=hotels.find((hotel)=>hotel.id==id)
const {showMoudelroom,setShowMoudelroom}=Usedata();
const [useId,setId]=useState(null);
const handleShowMoudel=(id)=>{
    setId(id);
    setShowMoudelroom(!showMoudelroom);

}
  return (
<div className="rooms">
    <div className="filtir-rooms">
      <ul>
        <li>All</li>
      <li>1 bed</li>
      <li>2 bed</li>
      <li>3+ bed</li>
      </ul>
    </div>
    <div className="rooms-details">
{hotel.rooms.map((room,index)=>(
    <div key={index} className="room">
<Swiper
modules={[Navigation]}
    slidesPerView={1}
    loop={true}
 spaceBetween={5}
  navigation
>
    {room.images.map((image,index)=>(
        
        <SwiperSlide key={index} className="slider-images">
            <img src={image} alt="not found" />
        </SwiperSlide>
        
        

    ))}


</Swiper>
<h3>{room.title}</h3>
<div className="stars">
    {Array.from({length:room.rating}).map((index)=><div key={index} ><FaStar/></div>)}
    
</div>
<div className=" aminities">
        {room.aminities.map((item,index)=>(
            <div key={index} className="aminity">
<div className="icon">{item.icons}</div>
<p>{item.name}</p>
            </div>
        ))}

    </div>
    <div onClick={()=>handleShowMoudel(room.id)} className="more">
        More Details 
        <RiArrowRightSLine/>
    </div>
    <div className="policy">
   <div className="title">
         <h4>Cancellation policy</h4>
        <span>per stay</span>
   </div>
  <div className="cncellation">
    <input type="radio" id="non-refundable" />
     <label htmlFor="non-refundable">
Non-refundable</label>

  </div>
  <div className="cncellation">
        <input type="radio" id="fully-refundable" />

    <label htmlFor="fully-refundable">
Fully refundable before 8 Apr
    </label>
  </div>


    </div>
    <div className="extras">
        <h4>Extras</h4>
        <div className="info">
    <input type="radio" id="no-extras" />
            <label htmlFor="no-extras">No extras 
                <span>0$</span>
            </label>
        </div>
        <div className="info">
            <input type="radio" id="breakfast" />   

            <label htmlFor="breakfast">
                Breakfast + Food/drink credit or discount + Special deal
            <span>$52</span>
            </label>
        </div>
    </div>
    <div className="price">
        {room.price}$
        <br/>
        <p>for 1 room
includes taxes & fees</p>
    </div>
    <button className="book">Book Now</button>
    <p>You will not be charged yet
</p>

    </div>
))}

    </div>

    {showMoudelroom && <>
    <div className="shadow" onClick={handleShowMoudel}></div>
    <MoudelRoom useId={useId} />
    </>}
    
  </div>  )
}

export default Rooms