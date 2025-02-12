 
import './App.css'
// import Navbar from './Comp/Navbar'
import ScrollToTop from './Comp/ScrollToTop'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import { Footer } from './Comp/Footer'
import LoginForm from './Comp/LoginForm'
import RegisterForm from './Comp/RegisterForm'
import RewardsPage from './Comp/RewardsPage'
import { MainDashboard } from './Comp/MainDashboard'
import HomeScreen from './Comp/HomeScreen'
import BuyFund from './Comp/BuyFund'
import BuyDetails from './Comp/FundDetails'
import BuyHistory from './Comp/BuyHistory'
import RewardGenealogy from './Comp/RewardGenealogy'
import Assets from './Comp/Assets'
import Profile from './Comp/Profile'
import Kyc from './Comp/Kyc'

function App() {


  return (
    <>
        
          <BrowserRouter>
          <ScrollToTop/>

          <Routes>
          {/* Public Routes */}
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          
          {/* Routes under MainDashboard Layout */}
          <Route path="/" element={<MainDashboard />}>
            <Route index element={<HomeScreen />} /> 
            <Route path="home" element={<HomeScreen />} />
            <Route path="dashboard" element={<MainDashboard />} />
            <Route path="rewards" element={<RewardsPage />} />
            <Route path="buyfund" element={<BuyFund/>} />
            <Route path="buydetails" element={<BuyDetails/>} />
            <Route path="buyhistory" element={<BuyHistory/>} />
            <Route path="rewardgenealogy" element={<RewardGenealogy/>} />
            <Route path="assets" element={<Assets/>} />
            <Route path="profile" element={<Profile/>} />
            <Route path="kyc" element={<Kyc/>} />
          </Route>
        </Routes>
                  
          </BrowserRouter>
    </>
  )
}

export default App
