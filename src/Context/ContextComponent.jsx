import { useContext,createContext,useState } from "react";
const APIData=createContext();
import { hotels } from "../hotels";
export const  Contextdata=({children})=>{
  let [showAnsware,setShaowAnsware]=useState([]) // Quations
      var[menu,setMenu]=useState(false) // header Mobile
    var[language,setLnaguage]=useState('English') //languages
          let [images,setImages]=useState(false) // images HotelData
          let [showPhoto,setShowPhoto]=useState(false); // photo HotelData
          let [readMore,setReadMore]=useState(false) // read description HotelData
      let [form,setForm]=useState({destination:'',checkout:null,checkin:null,guest:null,rooms:null})// form hotel
let [search,setSearch]=useState('') // search hotel
const [filters, setFilters] = useState({
    search: '',
    ratings: [],
    locations: [],
    types: [],
    price: '',
    roomFeature: ''
  });
    const [filteredHotels, setFilteredHotels] = useState(hotels); //filtring result
  
    let [showFilter,setShowFilter]=useState(false); //Filter
let [showMoudelroom,setShowMoudelroom]=useState(false); // moudel room
    return(
        <APIData.Provider value={{showMoudelroom,setShowMoudelroom,filteredHotels, setFilteredHotels,showFilter,setShowFilter,filters, setFilters,showAnsware,setShaowAnsware ,showPhoto,setShowPhoto,menu,setMenu,images,setImages,language,setLnaguage,form,setForm,search,setSearch, readMore,setReadMore}}>
            {children}
        </APIData.Provider>
    )

}
export const Usedata=()=>{
    return useContext(APIData);

}