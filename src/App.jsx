
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import { useContext } from 'react'
import { RestaurantContext } from './Components/Context/RestaurantContext'

import MenuPage from './Components/Main/MenuPage'
import OfferPage from './Components/Main/OfferPage'
const sideBarData = [
  "Homepage" , "My Orders" , {
      "Authentication" : ["Askbootstrap" , "Login" , "Register" , "Forgot Password" , "Verification" , "Location"]
  },
  "favorites" , "Tranding" , "Most Popular" , "Restaurant Detail" , "CheckOut" , "Successful" , "Live Map" , {
      "profile" : ["profile" , "Delivery Support" , "Contact Us" , "Terms Of Use" , "Privacy & Policy"]
  },
  {
      "Error" : ["Not Found" , "Maintence" , "Coming Soon"]
  },
  {
      "Navigation Link Example" : ["Link Example 1" , "Link Example 2" , "Link Example 3" , "Link Example 4"]
  }
]
function App() {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(RestaurantContext);
  return (
    <div className='relative'>
      <Header  />
      <SideBar sideBarData={sideBarData} isSideBarOpen={isSideBarOpen}/>
      <MenuPage  />
      <OfferPage />
    </div>
  )
}

export default App