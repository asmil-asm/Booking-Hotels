import { hotels } from "../../hotels"
import { useParams } from "react-router-dom"
import { Usedata } from "../../Context/ContextComponent"
import './Imagemodel.css'
const Imagemodel = () => {
    const {images,setImages,showPhoto,setShowPhoto}=Usedata();
    const {id}=useParams();
const hotel=hotels.find((hotel)=>hotel.id==id)
    const  handleImages=()=>{
setImages(!images)
    }
    const handelPhoto=(id,photo)=>{
  setShowPhoto(true)
  console.log(photo);
}
  return (
     <>
  <div className='shadow'></div>
  <div className='moudel'>
<span onClick={handleImages}>X</span>
<div className='allImages'>
  <ul>
<a href="#out"> <li> Out door</li></a>
<a href="#rooms"> <li>Rooms</li></a>
<a href="#resturant"> <li>Resturant</li></a>
  <a href="#entertainment"><li>Entertainment</li></a>
 <a href="#public"><li>Public Place</li></a>
</ul>
<div className="boxes">
<div className='box'>
  <h2 id='out'>Out door</h2>
  <div className='photos'>  {hotel.Hotel_images.outImage.map((item,index)=><img  key={index} src={item} alt='not found' />)}
</div>
</div>
<div className="box">

  <h2 id='rooms'>Rooms</h2>
  <div className='photos'>  {hotel.Hotel_images.roomImage.map((item,index)=><img  key={index} src={item} onClick={()=>{
    handelPhoto(index+1,item)
  }}/>)}
</div>
</div>
<div className="box">
  <h2 id='resturant'>Resturant</h2>
<div className='photos'>{hotel.Hotel_images.foodImage.map((item,index)=><img key={index} src={item}/>)}
</div>
</div>
<div className="box">

  <h2 id='entertainment'>Entertainment</h2>
<div className='photos'>    {hotel.Hotel_images.animatiesImage.map((item,index)=><img key={index} src={item}/>)}
</div>
</div>
<div className="box">
  <h2 id='public'>Public Place</h2>
<div className='photos'>    {hotel.Hotel_images.publicImage.map((item,index)=><img key={index} src={item}/>)}
</div>
</div>
</div>
</div>
</div>
</>
  )
}

export default Imagemodel