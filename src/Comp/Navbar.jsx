import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LuScanQrCode } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuHeadset } from "react-icons/lu";
import endpoints from "../../ApiKeys";
import litlogo from './../assets/image/lit-logo.svg';
import logowhite from "./../assets/image/logowhite.png";
import logo from './../assets/image/logo.png';
import nav1 from './../assets/image/nav1.svg';
import nav2 from './../assets/image/nav2.svg';
import nav3 from './../assets/image/nav3.svg';

import menu from "./../assets/image/menu.svg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [loading, setLoading] = useState(false);  // manage loading state
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login page if no token
    }
  }, [navigate]);

  const handleLogout = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem('token');
    console.log(token);
  
    if (!token) {
      toast.error("No token found. Please log in again.");
      return;
    }
  
    setLoading(true);  // Show loader when starting the logout request
  
    try {
      const response = await fetch(endpoints.logout, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
  
      const result = await response.text();
      if (response.ok) {
        toast.success("Logged out successfully!");
        localStorage.removeItem('token'); // Clear the token from localStorage
        navigate('/login');  // Ensure this goes to your login page route
      } else {
        toast.error("Logout failed! Please try again.");
      }
      console.log(result);
    } catch (error) {
      toast.error("An error occurred during logout.");
      console.error(error);
    } finally {
      setLoading(false); // Hide loader once the request is completed
    }
  };
  

  return (
    < >
      <nav className="text-balck bg-primary sticky top-0 z-40 h-[56px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-13 items-center ">
            <div className="flex-shrink-0 hidden w-20">
              {/* <img src={logo1} alt="" /> */}
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              {/* <NavLink exact to="/" className="hover:bg-main px-3 py-2 text-white rounded-md font-bold"> Login</NavLink> */}
              {/* <NavLink exact to="/home" className="hover:bg-main px-3 py-2 text-white rounded-md font-bold"> Home</NavLink> */}
              {/* <NavLink exact to="/rewards" className="hover:bg-main px-3 py-2 text-white rounded-md font-bold"> User</NavLink> */}
            </div>
            {/* Hamburger Icon */}
            <div className="md:hidden w-20">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-main focus:outline-none"
              >
                {/* <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg> */}
                {/* <BiMenuAltRight size={30} /> */}
                <img src={menu} alt="" />
              </button>
            </div>

            <div className='flex my-auto'>
              {/* <RiMoneyRupeeCircleFill className='text-white' size={23} /> */}
              {/* <img src={litlogo} className="" alt="" /> */}
              <img src={logowhite} alt="" className="w-5 h-5 my-auto" />
              <img src={logo} className="inset-0 w-10 object-fit " alt="" />
              {/* <h6 className='text-white font-bold font-Crimson heading'>BOOKNXT</h6> */}
            </div>

            <div className='flex my-auto'>
              {/* <LuScanQrCode className='text-white' size={23} />
              <IoIosNotificationsOutline className='text-white mx-1' size={23} />
              <LuHeadset className='text-white' size={23} /> */}
                
                <Link className=' flex'  to={'/buyfund'}>
                <img src={nav1} alt="" />
                </Link>
              
                <Link className=' flex mx-2'  to={'/buyfund'}>
              <img src={nav2} className='text-white' alt="" />
              </Link>

              <Link className=' flex'  to={'/buyfund'}>
              <img src={nav3} alt="" />
              </Link>

              
            </div>

          </div>

        </div>

        {/* Right-Side Sliding Menu */}
        <div
          className={`fixed top-10 left-0 w-52 h-full bg-primary text-white transform 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="p-5">
            <div className="mt-8 space-y-4">
              {/* <NavLink exact to="/" className="block px-3 font-bold py-2 rounded-md hover:bg-main"> Login</NavLink> */}
              <NavLink exact to="/home" className="block font-bold px-3 py-2 rounded-md hover:bg-main"> Home</NavLink>
              <NavLink exact to="/buyfund" className="block font-bold px-3 py-2 rounded-md hover:bg-main"> Buy Stake</NavLink>
              <NavLink exact to="/rewards" className="block font-bold px-3 py-2 rounded-md hover:bg-main"> Rewards</NavLink>
              <NavLink exact to="/rewardgenealogy" className="block font-bold px-3 py-2 rounded-md hover:bg-main"> Genealogy</NavLink>
              <div className="block font-bold pl-7 py-2 rounded-md hover:bg-main absolute left-0 w-full" onClick={handleLogout} style={{ bottom: '110px' }}>{loading ? (
    <svg
      className="w-5 h-5 animate-spin mr-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="none"
        d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
      ></path>
    </svg>
  ) : (
    'Logout'
  )}</div>

            </div>

          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
