import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Layouts from './Components/Layouts'
import Home from './Pages/Home'
import Signin from './Pages/Authentication/Signin'

export const MyContext = createContext()

const App = () => {
  return (
    <BrowserRouter>
      <MyContext.Provider value={{}}>
        <Routes>
          {/* Layout parent route */}
          <Route path="/" element={<Layouts />}>
            {/* Default page */}
            <Route index element={<Dashboard />} />
            {/* Other pages */}
            <Route path="home" element={<Home />} />
          </Route>
            <Route path="signin" element={<Signin />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  )
}

export default App
