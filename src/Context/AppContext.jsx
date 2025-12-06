import axios from "axios";
import { createContext, useState } from "react";


export const AppContext=createContext()
export default function AppProvider({children}){
    const [header,setHeader]=useState(false)
    const [search ,setSearch]=useState("")
    //   const [form ,setForm]=useState({
    //       path:''
    //     })
    const [user ,setUser]=useState(()=>{
        return localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null
    })
   

const sidebarItems=[

    { name: "eCommerce", path: "/" },
    { name: "Analytics", path: "/analytics" },
    { name: "Marketing", path: "/marketing" },
      { name: "CRM", path: "/crm" },
      { name: "Stocks", path: "/stocks" },
        { name: "NewProduct", path: "/Product" },
      { name: "Saas", path: "/saas", isNew: true },
      { name: "Logistics", path: "/logistics", isNew: true },
]

      const filteritems = sidebarItems.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

const Signin =(data)=>{
    
    setUser(data)
    localStorage.setItem('user',JSON.stringify(data))
    }
     const logout=async(e)=>{
e.preventdefault
try {
   const res=await axios.delete("http://localhost:5000/api/v1/user/logout",{
      withCredentials: true
   })
   console.log("logout Successfully",res.data);
   
   setUser(null)
   localStorage.removeItem('user') 
   
   
} catch (error) {
console.log(error);

}

     }
        const Signup =(data)=>{
        setUser(data)
        localStorage.setItem('user',JSON.stringify(data))
    }
    // const logout=()=>{
    //     setUser(null)
    //     localStorage.removeItem('user')
    // }
    return (
        <AppContext.Provider  value={{header,setHeader,user,Signin,logout,Signup,search,setSearch,filteritems,sidebarItems,setUser}}>
            {children}
        </AppContext.Provider>
    )
}