import { createContext, useState } from "react";

export const AppContext=createContext()
export default function AppProvider({children}){
    const [header,setHeader]=useState(false)
    const [user ,setUser]=useState(()=>{
        return localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null
    })
    const Signin =(data)=>{
        setUser(data)
        localStorage.setItem('user',JSON.stringify(data))
    }
        const Signup =(data)=>{
        setUser(data)
        localStorage.setItem('user',JSON.stringify(data))
    }
    const logout=()=>{
        setUser(null)
        localStorage.removeItem('user')
    }
    return (
        <AppContext.Provider  value={{header,setHeader,user,Signin,logout,Signup}}>
            {children}
        </AppContext.Provider>
    )
}