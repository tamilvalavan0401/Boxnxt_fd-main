import React from 'react'
import { Link } from "react-router-dom";
import back from './../assets/image/back.svg';
import mic from './../assets/image/mic.svg';
import { RiCameraAiFill } from "react-icons/ri";

const Kyc = () => {
  return (
    <div>
       

       <section>
                        <div className="flex items-center  p-4 h-3.5rem">
                            <div className=" flex">
                                <Link className='flex'  to={'/home'}>
                                    <img src={back} className="text-primary my-auto" size={24}/>
                                </Link>
                                <p className="text-primary text-center text-base font-semibold ml-4">IDENTITY VERIFICATION</p>
                            </div>
                           
                        </div>
        </section>

       
       <section>
        <div className='flex justify-center mx-4'>
            <div className="flex mx-auto w-full">
                <li className="flex w-full items-center text-primary dark:text-primary after:content-[''] after:w-full after:h-1 after:border-b after:border-primary after:border-4 after:inline-block dark:after:border-primary">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full lg:h-12 lg:w-12 dark:bg-primary shrink-0">
                        <svg className="w-3.5 h-3.5 text-primary lg:w-4 lg:h-4 dark:text-purple-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                    </div>
                </li>
                
                <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-primary after:border-4 after:inline-block dark:after:border-gray-300">
                    <span className="flex items-center justify-center w-10 h-10 bg-primary rounded-full lg:h-12 lg:w-12 dark:bg-purple-100 border border-gray-300 shrink-0">
                        <svg className="w-4 h-4 text-primary lg:w-5 lg:h-5 dark:text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                        </svg>
                    </span>
                </li>
                <li className="flex items-center">
                    <span className="flex items-center justify-center w-10 h-10 bg-primary rounded-full lg:h-12 lg:w-12 dark:bg-purple-100 border border-gray-300 shrink-0">
                        <svg className="w-4 h-4 text-primary lg:w-5 lg:h-5 dark:text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                        </svg>
                    </span>
                </li>
            </div>
        </div>        

       </section>


        <section className="">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                    <div className="">
                        <div className="px-4 py-6 sm:px-8 sm:py-7">
                            <form action="#" method="POST">
                                <div className="space-y-5">
                                    <div>
                                        <label for="" className="text-base font-medium text-gray-900"> NAME </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                </svg>
                                            </div> */}

                                            <input
                                                type="email"
                                                name=""
                                                id=""
                                                placeholder="Please enter your name"
                                                className="block w-full py-4 pl-10 pr-4 text-dategr font-semibold placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="" className="text-base font-medium text-gray-900"> ID CARDS </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                </svg>
                                            </div> */}

                                            <input
                                                type="email"
                                                name=""
                                                id=""
                                                placeholder="Please enter yourID Cards"
                                                className="block w-full py-4 pl-10 pr-4 text-dategr font-semibold placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                                            />
                                        </div>
                                    </div>

                                    
                                    <div className="w-full ">
                                        <label className="text-base font-medium text-gray-900">
                                            FRONT OF ID CARD (PORTRAIT)
                                        </label>
                                        <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-40  bg-white border border-gray-200 rounded-md">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <RiCameraAiFill size={35} className="text-dategr" />
                                                <p className="mb-2 text-dategr font-semibold">Photograph</p>
                                            </div>
                                            <input 
                                                id="dropzone-file" 
                                                type="file" 
                                                accept="image/*" 
                                                capture="environment"
                                                className="hidden"
                                                onChange={(e) => console.log(e.target.files[0])} // Optional: Handle file selection
                                            />
                                        </label>
                                    </div>
                                    <div className="w-full ">
                                        <label className="text-base font-medium text-gray-900">
                                            BACK OF ID CARD
                                        </label>
                                        <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-40  bg-white border border-gray-200 rounded-md">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <RiCameraAiFill size={35} className="text-dategr" />
                                                <p className="mb-2 text-dategr font-semibold">Photograph</p>
                                            </div>
                                            <input 
                                                id="dropzone-file" 
                                                type="file" 
                                                accept="image/*" 
                                                capture="environment"
                                                className="hidden"
                                                onChange={(e) => console.log(e.target.files[0])} // Optional: Handle file selection
                                            />
                                        </label>
                                    </div>
                                    


                                    

                                    <div>
                                        <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                            NEXT STEP
                                        </button>
                                    </div>

                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>




    </div>
  )
}

export default Kyc
