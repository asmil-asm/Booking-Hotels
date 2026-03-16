import { hotels } from "../../hotels"
import { useParams } from "react-router-dom";
import { Usedata } from "../../Context/ContextComponent";
import './ModelreadMore.css'
const ModelreadMore = () => {
  const {readMore,setReadMore}=Usedata();
  const {id}=useParams();
const hotel=hotels.find((hotel)=>hotel.id==id)
const handelSee=()=>{
  setReadMore(!readMore)
}
  return (
 <>
  <div className="shadow"></div>
  <div className="aboutHotel">
    <span onClick={handelSee}>X</span>


    <h3>Description of accommodation</h3>
    <div className="data">
      <div>
        <p>{`Opening Year: ${hotel.Year}`}</p>
        <p>{`number of rooms: ${hotel.rooms.length}`}</p>
      </div>
      <div>
        <p>{`phone number: ${hotel.phone}`}</p>
        <p>{`Email: ${hotel.email}`}</p>
      </div>
    </div>
    <div className="text">
      <p>{hotel.description}</p>
    </div>
  </div>
  </>
  )
}

export default ModelreadMore