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
import { FaRegClone } from "react-icons/fa";


import { TbTransfer } from "react-icons/tb";
import { LuArrowBigDown } from "react-icons/lu";
import { RiExchange2Line } from "react-icons/ri";
import { FaUsersViewfinder } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { Footer } from './Footer';


const Assets = () => {
  return (
    <div>
        <div className='pb-10 mx-2' >

            <section>
                <div className="flex items-center justify-between p-4 h-3.5rem">
                    <div className=" flex">
                        <Link className='flex'  to={'/home'}>
                            <img src={back} className="text-primary my-auto" size={24}/>
                        </Link>
                            <p className="text-primary text-base font-semibold ml-4">ASSETS</p>
                    </div>
                    <div className='flex gap-x-1'>
                        <img src={mic} className="text-primary my-auto" size={26}/>
                        <MdOutlineQrCodeScanner className="text-primary my-auto" size={22}/>
                    </div>
                </div>
            </section>
          
            <div className="rounded-xl mt-4 bg-gradient-to-t from-downfade to-primary px-1">


                <div className="flex justify-between">

                    <div className="flex my-auto">
                    <h4 className='text-white mt-2 ml-2 text-[12px] '>WALLET DETAILS</h4>
                    <h4 className='my-auto'><FaRegEye className='mt-2 mx-2 text-white'  size={18}/></h4>
                    </div>

                    <div className="flex justify-end">

                        <div className=" inline-flex items-center rounded-bl-lg r py-2 px-2 text-white gap-x-1.5">
                        
                        {/* <img src={trophy} className='trophy' /> */}

                        <span className="text-[12px] text-white"><span className='font-semibold text-[18px]'>0x</span>795hstv469jf88585Ff</span>
                        <FaRegClone className='' size={13}/>

                        {/* <button className="text-[10px] font-bold text-white rounded-2xl ml-1 w-[37px] h-[22px]">Go!</button> */}
                        </div>
                    </div>



                    </div>

                    <div className="flex items-start gap-4 p-2 sm:p-6 lg:p-8">
                        <div className="flex my-auto">
                            <MdOutlineCurrencyRupee className='text-white my-auto mt-3 ' size={17}/>
                            <span className='font-medium text-3xl text-white'>0</span>
                            
                        </div>                
                    </div>

                
            </div>


            <div className='mt-3 flex justify-around items-center'>
                          
                          <div className="w-1/5  rounded-md text-cente py-2">
                              
                              <div className="flex flex-col justify-center items-center bg-purple-200 py-1 rounded-md">
          
                                  {/* <PiUserListDuotone className='text-primary' size={25}/> */}
                                  <Link className=''  to={'/buyfund'}>
                                  <TbTransfer alt="" className='mx-auto my-auto'  size={22}/>
                                  <p className='text-[10px] font-semibold '>TRANSFER</p>
                                  </Link>
                              </div> 
                          </div>
                          <div className="w-1/5  rounded-md text-cente py-2  ">
                              
                              <div className="flex flex-col justify-center items-center  bg-purple-200 py-1 rounded-md">
                              <Link className=''  to={'/buyfund'}>
                                  {/* <RiFileList3Line className='text-primary' size={25}/> */}
                                  <LuArrowBigDown alt="" className='mx-auto my-auto'  size={22}/>
                                  <p className='text-[10px] font-semibold '>RECEVIE</p>
                              </Link>
                              </div> 
                          </div>
                          
                          <div className="w-1/5  rounded-md text-cente py-2  ">
                              
                              <div className="flex flex-col justify-center items-center  bg-purple-200 py-1 rounded-md">
                              <Link className=''  to={'/buyfund'}>
                                  {/* <LiaClipboardListSolid className='text-primary' size={25}/> */}
                                  <RiExchange2Line alt="" className='mx-auto my-auto'  size={22}/>
                                  <p className='text-[10px] font-semibold '>EXCHANGE</p>
                              </Link>
                              </div> 
                          </div>
                          <div className="w-1/5  rounded-md text-cente py-2  ">
                              
                              <div className="flex flex-col justify-center items-center  bg-purple-200 py-1 rounded-md">
                              <Link className=''  to={'/buyfund'}>
                                  {/* <FiUserCheck className='text-primary' size={25}/> */}
                                  <FaUsersViewfinder alt="" className='mx-auto my-auto'  size={22}/>
                                  <p className='text-[10px] font-semibold '>P2P</p>
                              </Link>
                              </div> 
                          </div>
                          
            </div>

            <section>
                <div className=''>

                
                <div className='flex justify-between py-2 mx-1 border-b-2 border-buynowbroder mb-2'>
                                    <div className='flex'>

                                        <div className="my-auto">
                                            <div className='bg-purple-500 rounded-full w-8 h-8' src="" >
                                            </div>
                                        </div>
                                        <div className='ml-2 text-[12px]'>
                                            <p className='text-[12px] text-black font-medium'>INRU</p>
                                            <p className='text-[10px] text-dategr font-medium flex'><MdOutlineCurrencyRupee className='my-auto  ' size={10}/>1000</p>
                                            {/* <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p> */}
                                        </div>

                                    </div>

                                    <div className="my-auto">
                                        <div className=''>
                                            <p className='text-black text-end text-[12px] font-semibold'>0</p>
                                        </div>
                                        <div>
                                            <p className='text-[10px] text-dategr font-medium flex'><BiLogoTailwindCss className='my-auto  ' size={10}/><MdOutlineCurrencyRupee className='my-auto  ' size={10}/>0</p>
                                        </div>
                                    </div>
                                    
                </div>
                <div className='flex justify-between py-2 mx-1 border-b-2 border-buynowbroder mb-2'>
                                    <div className='flex'>

                                        <div className="my-auto">
                                            <div className='bg-purple-500 rounded-full w-8 h-8' src="" >
                                            </div>
                                        </div>
                                        <div className='ml-2 text-[12px]'>
                                            <p className='text-[12px] text-black font-medium'>INRU</p>
                                            <p className='text-[10px] text-dategr font-medium flex'><MdOutlineCurrencyRupee className='my-auto  ' size={10}/>1000</p>
                                            {/* <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p> */}
                                        </div>

                                    </div>

                                    <div className="my-auto">
                                        <div className=''>
                                            <p className='text-black text-end text-[12px] font-semibold'>0</p>
                                        </div>
                                        <div>
                                            <p className='text-[10px] text-dategr font-medium flex'><BiLogoTailwindCss className='my-auto  ' size={10}/><MdOutlineCurrencyRupee className='my-auto  ' size={10}/>0</p>
                                        </div>
                                    </div>
                                    
                </div>
                <div className='flex justify-between py-2 mx-1 border-b-2 border-buynowbroder mb-2'>
                                    <div className='flex'>

                                        <div className="my-auto">
                                            <div className='bg-purple-500 rounded-full w-8 h-8' src="" >
                                            </div>
                                        </div>
                                        <div className='ml-2 text-[12px]'>
                                            <p className='text-[12px] text-black font-medium'>INRU</p>
                                            <p className='text-[10px] text-dategr font-medium flex'><MdOutlineCurrencyRupee className='my-auto  ' size={10}/>1000</p>
                                            {/* <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p> */}
                                        </div>

                                    </div>

                                    <div className="my-auto">
                                        <div className=''>
                                            <p className='text-black text-end text-[12px] font-semibold'>0</p>
                                        </div>
                                        <div>
                                            <p className='text-[10px] text-dategr font-medium flex'><BiLogoTailwindCss className='my-auto  ' size={10}/><MdOutlineCurrencyRupee className='my-auto  ' size={10}/>0</p>
                                        </div>
                                    </div>
                                    
                </div>
                </div>

            </section>


         </div> 

         <Footer/>
    </div>
  )
}

export default Assets
