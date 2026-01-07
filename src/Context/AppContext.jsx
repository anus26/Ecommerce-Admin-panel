import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { io} from "socket.io-client";


export const AppContext=createContext()
export default function AppProvider({children}){
    const [header,setHeader]=useState(false)
    const [socket ,setSocket]=useState(null)
    const [onlineUsers,setOnlineusers]=useState({})
    const  [liveVisitors,setLiveVisitors]=useState(0)
    const [search ,setSearch]=useState("")
    const [user ,setUser]=useState(()=>{
        return localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null
    })
    const messageSound=new Audio  ("/sms-185447.mp3")
    useEffect(()=>{
        console.log("auth user",user);
        if (user?._id) {
            const newsocket=io(
                "https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app"
                ,{
                    withCredentials:true,
                    auth:{
                        userId:user._id
                    },
                      transports: ["websocket"],
                },
            )
            setSocket(newsocket)
         

            newsocket.on("onlineUsers",(user)=>{
                setOnlineusers(user)
                console.log("Online user",user);
                console.log("Socket Id",newsocket.id);
                
                
            })
            newsocket.on("liveVisitors",(user)=>{
                setLiveVisitors(user)
                console.log("live ",user);
                
            })
            return ()=>{
                newsocket.disconnect()
                setSocket(null)
            }
        }
        else{
        if (socket) {
            socket.disconnect()
            setSocket(null)
            
        }
    }
    },[user])
   

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
e.preventDefault()
try {
   const res=await axios.delete("https://ashamed-shirlene-anusraza123bm-0a1cc794.koyeb.app/api/v1/user/logout",{
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
        <AppContext.Provider  value={{socket, messageSound,onlineUsers,liveVisitors, header,setHeader,user,Signin,logout,Signup,search,setSearch,filteritems,sidebarItems,setUser}}>
            {children}
        </AppContext.Provider>
    )
}