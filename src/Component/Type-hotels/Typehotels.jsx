// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import image1 from "./image/advance-thumb1.jpg"
import image2 from  './image/advance-thumb2.jpg'
import image3 from  './image/advance-thumb3.jpg'
import image4 from  './image/advance-thumb4.jpg'
import image5 from './image/advance-thumb5.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
const Typehotels = () => {
    let Types=[
        {
            image:image1,
            title:'Dhaka'
        },
         {
            image:image2,
            title:'Comilla'
        },
         {
            image:image3,
            title:'Sylhet'
        },
         {
            image:image4,
            title:'Bandarban'
        },
        {
            image:image5,
            title:'Coxsbazar'
        }
    ]

  return (
       <div className="typeHotels">
        <motion.h2
        initial={{y:-50, opacity:0}}    
       whileInView={{ y:0, opacity:1 
 ,transition:{duration:3}}}
        >
        Crafting Memorable Experiences</motion.h2>
        <motion.p
    initial={{x:-100, opacity:0}}    
     whileInView={{ x:0, opacity:1 
 ,transition:{duration:3}}}
        >We're Dedicated To Providing You Unforgettable Experience. Whether You're Here For Business Or Leisure</motion.p>
        <motion.div className='types'
        initial={{width:'300px', margin:'auto'}}
        whileInView={{width:"100%",transition:{duration:3,delay:3,when:"after-children"}}}
         >
        
{Types.map((type,index)=>{
    return (
    <motion.div key={index} className='card'

     initial={{skewX:10,}}    
    whileInView={{skewX:0,  transition:{duration:3}}}>
<img src={type.image} alt="not found" />
<div className='text'>
    <h3>{type.title}</h3>
    <IoIosArrowRoundForward className='icons'/>
</div>
    </motion.div>)
   
})}
        </motion.div>
    </div>
  )
}

export default Typehotels