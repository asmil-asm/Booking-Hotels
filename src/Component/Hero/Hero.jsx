// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import './Hero.css'
import { Usedata } from '../../Context/ContextComponent'
const Hero = () => {
    let {form,setForm,search,setSearch}=Usedata()
    // handel Form
    const handelForm=(event)=>{
        setForm({...form,[event.target.name]:event.target.value})
    }
    const handelSearch=()=>{
setSearch(search)
    }
  return (
   <div className="image-home">
        <div className='shadow'></div>
   <div className='hero-data'>
               <motion.div className="home-text"
               initial={{y:-50,opacity:0}}
               animate={{y:0,opacity:1, transition:{duration:4}}} >
        <h2>Find Your Perfect Stay, Anywhere</h2>
        <p>Discover top-rated hotels and exclusie deals around the world Book with ease and start your jounery today.</p>
              <motion.button
              initial={{y:-10}}
              animate={{y:0,transition:{duration:0.5, repeat:Infinity, repeatType:'reverse', damping:2}}}
              >Book Now</motion.button>
        </motion.div>

        <motion.form
         initial={{y:-50,opacity:0}}
               animate={{y:0,opacity:1, transition:{duration:4}}}
        >
    <h3>Book Your Stay</h3>
    <input onChange={handelForm} name='destination' value={form.destination} className='destination' type="text" placeholder='Where are you going?' />
    <div className="info">
        <div className="data">
         <label htmlFor="check-out" >Check-out</label>
        <br/>
        <input onChange={handelForm}  value={form.checkout} id='check-out' type="date" name="check-out" />
          <br/>
           <label htmlFor="guests">Guests</label>
        <br/>
        <input onChange={handelForm} value={form.guest}  id='guests' type="number" min={1} name='guest' />
        
    </div>
    
    <div className="data">
       <label htmlFor="check-in">Check-in</label>
        <br/>
        <input onChange={handelForm} value={form.checkin} id='check-in' type="date" name='check-in' />
                   <br/>
         <label htmlFor="romms">Rooms</label>
        <br/>
        <input onChange={handelForm} value={form.rooms} name='rooms' id='romms' type="number" min={1}/>
        
    </div>
    </div>
    <button value={search} onClick={handelSearch}>Search</button>
</motion.form>
       </div>
        </div>
    
      
  )
}

export default Hero