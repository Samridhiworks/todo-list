import React, { useEffect, useState } from 'react'
import './App.css'
import Swiperslider from './components/Swiper'
import Subbar from './components/Subbar'
import Navbar from './components/Navbar'
import Popup from './Pages/Popup'
import Shop from './components/Shop'
import Productcard from './components/Productcard'
import BestSellers from './components/BestSellers'
import Banners from './components/Banners'
import Brands from './components/Brands'
import Instagram from './components/Instagram'
import Footer from './components/Footer'
import {store} from './Store/Store'
import {Provider} from 'react-redux'

const App =()=>{
 
return(
  <>
  <Provider store={store}>
  <Subbar/>
  <Navbar/>
  <Swiperslider/>
<Popup/>
<Shop/>
<Productcard/>
<BestSellers/>
<Banners/>
<BestSellers/>
<Brands/>
<Instagram/>
<Footer/>
</Provider>
  </>
)
}

export default App;