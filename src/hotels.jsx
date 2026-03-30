import hotel1 from './assets/Hotels/hotel1.webp'
import hotel2 from './assets/Hotels/hotel2.webp'
import hotel3 from './assets/Hotels/hotel3.webp'
import hotel4 from './assets/Hotels/hotel4.webp'
import hotel5 from './assets/Hotels/hotel5.webp'
import hotel6 from './assets/Hotels/hotel6.webp'
import Hotel_out from './assets/Hotels/Hotel1/hotel-out.webp'
import Room1 from './assets/Hotels/Hotel1/room1.webp'
import Room2 from './assets/Hotels/Hotel1/room2.webp'
import Room3 from './assets/Hotels/Hotel1/room3.webp'
import Food1 from './assets/Hotels/Hotel1/food1.webp'
import Food2 from './assets/Hotels/Hotel1/food2.webp'
import Food3 from './assets/Hotels/Hotel1/food3.webp'
import Animaties1 from './assets/Hotels/Hotel1/Aminities1.webp'
import Animaties2 from './assets/Hotels/Hotel1/Aminities2.webp'
import Animaties3 from './assets/Hotels/Hotel1/Aminities3.webp'
import Public1 from './assets/Hotels/Hotel1/Public1.webp'
import Public2 from './assets/Hotels/Hotel1/Puplic2.webp'
import Public3 from './assets/Hotels/Hotel1/Public3.webp'
import Room_details1 from './assets/Rooms/Room1.avif'
import Room_details2 from './assets/Rooms/Room2.avif'
import Room_details3 from './assets/Rooms/Room3.avif'
import Room_details4 from './assets/Rooms/Room4.avif'

import { PiCoffeeBold } from "react-icons/pi";
import { MdOutlineAddLocation } from "react-icons/md";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { IoIosFitness } from "react-icons/io";
import { FaSwimmingPool } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { IoGolfOutline } from "react-icons/io5";
import { IoCafe } from "react-icons/io5";
import { LuHeater } from "react-icons/lu";
import { MdOutlineBedroomParent } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineKingBed } from "react-icons/md";







// بيانات مؤقتة 



