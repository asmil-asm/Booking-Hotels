import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import image1 from '../../assets/Cities/Dubai.jfif'
import image2 from '../../assets/Cities/Istanbul.jfif'
import image3 from '../../assets/Cities/Eygpt.jfif'
import image4 from '../../assets/Cities/Paris.jfif'
import image5 from '../../assets/Cities/London.jfif'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const HotelsCity = () => {
    let cities=[
        {image:image1,city:'Dubai', number:4761,avg:211},
        {image:image2,city:'Istanbul', number:4500,avg:231},
        {image:image3,city:'Eygpt', number:5000,avg:411},
        {image:image4,city:'Paris',number:4561,avg:511},
        {image:image5,city:'London', number:8761,avg:311}

    ]
 
  
  return (
    <section className='cities'>
<motion.h2  initial={{y:-50, opacity:0}}    
       whileInView={{ y:0, opacity:1 
 ,transition:{duration:3}}}>Popular searches</motion.h2>
<div>
<Swiper 
      modules={[Autoplay,Pagination]}
      spaceBetween={30}
      centeredSlides
      loop={true}
      pagination={{ clickable: true }}
    slidesPerView={3}
         speed={800}
         autoplay={{
            delay:2500,
             stopOnLastSlide: false,
         }}
          breakpoints={{

                  768: {
      slidesPerView: 3,
    },
    250:{
              slidesPerView: 1,
    },
    500:
    {
              slidesPerView: 2,

    }
     

          }}
    

        >

        <div>
{cities.map((item ,index)=>
    (
<SwiperSlide key={index} className='city'>
<img src={item.image} alt="not found" />
<div className="text">
    <h3>{item.city}</h3>
<p>{item.number} Hotels</p>
<p>${item.avg} AVG</p>
</div>
    </SwiperSlide>
    )
    
)}
</div>

</Swiper>
</div>

    </section>
  )
}
  

export default HotelsCity