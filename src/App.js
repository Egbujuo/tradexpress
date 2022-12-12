import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route  } from "react-router-dom";
import Navbar1 from './Components/Navbar1';
import GetStarted from './Pages/GetStarted';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Pages/LandingPage';
import { useEffect } from 'react';
import { useState } from 'react';
import GetStarted2 from './Pages/GetStarted2';
import InstantBuy from './Pages/InstantBuy';
import InstantSell from './Pages/InstantSell';
import Login from './Pages/Login';
import VerifyMall from './Pages/VerifyMall';
  

function App() {
  const [data, setData] = useState({rate:[]})
  useEffect(()=>{
   let fetchData = async(url)=>{
     let res = await fetch(url)
     let newData = await res.json()
     setData({...data,rate:newData.data})
   }

  fetchData("https://api.coinlore.net/api/tickers/?start=0&limit=5")
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar1/>
      <Routes>
        <Route path="/" element={<LandingPage rates = {data.rate}/>} />
       <Route path= "/getStarted" element={<GetStarted/>} />
       <Route path='/getStarted2' element={<GetStarted2/>} />
       <Route path='/instantBuy' element={<InstantBuy/>} />
       <Route path='/instantSell' element={<InstantSell/>} />
       <Route path='/login'element={<Login/>}  />
       <Route path='/verifyMall' element={<VerifyMall/>} />
    </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
