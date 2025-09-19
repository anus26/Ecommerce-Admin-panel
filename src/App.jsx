import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Layouts from './Components/Layouts'
import Home from './Pages/Home'
import Signin from './Pages/Authentication/Signin'
import Signup from './Pages/Authentication/Signup'
import Verification from './Pages/Authentication/Verification'
import Reset from './Pages/Authentication/Reset'
import Product from './Components/Products'
import AddProduct from './Pages/AddProduct'



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
            <Route path='addProduct' element={<AddProduct/>}/>
            <Route path='Product' element={<Product/>}/>
          </Route>
            <Route path="signin" element={<Signin />} />
               <Route path="signup" element={<Signup />} />

                  <Route path="verification" element={<Verification />} />
                  <Route path="reset" element={<Reset />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  )
}

export default App
