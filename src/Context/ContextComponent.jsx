import { useContext,createContext,useState } from "react";
const APIData=createContext();
export const  Contextdata=({children})=>{
  let [showAnsware,setShaowAnsware]=useState([]) // Quations
      var[menu,setMenu]=useState(false) // header Mobile
    var[language,setLnaguage]=useState('English') //languages
          let [images,setImages]=useState(false) // images HotelData
          let [showPhoto,setShowPhoto]=useState(false); // photo HotelData
          let [readMore,setReadMore]=useState(false) // read description HotelData
      let [form,setForm]=useState({destination:'',checkout:null,checkin:null,guest:null,rooms:null})// form hotel
let [search,setSearch]=useState('') // search hotel

    return(
        <APIData.Provider value={{showAnsware,setShaowAnsware ,showPhoto,setShowPhoto,menu,setMenu,images,setImages,language,setLnaguage,form,setForm,search,setSearch, readMore,setReadMore}}>
            {children}
        </APIData.Provider>
    )

}
export const Usedata=()=>{
    return useContext(APIData);

}