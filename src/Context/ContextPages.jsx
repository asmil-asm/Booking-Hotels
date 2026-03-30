import { useContext,createContext,useState } from "react";
const APIinfo=createContext();
export const ContextInfo=({children})=>{
      let [contect,setContect]=useState({fullName:'',email:'',message:''}) // contect


return (
<APIinfo.Provider value={{contect,setContect}}>
    {children}
</APIinfo.Provider>
)
}
export const UseInfo=()=>{
    return useContext(APIinfo)
}