import { createContext, useState } from "react";

export const AppContext=createContext()
export default function AppProvider({children}){
    const [header,setHeader]=useState(false)
    return (
        <AppContext.Provider  value={{header,setHeader}}>
            {children}
        </AppContext.Provider>
    )
}