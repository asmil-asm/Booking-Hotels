import { useContext,createContext,useState } from "react";
const APIinfo=createContext();
export const ContextInfo=({children})=>{
      let [contect,setContect]=useState({fullName:'',email:'',message:''}) // contect
  let [showFilter,setShowFilter]=useState(false); //Filter


return (
<APIinfo.Provider value={{contect,setContect,showFilter,setShowFilter}}>
    {children}
</APIinfo.Provider>
)
}
export const UseInfo=()=>{
    return useContext(APIinfo)
}