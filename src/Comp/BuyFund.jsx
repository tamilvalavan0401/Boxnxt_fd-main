
import { Link, useNavigate } from "react-router-dom";
import back from './../assets/image/back.svg';
import mic from './../assets/image/mic.svg';
import uptwo from './../assets/image/uptwo.svg';
import doll from './../assets/image/doll.svg';
import { Footer } from "./Footer";
import { useEffect, useState } from "react";


const BuyFund = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();
  
    // Handle input change
    const handleInputChange = (e) => {
      const value = e.target.value;
      console.log(value); // Log the input value
  
      // Allow only numbers or an empty string
      if (value === '' || !isNaN(value)) {
        setInputValue(value);
      }
    };
  
    // Handle input limit to 10,000
    const handleInputLimit = (e) => {
      let value = e.target.value;
      // Ensure the value does not exceed 10,000
      if (parseFloat(value) > 10000) {
        value = 10000;
      }
      setInputValue(value);
    };
  
    // Handle button click
    const handleButtonClick = () => {
      console.log(inputValue); // Log the value before saving
  
      // Store the value in localStorage
      localStorage.setItem('inputValue', inputValue);
      console.log('Saved to localStorage:', inputValue);
      if(inputValue ){
      navigate('/buydetails');
      }
      
    };


    
  return (
    <div>
        
        <div className="flex flex-col justify-between h-screen ">

            <div>

                <section>
                        <div className="flex items-center justify-between p-4 h-3.5rem">
                            <div className=" flex">
                                <Link className='flex'  to={'/home'}>
                                    <img src={back} className="text-primary my-auto" size={24}/>
                                </Link>
                                <p className="text-primary text-base font-semibold ml-4">Buy Fund</p>
                            </div>
                            <div>
                                <img src={mic} className="text-primary my-auto" size={26}/>
                            </div>
                        </div>
                </section>

                <section>
                    <div className="bg-primary flex flex-col h-[176px] mx-3 mt-2 rounded-xl p-1 justify-between ">

                        <div className="text-center mx-auto">
                            <span className="text-xs text-purple-300">Enter Amount</span>
                        </div>

                        <div className="flex justify-center items-center bg-bayfundbxinside h-[100px] rounded-xl mx-2">
                            <div className="flex ml-17">
                                <img src={doll} className="mr-1" size={26} alt="Doll" />
                                <input 
                                    value={inputValue}
                                    onChange={handleInputLimit} 
                                    placeholder="0" 
                                    type="number"  
                                    className="doll-rs font-medium text-white w-23 border-none outline-none text-[36px]"
                                    max="10000" // Set a limit of 10,000
                                />
                            </div>
                        </div>

                        <div className=" w-full rounded-xl text-center bg-gradient-to-b from-limittop to-limitbottom">
                            <p className="text-limittext p-[4px] text-[12px]">Limit ($100 - $10,000)</p>
                        </div>

                    </div>
                </section>

                <section>
                    <div className="bg-purple-200 mx-3 my-2 flex justify-between items-center h-[36px] rounded-full px-1 today-main">
                        <div className="flex items-center ml-2">
                            {/* <MdKeyboardDoubleArrowUp className="text-green-600" size={20}/> */}
                            <img src={uptwo} className="my-auto" size={26}/>
                            <span className="text-green-600 text-[12px]">+1.25 %</span>
                        </div>
                        <div className="rounded-full h-[28px] px-[12px] w-[103px] py-[10px] today bg-purple-200 items-center flex justify-center">
                            <p className="text-black text-[12px]">Today<span className="text-purple-600"> +$23.5</span></p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="mx-4">
                        <p className="text-black text-[12px] font-medium">By continuing, you acknowledge and accept the risks associated with crypto trading.</p>
                    </div>
                </section>

                <section>

                    <div className="mx-4 mt-[16px] ">
                        <button onClick={handleButtonClick} className="bg-primary text-white rounded-md h-[48px] text-sm w-full">
                            Buy Now
                        </button>
                    </div>

                </section>

                <section>

                    <div className='my-5 mx-3 mb-20'>

                        <div className=''>
                            <div className='flex justify-between py-2'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-purple-500 rounded-full w-8 h-8' src="" >
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[12px]'>
                                        <p className='text-[12px] text-black font-medium'>MNVCXZ</p>
                                        <p className='text-[14px] text-black font-medium'>＄1000</p>
                                        <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p>
                                    </div>

                                </div>

                                <div className="my-auto">
                                    <button className='bg-primary rounded-lg text-[14px] py-[4px] px-[10px] text-white'>Buy Now</button>
                                </div>
                                
                            </div>
                            <div className='flex justify-between py-2 border-y-1 border-buynowbroder'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-purple-500 rounded-full w-8 h-8' src="" >
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[12px]'>
                                        <p className='text-[12px] text-black font-medium'>MNVCXZ</p>
                                        <p className='text-[14px] text-black font-medium'>＄1000</p>
                                        <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p>
                                    </div>

                                </div>

                                <div className="my-auto">
                                    <button className='bg-primary rounded-lg text-[14px] py-[4px] px-[10px] text-white'>Buy Now</button>
                                </div>
                                
                            </div>
                            <div className='flex justify-between py-2 border-y-1 border-buynowbroder'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-purple-500 rounded-full w-8 h-8' src="" >
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[12px]'>
                                        <p className='text-[12px] text-black font-medium'>MNVCXZ</p>
                                        <p className='text-[14px] text-black font-medium'>＄1000</p>
                                        <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p>
                                    </div>

                                </div>

                                <div className="my-auto">
                                    <button className='bg-primary rounded-lg text-[14px] py-[4px] px-[10px] text-white'>Buy Now</button>
                                </div>
                                
                            </div>
                            <div className='flex justify-between py-2 border-y-1 border-buynowbroder'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-purple-500 rounded-full w-8 h-8' src="" >
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[12px]'>
                                        <p className='text-[12px] text-black font-medium'>MNVCXZ</p>
                                        <p className='text-[14px] text-black font-medium'>＄1000</p>
                                        <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p>
                                    </div>

                                </div>

                                <div className="my-auto">
                                    <button
                                        className='bg-primary rounded-lg text-[14px] py-[4px] px-[10px] text-white'
                                        onClick={handleButtonClick} // Only trigger action when clicked
                                    >
                                        Buy Now
                                    </button>
                                </div>
                                
                            </div>
                            <div className='flex justify-between py-2 border-y-1 border-buynowbroder'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-purple-500 rounded-full w-8 h-8' src="" >
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[12px]'>
                                        <p className='text-[12px] text-black font-medium'>MNVCXZ</p>
                                        <p className='text-[14px] text-black font-medium'>＄1000</p>
                                        <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p>
                                    </div>

                                </div>

                                <div className="my-auto">
                                    <button type="button" onClick={handleButtonClick} className='bg-primary rounded-lg text-[14px] py-[4px] px-[10px] text-white'>Buy Now</button>
                                </div>
                                
                            </div>
                            {/* <div className='flex justify-between py-2 border-y-1 border-buynowbroder'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-purple-500 rounded-full w-8 h-8' src="" >
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[12px]'>
                                        <p className='text-[12px] text-black font-medium'>MNVCXZ</p>
                                        <p className='text-[14px] text-black font-medium'>＄1000</p>
                                        <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p>
                                    </div>

                                </div>

                                <div className="my-auto">
                                    <button className='bg-primary rounded-lg text-[14px] py-[4px] px-[10px] text-white'>Buy Now</button>
                                </div>
                                
                            </div>
                            <div className='flex justify-between py-2 border-y-1 border-buynowbroder'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-purple-500 rounded-full w-8 h-8' src="" >
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[12px]'>
                                        <p className='text-[12px] text-black font-medium'>MNVCXZ</p>
                                        <p className='text-[14px] text-black font-medium'>＄1000</p>
                                        <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p>
                                    </div>

                                </div>

                                <div className="my-auto">
                                    <button className='bg-primary rounded-lg text-[14px] py-[4px] px-[10px] text-white'>Buy Now</button>
                                </div>
                                
                            </div>
                            <div className='flex justify-between py-2 border-y-1 border-buynowbroder'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-purple-500 rounded-full w-8 h-8' src="" >
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[12px]'>
                                        <p className='text-[12px] text-black font-medium'>MNVCXZ</p>
                                        <p className='text-[14px] text-black font-medium'>＄1000</p>
                                        <p className='text-[10px] text-dategr font-medium'>Limit ($100 - $1000)</p>
                                    </div>

                                </div>

                                <div className="my-auto">
                                    <button className='bg-primary rounded-lg text-[14px] py-[4px] px-[10px] text-white'>Buy Now</button>
                                </div>
                                
                            </div> */}
                            
                            
                        </div>

                    </div>

                </section>

            </div>




        </div>

    <Footer/>

    </div>
  )
};

export default BuyFund
