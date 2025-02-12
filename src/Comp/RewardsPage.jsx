import group from './../assets/image/Group.svg';
import coin from './../assets/image/coin.svg';
import man from './../assets/image/man.png';
import Navbar from './Navbar';
import { Footer } from './Footer';
import Invites2 from './../assets/image/Invites2.svg';



const RewardsPage = () => {
  return (
        <>
            <Navbar/>
            <div className='pb-20 overflow-hidden'>

                <section className="hero ">
                    <div className="container ">
                        <div className="w-full flex ">

                            <div className="min-1/2 ">
                                
                            <div className='flex flex-col justify-between my-1 ml-4'>
                                    <div className='flex mt-2 z-1 '>

                                        <div className="my-auto ">
                                            <img className=' rounded-full w-7 ' src={man} alt="" />
                                        </div>
                                        <div className='my-auto ml-2'>
                                            <span className='text-[16px]'>M1728813198256</span>
                                        </div>

                                    </div>

                                    <div className=''>
                                            <p className='text-[12px] ml-1 font-semibold text-neutral-500 py-2'>Withdrawable</p>
                                            <span className='text-[32px] font-medium text-black '>0</span>
                                            <p className='text-[12px] text-primary font-medium'>Withdrawable</p>
                                            <div className='flex items-center'>
                                                <p className='text-[12px] text-gray-600 font-medium'>Total Rewards</p>
                                                <span className='ml-1 text-[12px] font-semibold text-purple-800'>0</span>
                                            </div>
                                        </div>

                                </div>
                                
                            </div>

                            <div className="w-auto  ">
                                <img src={group} className='absolute right-0 mt-5' />
                            </div>

                            <div className='login-three absolute right-0 top-0 '>

                            </div>
                            

                        </div>
                        
                    </div>
                </section>

                

                <div className='border-1 rounded-md border-invitborder bg-invitbg mx-4 py-3 px-2 flex justify-between'>
                    <div>
                        <p className='text-neutral-500 font-semibold text-[12px]'>My invitation code</p>
                        <p className='text-black text-[12px] font-semibold'>m2463l@g</p>
                    </div>
                    <div>
                        <p className='text-neutral-500 font-semibold text-[12px]'>My invitation code</p>
                        <p className='text-black  text-[12px] font-semibold'>0</p>
                    </div>
                    <div className='flex items-center'>
                        {/* <BsBoxArrowUpRight className='' size={18}/> */}
                        <img src={Invites2} className='' />

                    </div>

                </div>

                <div className='level-box rounded-md bg-white mt-4 mx-4 py-3 px-2 flex justify-between'>
                    <div>
                        <p className='text-neutral-500 font-semibold text-[12px]'>Level</p>
                        <p className='text-black text-[12px] font-semibold'>Member</p>
                    </div>
                    <div>
                        <p className='text-neutral-500 font-semibold text-[12px]'>Balance</p>
                        <p className='text-black  text-[12px] font-semibold'>0</p>
                    </div>
                    <div className='flex items-center'>
                        <button className='bg-primary px-3 py-2 text-[16px] rounded-md text-white font-semibold'>Recharge</button>
                    </div>

                </div>
                
                <div className='level-box rounded-md bg-white mt-1 mx-4 py-4 px-2 flex justify-between'>
                    
                    <div className='flex '>

                    <img src={coin} className='' alt="" />
                    <p className='text-[12px] ml-1 font-semibold text-neutral-500'>Congratulations! Your reward is ready to be redeemed. Claim it now and enjoy the benefits!</p>

                    </div>
                    
                    {/* <div>
                        <p className='text-neutral-500 font-bold text-xs'>Balance</p>
                        <p className='text-black  text-xs font-bold'>0</p>
                    </div> */}
                    

                </div>
                <div className='level-box rounded-md bg-white mt-1 mx-4 py-3 px-2 flex justify-between'>
                    
                    <div className='flex '>

                    <img src={coin} className='' alt="" />
                    <p className='text-[12px]  ml-1 font-semibold text-neutral-500'>Congratulations! Your reward is ready to be redeemed. Claim it now and enjoy the benefits!</p>

                    </div>
                    
                    {/* <div>
                        <p className='text-gray-500 font-bold text-xs'>Balance</p>
                        <p className='text-black  text-xs font-bold'>0</p>
                    </div> */}
                    <div className='flex items-center'>
                        <button className='bg-primary px-3 py-2 text-[12px] rounded-md text-white font-semibold '>Update</button>
                    </div>

                </div>
                <div className='level-box rounded-md bg-white mt-1 mx-4 py-3 px-2 flex justify-between'>
                    
                    <div className='flex '>

                    <img src={coin} className='' alt="" />
                    <p className='text-[12px]  ml-1 font-semibold text-neutral-500'>Congratulations! Your reward is ready to be redeemed. Claim it now and enjoy the benefits!</p>

                    </div>
                    
                    {/* <div>
                        <p className='text-gray-500 font-bold text-xs'>Balance</p>
                        <p className='text-black  text-xs font-bold'>0</p>
                    </div> */}
                    <div className='flex items-center'>
                        <button className='bg-primary px-3 py-2 text-[12px] rounded-md text-white font-semibold '>Update</button>
                    </div>

                </div>
                <div className='level-box rounded-md bg-white mt-1 mx-4 py-3 px-2 flex justify-between'>
                    
                    <div className='flex '>

                    <img src={coin} className='' alt="" />
                    <p className='text-[12px]  ml-1 font-semibold text-neutral-500'>Congratulations! Your reward is ready to be redeemed. Claim it now and enjoy the benefits!</p>

                    </div>
                    
                    {/* <div>
                        <p className='text-gray-500 font-bold text-xs'>Balance</p>
                        <p className='text-black  text-xs font-bold'>0</p>
                    </div> */}
                    <div className='flex items-center'>
                        <button className='bg-primary px-3 py-2 text-[12px] rounded-md text-white font-semibold '>Update</button>
                    </div>

                </div>
                
            
            </div>
            <Footer/>
        </>
  )
}

export default RewardsPage;
