import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Layouts from './Components/Layouts'
import Home from './Pages/Home'
import Signin from './Pages/Authentication/Signin'
import Signup from './Pages/Authentication/Signup'
import Verification from './Pages/Authentication/Verification'
import Reset from './Pages/Authentication/Reset'
import Product from './Components/Products'
import AddProduct from './Components/AddProduct'
import SingleProduct from './Components/AddProduct/SingleProduct'
import Invoice from './Pages/Invoice'
import Header from './Components/Header'
import SingleInvocie from './Components/SingleInvocie'
import Invoices from './Components/Invoices'
import Billing from './Components/Billing'
import Transactions from './Components/Transactions'
import SingleTransactions from './Components/SingleTransactions'
import Analytics from './Pages/Analytics'
import ProtectedRoutes from './Components/ProtectedRoutes'
import Profile1 from './Components/Account/Profile1'
import Chat from './Components/Chat'





const App = () => {
  const {sidebar}=Header
  return (
    <BrowserRouter>
        <Routes>
               <Route path="signin" element={<Signin />} />
               <Route path="signup" element={<Signup />} />
               <Route path="verification" element={<Verification />} />
               <Route path="reset" element={<Reset />} />

          <Route path="/" element={
               <ProtectedRoutes>
            
            <Layouts />
               </ProtectedRoutes>
            }>
          
          
            <Route index element={<Dashboard />} />
            <Route path='profile1' element={<Profile1/>} />
            <Route path="home" element={<Home />} />
            <Route path='addProduct' element={<AddProduct/>}/>
              <Route path='singleproduct' element={<SingleProduct/>}/>
            <Route path='Product' element={<Product/>}/>
            <Route path='createinvoice' element={<Invoice/>}/>
            <Route  path='invoice' element={<SingleInvocie/>}/>
        <Route path='invoices' element={<Invoices/>}/>
               <Route path='billing' element={<Billing/>}/>
                  <Route path='transactions' element={<Transactions/>}/>
                   <Route path='singletransactions' element={<SingleTransactions/>}/>
                   <Route path='analytics' element={<Analytics/>}/>
                   <Route path='chat' element={<Chat/>}/>
          </Route>
        </Routes>
      {/* </MyContext.Provider> */}
    </BrowserRouter>
  )
}


export default App