export let hotels=[
    {
      id:1,
      name:'Heeton Concept Hotel - Kensington',
      location:'Hotel near Earls Court,London',
      image:hotel1,
         aminities:[
{name:"delicious breakfast",
  icons:<PiCoffeeBold/>}
  ,
{name:  "perfect location",
  icons:<MdOutlineAddLocation/>
} ,
{name:"Free luggage storage",
  icons:<LiaLuggageCartSolid/>
},
{name:"fitness room",
  icons:<IoIosFitness/>
},
{
  name:"outdoor swimming pool",
  icons:<FaSwimmingPool/>
},
{name:"Wifi",
  icons:<CiCircleMore/>

}
],
facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
],
price:'$400',

rate:5,
description:`Located in the heart of Dubai's central Deira district, this luxury hotel offers free WiFi in all areas, comfortable, modern-style rooms and a rooftop pool. Guests can use the fitness center and sauna on site. All rooms feature warm décor and well-designed bathrooms with a bathtub and hairdryer. It features air conditioning, a flat-screen TV with satellite channels, a minibar as basic amenities, and a coffee maker. Guests can enjoy a swim in the rooftop pool at the  pool On the roof in Deira Dubai or work out in the fitness center which also offers a sauna.

There are 3 different dining options available including local and international gourmet cuisine. Rumours Café serves refreshing and hot drinks and delicious desserts.

Dubai International Airport is 7 km from Coral Hotel Dubai.`,


Hotel_images:{outImage:[ Hotel_out],
roomImage: [Room1, Room2, Room3],
foodImage: [Food1, Food2, Food3],
animatiesImage: [Animaties1, Animaties2, Animaties3],
publicImage: [Public1, Public2, Public3],
},
Year:2018,
phone:'+966-545050062',
email:'Violethotel1@gmail.com',
rooms:[
  {id:1,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
], 
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:540,


  },
   {id:2,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
], 
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:565,

  },
   {id:3,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
],
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:340,


  }
] 
    },
      {
         id:2,
      name:'Heeton Concept Hotel - Kensington',
      location:'Hotel near Earls Court,London',
            image:hotel2,

     aminities:[
{name:"delicious breakfast",
  icons:<PiCoffeeBold/>}
  ,
{name:  "perfect location",
  icons:<MdOutlineAddLocation/>
} ,
{name:"Free luggage storage",
  icons:<LiaLuggageCartSolid/>
},
{name:"fitness room",
  icons:<IoIosFitness/>
},
{
  name:"outdoor swimming pool",
  icons:<FaSwimmingPool/>
},
{name:"Wifi",
  icons:<CiCircleMore/>

}
],
description:`Located in the heart of Dubai's central Deira district, this luxury hotel offers free WiFi in all areas, comfortable, modern-style rooms and a rooftop pool. Guests can use the fitness center and sauna on site. All rooms feature warm décor and well-designed bathrooms with a bathtub and hairdryer. It features air conditioning, a flat-screen TV with satellite channels, a minibar as basic amenities, and a coffee maker. Guests can enjoy a swim in the rooftop pool at the  pool On the roof in Deira Dubai or work out in the fitness center which also offers a sauna.

There are 3 different dining options available including local and international gourmet cuisine. Rumours Café serves refreshing and hot drinks and delicious desserts.

Dubai International Airport is 7 km from Coral Hotel Dubai.`,
facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
],
price:'$1000',
rate:2,
Hotel_images:{outImage:[ Hotel_out],
roomImage: [Room1, Room2, Room3],
foodImage: [Food1, Food2, Food3],
animatiesImage: [Animaties1, Animaties2, Animaties3],
publicImage: [Public1, Public2, Public3],},
Year:2018,
phone:'+966-545050062',
email:'Violethotel1@gmail.com',
rooms:[
  {id:1,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
], 
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:540,


  },
   {id:2,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
], 
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:565,

  },
   {id:3,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
],
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:340,


  }
]    },
      {
         id:3,
      name:'Heeton Concept Hotel - Kensington',
      location:'Hotel near Earls Court,London',
            image:hotel3,
   aminities:[
{name:"delicious breakfast",
  icons:<PiCoffeeBold/>}
  ,
{name:  "perfect location",
  icons:<MdOutlineAddLocation/>
} ,
{name:"Free luggage storage",
  icons:<LiaLuggageCartSolid/>
},
{name:"fitness room",
  icons:<IoIosFitness/>
},
{
  name:"outdoor swimming pool",
  icons:<FaSwimmingPool/>
},
{name:"Wifi",
  icons:<CiCircleMore/>

}
],
description:`Located in the heart of Dubai's central Deira district, this luxury hotel offers free WiFi in all areas, comfortable, modern-style rooms and a rooftop pool. Guests can use the fitness center and sauna on site. All rooms feature warm décor and well-designed bathrooms with a bathtub and hairdryer. It features air conditioning, a flat-screen TV with satellite channels, a minibar as basic amenities, and a coffee maker. Guests can enjoy a swim in the rooftop pool at the  pool On the roof in Deira Dubai or work out in the fitness center which also offers a sauna.

There are 3 different dining options available including local and international gourmet cuisine. Rumours Café serves refreshing and hot drinks and delicious desserts.

Dubai International Airport is 7 km from Coral Hotel Dubai.`,
facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
],
price:'$300',
rate:5,
Hotel_images:{outImage:[ Hotel_out],
roomImage: [Room1, Room2, Room3],
foodImage: [Food1, Food2, Food3],
animatiesImage: [Animaties1, Animaties2, Animaties3],
publicImage: [Public1, Public2, Public3],},
Year:2018,
phone:'+966-545050062',
email:'Violethotel1@gmail.com',
rooms:[
  {id:1,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
], 
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:540,


  },
   {id:2,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
], 
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:565,

  },
   {id:3,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
],
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:340,


  }
]    },
      {  id:4,
      name:'Heeton Concept Hotel - Kensington',
      location:'Hotel near Earls Court,London',
            image:hotel4,

     aminities:[
{name:"delicious breakfast",
  icons:<PiCoffeeBold/>}
  ,
{name:  "perfect location",
  icons:<MdOutlineAddLocation/>
} ,
{name:"Free luggage storage",
  icons:<LiaLuggageCartSolid/>
},
{name:"fitness room",
  icons:<IoIosFitness/>
},
{
  name:"outdoor swimming pool",
  icons:<FaSwimmingPool/>
},
{name:"Wifi",
  icons:<CiCircleMore/>

}
],
description:`Located in the heart of Dubai's central Deira district, this luxury hotel offers free WiFi in all areas, comfortable, modern-style rooms and a rooftop pool. Guests can use the fitness center and sauna on site. All rooms feature warm décor and well-designed bathrooms with a bathtub and hairdryer. It features air conditioning, a flat-screen TV with satellite channels, a minibar as basic amenities, and a coffee maker. Guests can enjoy a swim in the rooftop pool at the  pool On the roof in Deira Dubai or work out in the fitness center which also offers a sauna.

There are 3 different dining options available including local and international gourmet cuisine. Rumours Café serves refreshing and hot drinks and delicious desserts.

Dubai International Airport is 7 km from Coral Hotel Dubai.`,
facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
],
price:'$300',
rate:5,
Hotel_images:{outImage:[ Hotel_out],
roomImage: [Room1, Room2, Room3],
foodImage: [Food1, Food2, Food3],
animatiesImage: [Animaties1, Animaties2, Animaties3],
publicImage: [Public1, Public2, Public3],},
Year:2018,
phone:'+966-545050062',
email:'Violethotel1@gmail.com',
rooms:[
  {id:1,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
], 
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:540,


  },
   {id:2,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
], 
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:565,

  },
   {id:3,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
],
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:340,


  }
]    },
      {
         id:5,
      name:'Heeton Concept Hotel - Kensington',
      location:'Hotel near Earls Court,London',
            image:hotel5,
   aminities:[
{name:"delicious breakfast",
  icons:<PiCoffeeBold/>}
  ,
{name:  "perfect location",
  icons:<MdOutlineAddLocation/>
} ,
{name:"Free luggage storage",
  icons:<LiaLuggageCartSolid/>
},
{name:"fitness room",
  icons:<IoIosFitness/>
},
{
  name:"outdoor swimming pool",
  icons:<FaSwimmingPool/>
},
{name:"Wifi",
  icons:<CiCircleMore/>

}
],
description:`Located in the heart of Dubai's central Deira district, this luxury hotel offers free WiFi in all areas, comfortable, modern-style rooms and a rooftop pool. Guests can use the fitness center and sauna on site. All rooms feature warm décor and well-designed bathrooms with a bathtub and hairdryer. It features air conditioning, a flat-screen TV with satellite channels, a minibar as basic amenities, and a coffee maker. Guests can enjoy a swim in the rooftop pool at the  pool On the roof in Deira Dubai or work out in the fitness center which also offers a sauna.

There are 3 different dining options available including local and international gourmet cuisine. Rumours Café serves refreshing and hot drinks and delicious desserts.

Dubai International Airport is 7 km from Coral Hotel Dubai.`,
facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
],
price:'$300',
rate:5,
Hotel_images:{outImage:[ Hotel_out],
roomImage: [Room1, Room2, Room3],
foodImage: [Food1, Food2, Food3],
animatiesImage: [Animaties1, Animaties2, Animaties3],
publicImage: [Public1, Public2, Public3],},
Year:2018,
phone:'+966-545050062',
email:'Violethotel1@gmail.com',
rooms:[
  {id:1,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
], 
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:540,


  },
   {id:2,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
], 
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:565,

  },
   {id:3,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
],
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:340,


  }
]     },
      {
         id:6,
      name:'Heeton Concept Hotel - Kensington',
      location:'Hotel near Earls Court,London',
            image:hotel6,

      aminities:[
{name:"delicious breakfast",
  icons:<PiCoffeeBold/>}
  ,
{name:  "perfect location",
  icons:<MdOutlineAddLocation/>
} ,
{name:"Free luggage storage",
  icons:<LiaLuggageCartSolid/>
},
{name:"fitness room",
  icons:<IoIosFitness/>
},
{
  name:"outdoor swimming pool",
  icons:<FaSwimmingPool/>
},
{name:"Wifi",
  icons:<CiCircleMore/>

}
],
facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
],
description:`Located in the heart of Dubai's central Deira district, this luxury hotel offers free WiFi in all areas, comfortable, modern-style rooms and a rooftop pool. Guests can use the fitness center and sauna on site. All rooms feature warm décor and well-designed bathrooms with a bathtub and hairdryer. It features air conditioning, a flat-screen TV with satellite channels, a minibar as basic amenities, and a coffee maker. Guests can enjoy a swim in the rooftop pool at the  pool On the roof in Deira Dubai or work out in the fitness center which also offers a sauna.

There are 3 different dining options available including local and international gourmet cuisine. Rumours Café serves refreshing and hot drinks and delicious desserts.

Dubai International Airport is 7 km from Coral Hotel Dubai.`,
price:'$700',
rate:5,
Hotel_images:{outImage:[ Hotel_out],
roomImage: [Room1, Room2, Room3],
foodImage: [Food1, Food2, Food3],
animatiesImage: [Animaties1, Animaties2, Animaties3],
publicImage: [Public1, Public2, Public3],},
Year:2018,
phone:'+966-545050062',
email:'Violethotel1@gmail.com',
rooms:[
  {id:1,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
], 
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:540,


  },
   {id:2,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
], 
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:565,

  },
   {id:3,
images:[Room_details1,Room_details2,Room_details3,Room_details4],
    title:'Junior Suite, 1 Queen Bed, City View',
    rating:4,
     facilities:[
  {name:'Resturant', icons:<MdOutlineFoodBank/>},
  {name:'Car park',icons:<FaParking/>},
  {name:'Sauna',icons:<LuHeater/>},
  {name:'Indoor Swimming Pool',icons:<FaSwimmingPool/>},
  {name:'Fetnees Room',icons:<IoIosFitness/>},
  {name:'Golf Course',icons:<IoGolfOutline/>},
  {name:'Cafe',icons:<IoCafe/>}
],
     aminities:[

      {name:' 2 bedrooms',icons:<MdOutlineBedroomParent/>},
      {name:"Sleeps",icons:<IoPeopleSharp/>},
      {name:'King Bed 3',icons:<MdOutlineKingBed/>}
 ],
  
    price:340,


  }
]    }
  ]