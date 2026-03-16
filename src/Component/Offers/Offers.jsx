import offer_1 from '../../assets/Offers/offer_1.jpg'
import offer_2 from '../../assets/Offers/offer_2.jpg'
import offer_3 from '../../assets/Offers/offer_3.jpg'
import offer_4 from '../../assets/Offers/offer_4.jpg'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Offers = () => {
     let offers=[
        {
            id:1,
            title:"Sunny Escape Deal",
            description:"Get a free night stay and morning meal included",
            priceOff:25,
            expiryDate:"Aug 30",
            image:offer_1

        },
        {
            id:2,
            title:"Couple's Specail",
            description:"Relaxing packge with spa services for two",
            priceOff:20,
            expiryDate:"Sep 20",
            image:offer_2

        },
        {
            id:3,
            title:"Advance Luxury Saver",
            description:"Reserve two months early and enjoy discounts ",
            priceOff:25,
            expiryDate:"Aug 30",
            image:offer_3

        },
        {
            id:4,
            title:"Family Fun Package",
            description:"Enjoy theme park tickets and family-friendly",
            priceOff:15,
            expiryDate:"Oct 10",
            image:offer_4

        },
    ]
  return (
    <section className="Offers">
        <motion.h2    initial={{y:-50, opacity:0}}    
       whileInView={{ y:0, opacity:1 
 ,transition:{duration:3}}}>Get Our Special Offer</motion.h2>
        <motion.div className="cards"
        initial={{y:50, opacity:0}}
        whileInView={{y:0,opacity:1,transition:{duration:3}}}>
    {offers.map((offer,index)=>{
            return(
                <div key={index} className="card">
<img src={offer.image} alt="not found" />
<div className="info">
    <h3>{offer.title}</h3>
<p>{offer.description}</p>
<div className="date">
    Valid until {offer.expiryDate}
</div>
</div>
<div className="view-offer">
    <span>Save {offer.priceOff}% today</span>
    <button>View Offer</button>
</div>

                </div>
            )
    })}

</motion.div>

    </section>
  )
}

export default Offers