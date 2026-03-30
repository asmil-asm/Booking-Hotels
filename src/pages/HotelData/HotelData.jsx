import { useParams } from 'react-router-dom'
import { hotels } from '../../hotels';
import { FaStar } from "react-icons/fa";
import { CiSearch,CiLocationOn } from "react-icons/ci";
import Imagemodel from '../../Component/Model-image/Imagemodel';
import ModelreadMore from '../../Component/ModelreadMore/ModelreadMore';
import { Usedata } from '../../Context/ContextComponent';
import Rooms from '../../Component/Rooms-Details/Rooms';
import './HotelData.css'
const HotelData = () => {
const {images,setImages,readMore,setReadMore}=Usedata()

const {id}=useParams();
const hotel=hotels.find((hotel)=>hotel.id==id)
let countImage=hotel.Hotel_images.foodImage.length+hotel.Hotel_images.animatiesImage.length+hotel.Hotel_images.outImage.length+hotel.Hotel_images.publicImage.length+hotel.Hotel_images.roomImage.length

if(!hotel)
{
    return <h1>Hotel Not Found</h1>
}
const handleImages=()=>{
setImages(!images)
}

const handelSee=()=>{
  setReadMore(!readMore)
}
  return (
    <div className='hotel-data'>
      <div className='search-hotels'>
       <div className='search'>
         <CiSearch className='icons'/>
        <input type="search" placeholder='Search' />
       </div>
        <button>Search</button>
      </div>

      <div  className='info-hotel'>
        <div className='title'>  
          <h1>{hotel.name}</h1>
<div className='rate'>{Array.from({length:hotel.rate}).map(()=><FaStar/>)}</div>
</div>
<div className='location'>
  <CiLocationOn/>
<p>{hotel.location}</p>
</div>
<div className='images'>

<div className='imageOut'>
  <div>    {hotel.Hotel_images.outImage.map((item)=><img onClick={handleImages} src={item} alt='not found'/>)}

</div>
</div>
<div className='servicesImages' onClick={handleImages}>
  <div className=' imageServ'>{hotel.Hotel_images.roomImage.map((item,index)=>(
<div>    <img src={item} key={index}/>
</div>
))}</div>
  <div className='imageServ'>{hotel.Hotel_images.foodImage.map((item,index)=>(
<div set-data={`${countImage} +`}>    <img src={item} key={index}/>
</div>  ))}</div>
</div>



</div>


<div className='information-hotel'>
    <div className='animinties'>
    <h2>Featuers:</h2>
     <div className='activities'>
{hotel.aminities.map((item,index)=>(
  <div className='active' key={index}>
    <h3>{item.icons}</h3>
    <h3>{item.name}</h3>
    </div>
))}
     </div>
    
    </div>
    <div className='facilities'>
      <h2>Facilities:</h2>
      <div className='places'>
{hotel.facilities.map((item,index)=>(
  <div className='place' key={index}>
    <h3>{item.icons}</h3>
    <h3>{item.name}</h3>
    </div>
))}
      </div>
    </div>
    <div className="description">
<h2>Description of accommodation</h2>
<p>{hotel.description}</p>
<span onClick={handelSee}>see more</span>
    </div>
  </div>
  <Rooms/>
  
</div>

{
  images && 
 <Imagemodel/>
}
{
  readMore &&
  <ModelreadMore/>
}
      </div>

  )
}

export default HotelData