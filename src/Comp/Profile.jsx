import group from './../assets/image/Group.svg';
import coin from './../assets/image/coin.svg';
import man from './../assets/image/man.png';
import Navbar from './Navbar';
import { Footer } from './Footer';
import Invites2 from './../assets/image/Invites2.svg';

import React from 'react'
import { FaRegEye } from "react-icons/fa6";
import trophy from './../assets/image/trophy.svg';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Link } from 'react-router-dom';
import send from './../assets/image/send.svg';
import resive from './../assets/image/resive.svg';
import back from './../assets/image/back.svg';
import mic from './../assets/image/mic.svg';
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { BiSolidCopy } from "react-icons/bi";



import { TbTransfer } from "react-icons/tb";
import { LuArrowBigDown } from "react-icons/lu";
import { RiExchange2Line } from "react-icons/ri";
import { FaUsersViewfinder } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { LuLockKeyhole } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { GoRocket } from "react-icons/go";



const Profile = () => {
  return (
        <>
            <div className='pb-20 overflow-hidden'>

                <section>
                    <div className="flex items-center justify-between p-4 h-3.5rem">
                        <div className="invisible">
                            <Link className='flex'  to={'/home'}>
                                <img src={back} className="text-primary my-auto" size={24}/>
                            </Link>
                        </div>
                        <div>
                        <p className="text-primary text-base text-[17px] font-semibold ml-4">ME</p>
                        </div>
                        <div className='flex gap-x-1'>
                            <FaRegBell className="text-primary my-auto" size={22}/>
                            <img src={mic} className="text-primary my-auto" size={26}/>

                        </div>
                    </div>
                </section>

                <section className="hero ">
                    <div className="container ">
                        <div className="w-full flex ">

                            <div className="min-1/2 ">
                                
                            <div className=' flex items-center justify-end  my-1 ml-4'>
                                    <div className='flex mt-2 z-1 '>

                                        <div className="my-auto ">
                                            <img className=' rounded-full w-7 ' src={man} alt="" />
                                        </div>
                                        <div className=' mx-2'>
                                            <p className='text-[16px] font-semibold'>M1728813198256</p>
                                            <p className='text-[10px] font-semibold flex items-center text-dategr'>UID : 1728813198256 <BiSolidCopy className='ml-1' size={15}/></p>
                                        </div>

                                    </div>

                                    {/* <div className=''>
                                            <p className='text-[12px] ml-1 font-semibold text-neutral-500 py-2'>Wie</p>
                                            
                                    </div>   */}

                                </div>
                                
                            </div>

                            {/* <div className="w-auto  ">
                                <img src={group} className='absolute right-0 mt-5' />
                            </div>

                            <div className='login-three absolute right-0 top-0 '>

                            </div> */}
                            

                        </div>
                        
                    </div>
                </section>

                

                <section>
                                <div className='mx-3'>
                
                                
                                <div className='flex justify-between py-4 mx-1 border-b-2 border-purple-200 '>
                                                    <div className='flex items-center'>
                
                                                        <div className="my-auto">
                                                            <IoWalletOutline className='text-dategr' size={25}/>
                                                        </div>
                                                        <div className='ml-4 text-[12px]'>
                                                            <p className='text-[15px] font-medium text-dategr'>Paymenyt Accounts</p>
                                                            {/* <p className='text-[10px] text-dategr font-medium flex'><MdOutlineCurrencyRupee className='my-auto  ' size={10}/>1000</p> */}
                                                            {/* <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p> */}
                                                        </div>
                
                                                    </div>
                
                                                    <div className="my-auto">
                                                        <MdOutlineKeyboardArrowRight className='text-dategr' size={24}/>
                                                    </div>
                                                    
                                </div>
                                <div className='flex justify-between py-4 mx-1 border-b-2 border-purple-200 '>
                                         <Link className=' flex justify-between w-full'  to={'/kyc'}>

                                                    <div className='flex items-center'>
                
                                                        <div className="my-auto">
                                                            <MdSecurity className='text-dategr' size={25}/>
                                                        </div>
                                                        <div className='ml-4 text-[12px]'>
                                                            <p className='text-[15px] font-medium text-dategr'>KYC Certified</p>
                                                            {/* <p className='text-[10px] text-dategr font-medium flex'><MdOutlineCurrencyRupee className='my-auto  ' size={10}/>1000</p> */}
                                                            {/* <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p> */}
                                                        </div>
                
                                                    </div>
                
                                                    <div className="my-auto">
                                                        <MdOutlineKeyboardArrowRight className='text-dategr' size={24}/>
                                                    </div>
                                        </Link>        
                                </div>
                                <div className='flex justify-between py-4 mx-1  '>
                                                    <div className='flex items-center'>
                
                                                        <div className="my-auto">
                                                            <LuLockKeyhole className='text-dategr' size={25}/>
                                                        </div>
                                                        <div className='ml-4 text-[12px]'>
                                                            <p className='text-[15px] font-medium text-dategr'>Paymenyt Password</p>
                                                            {/* <p className='text-[10px] text-dategr font-medium flex'><MdOutlineCurrencyRupee className='my-auto  ' size={10}/>1000</p> */}
                                                            {/* <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p> */}
                                                        </div>
                
                                                    </div>
                
                                                    <div className="my-auto">
                                                        <MdOutlineKeyboardArrowRight className='text-dategr' size={24}/>
                                                    </div>
                                                    
                                </div>
                                
                                
                                </div>

                                <hr className='h-2.5 bg-purple-200 text-purple-200' />


                                <div className='mx-3'>
                
                                
                                <div className='flex justify-between py-4 mx-1 border-b-2 border-purple-200 '>
                                                    <div className='flex items-center'>
                
                                                        <div className="my-auto">
                                                            <IoBookOutline className='text-dategr' size={25}/>
                                                        </div>
                                                        <div className='ml-4 text-[12px]'>
                                                            <p className='text-[15px] font-medium text-dategr'>Paymenyt Accounts</p>
                                                            {/* <p className='text-[10px] text-dategr font-medium flex'><MdOutlineCurrencyRupee className='my-auto  ' size={10}/>1000</p> */}
                                                            {/* <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p> */}
                                                        </div>
                
                                                    </div>
                
                                                    <div className="my-auto">
                                                        <MdOutlineKeyboardArrowRight className='text-dategr' size={24}/>
                                                    </div>
                                                    
                                </div>
                                <div className='flex justify-between py-4 mx-1 '>
                                                    <div className='flex items-center'>
                
                                                        <div className="my-auto">
                                                            <GoRocket className='text-dategr' size={25}/>
                                                        </div>
                                                        <div className='ml-4 text-[12px]'>
                                                            <p className='text-[15px] font-medium text-dategr'>Version</p>
                                                            {/* <p className='text-[10px] text-dategr font-medium flex'><MdOutlineCurrencyRupee className='my-auto  ' size={10}/>1000</p> */}
                                                            {/* <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p> */}
                                                        </div>
                
                                                    </div>
                
                                                    <div className="my-auto">
                                                        {/* <MdOutlineKeyboardArrowRight className='text-dategr' size={24}/> */}
                                                        <p className='text-dategr font-semibold'>2.0.6</p>
                                                    </div>
                                                    
                                </div>
                               
                                
                                
                                </div>
                                
                
                            </section>
                
            
            </div>
            <Footer/>
        </>
  )
}

export default Profile;
