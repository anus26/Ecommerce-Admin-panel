import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Dashboard from './Pages/Dashboard'
export const MyContext = createContext()
const App = () => {
  return (
<>
<BrowserRouter>
<MyContext.Provider>
  <div className='w-[25%]'>

<Sidebar />
  </div>
  <div className='w-[75%]'>

<Header/> 
  </div>
<Routes>
<Route path="/" excat element={<Dashboard />} />
</Routes>
</MyContext.Provider>
</BrowserRouter>
</>
  )
}

export default App