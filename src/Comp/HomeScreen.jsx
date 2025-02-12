import trophy from './../assets/image/trophy.svg';
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Navbar from './Navbar';
import up from './../assets/image/up.svg';
import down from './../assets/image/down.svg';
import send from './../assets/image/send.svg';
import resive from './../assets/image/resive.svg';
import clone from './../assets/image/clone.svg';
import Account from './../assets/image/account.svg';
import Trade from './../assets/image/Trade.svg';
import Orders from './../assets/image/Orders.svg';
import KYC from './../assets/image/KYC.svg';
import Exchange from './../assets/image/Exchange.svg';
import Guide from './../assets/image/Guide.svg';
import Support from './../assets/image/Support.svg';
import Invites from './../assets/image/Invites.svg';
import { Footer } from './Footer';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import endpoints from '../../ApiKeys';

const HomeScreen = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login'); // Redirect to login page if no token
        }
      }, [navigate]);

      const [username, setUserName] = useState();

      useEffect(() => {
        const token = localStorage.getItem('token');
        const user_email = localStorage.getItem('user_email');
        setUserName(user_email)
        console.log(user_email)
        if (!token) {
          navigate('/login'); // Redirect to login page if no token
        }
      }, [navigate]);

       const [data, setData] = useState([]); // To store the API response (initializing with empty array)
          const [loading, setLoading] = useState(true); // To track loading state
          const [error, setError] = useState(null); // To store any errors
      

          useEffect(() => {
            const token = localStorage.getItem('token');
          
          
                const fetchData = async () => {
                  const myHeaders = new Headers();
                  myHeaders.append("Accept", "application/json");
                  myHeaders.append("Authorization", `Bearer ${token}`);
            
                  const raw = ""; // If no body is needed
            
                  const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw, // Send body if needed by the API
                    redirect: "follow",
                  };
            
                  try {
                    const response = await fetch(endpoints.getstake, requestOptions);
            
                    if (!response.ok) {
                      throw new Error("Network response was not ok");
                    }
            
                    const result = await response.json(); // Parse JSON response
                    setData(result.data); // Update state with the data from the API response
                  } catch (error) {
                    setError(error.message); // Set error message if something went wrong
                  } finally {
                    setLoading(false); // Set loading to false after fetching is done
                  }
                };
            
                fetchData(); // Call the fetch function when the component mounts
              }, []); // Empty dependency array, this runs once when the component mounts
            
    return (<>

    <Navbar/>
    
      <div className='pb-10 mx-3' >
          
          <div className="rounded-xl mt-4  bg-gradient-to-t from-downfade to-primary">


          <div className="flex justify-between">

            <div className="flex my-auto">
            <h4 className='text-white mt-2 ml-2 text-[12px] font-bold'>BOOKNXT ASSET</h4>
            <h4 className='my-auto'><FaRegEye className='mt-2 mx-2 text-white'  size={18}/></h4>
            </div>

            <div className="flex justify-end">

                <strong className=" inline-flex items-center rounded-bl-lg rounded-tr-lg bg-purple-200 py-2 px-2 text-white w-[140px] h-[36px]">
                
                <img src={trophy} className='trophy' />

                <span className="text-[10px] font-bold text-primary">Reward ₹99</span>
                <button className="bg-orange-500 text-[10px] font-bold text-white rounded-2xl ml-1 w-[37px] h-[22px]">Go!</button>
                </strong>
            </div>



            </div>

            <div className="flex items-start gap-4 p-2 sm:p-6 lg:p-8">
                <div className="flex">
                    <MdOutlineCurrencyRupee className='text-white my-auto' size={27}/>
                    <span className='font-medium text-3xl text-white'>0</span>
                    
                </div>                
            </div>

            <div className='main-box gap-1 m-1 pb-2 flex justify-around items-center'>
                
                <div className="w-1/3  rounded-md text-center text-[12px] text-white py-2 bg-homebx border-1 border-homebxborder">
                    Transferable
                    <div className="flex justify-center">
                        <MdOutlineCurrencyRupee className='text-white my-auto' size={20}/>
                        <span className=' text-xl mr-2 text-white'>0</span>
                    </div> 
                </div>
                <div className="w-1/3  rounded-md text-center text-[12px] text-white py-2 bg-homebx border-1 border-homebxborder">
                    Scalable
                    <div className="flex justify-center">
                        <MdOutlineCurrencyRupee className='text-white my-auto' size={20}/>
                        <span className=' text-xl mr-2 text-white'>0</span>
                    </div> 
                </div>
                <div className="w-1/3 rounded-md text-center text-[12px] text-white py-2 bg-homebx border-1 border-homebxborder">
                    Frozen
                    <div className="flex justify-center">
                        <MdOutlineCurrencyRupee className='text-white my-auto' size={20}/>
                        <span className=' text-xl mr-2 text-white'>0</span>
                    </div> 
                </div>
                {/* <div className="w-1/3 rounded-xl text-center text-white size-16 bg-purple-400">Scalable</div> */}
                {/* <div className="w-1/4 rounded-xl text-center text-white size-16 bg-purple-400">Frozen</div> */}
                
                
            </div>

            <hr className='text-hr' />

            <div>

            <div className='main-box gap-2 mx-2 py-4 flex justify-around items-center'>

            

                
                <button className="w-1/2 flex justify-center rounded-md font-semibold text-center text-primary py-2 bg-white ">
                <Link className=' flex'  to={'/buyfund'}>
                {/* <LuSend  className=' mr-2'/> */}
                <img src={send} alt="" className=' my-auto mr-1' />
                    Send 
                    </Link>
                </button>

                <button className="w-1/2 flex justify-center rounded-md font-semibold text-center text-primary py-2 bg-white ">
                <Link className='flex'  to={'/buyfund'}>
                {/* <LuSend  className=' mr-2'/> */}
                <img src={resive} alt="" className='my-auto mr-1' />
                    Receive 
                </Link>
                </button>
                
                
                
            </div>
                
            </div>

            

            
          </div>

            <div className='flex justify-center mt-3'>  

                <div className="rounded-t-md flex justify-evenly bg-purple-200 shadow-xs p-3 w-full">
                    <div className='flex'>

                        <button className="flex border-purple-300px text-[16px] font-medium text-primary whitespace-nowrap focus:relative">
                        <Link className='flex'  to={'/buyfund'}>
                            Buy Fund
                            {/* <FiArrowDownCircle size={20} className=' ml-2 '/> */}
                            <img src={down} alt="" className='ml-2  ' />
                        </Link>    
                        </button>
    
                    </div>
                    <div className="inline-block h-[27px] min-h-[1em] w-0.5 self-stretch bg-purple-100 dark:bg-white/10"></div>
                    <div className='flex'>

                        <button className="flex border-purple-300px text-[16px] font-medium text-primary whitespace-nowrap focus:relative">
                        <Link className='flex'  to={'/buyfund'}>
                            Sale Fund
                            {/* <FiArrowUpCircle size={20} className=' ml-5 '/> */}
                            <img src={up} alt="" className='ml-2  '/>
                        </Link>
                        </button>
    
                    </div> 
                </div>

            </div>

            <div className='flex justify-center'>

                <div className="rounded-b-md flex justify-between bg-white shadow-xs p-3 w-full">
                    <div className='flex'>

                        <button className="flex border-purple-300px text-[12px] font-medium text-black  focus:relative">
                            Wallet Address
                        </button>
    
                    </div>
                    <div className='flex'>

                        <button className="flex border-purple-300px text-[12px] font-medium text-black  focus:relative">
                            lasfhosddfosdfh
                            {/* <LiaClone size={20} className='my-auto ml-2'/> */}
                            <img src={clone} alt="" className=' my-auto ml-2 ' />

                        </button>
    
                    </div>
                    
                    
                    

                    
                </div>

            </div>

            <div className='mt-3 flex justify-around items-center'>
                
                <div className="w-1/6  rounded-md text-cente py-2  ">
                    
                    <div className="flex flex-col justify-center items-center">

                        {/* <PiUserListDuotone className='text-primary' size={25}/> */}
                        <Link className=''  to={'/buyfund'}>
                        <img src={Account} alt="" className='mx-auto my-auto' />
                        <p className='text-[12px] font-semibold '>Account</p>
                        </Link>
                    </div> 
                </div>
                <div className="w-1/6  rounded-md text-cente py-2  ">
                    
                    <div className="flex flex-col justify-center items-center">
                    <Link className=''  to={'/buyfund'}>
                        {/* <RiFileList3Line className='text-primary' size={25}/> */}
                        <img src={Trade} alt="" className='mx-auto my-auto' />
                        <p className='text-[12px] font-semibold '>Trade</p>
                    </Link>
                    </div> 
                </div>
                
                <div className="w-1/6  rounded-md text-cente py-2  ">
                    
                    <div className="flex flex-col justify-center items-center">
                    <Link className=''  to={'/buyfund'}>
                        {/* <LiaClipboardListSolid className='text-primary' size={25}/> */}
                        <img src={Orders} alt="" className='mx-auto my-auto' />
                        <p className='text-[12px] font-semibold '>Orders</p>
                    </Link>
                    </div> 
                </div>
                <div className="w-1/6  rounded-md text-cente py-2  ">
                    
                    <div className="flex flex-col justify-center items-center">
                    <Link className=''  to={'/buyfund'}>
                        {/* <FiUserCheck className='text-primary' size={25}/> */}
                        <img src={KYC} alt="" className='mx-auto my-auto' />
                        <p className='text-[12px] font-semibold '>KYC</p>
                    </Link>
                    </div> 
                </div>
                
            </div>

            <div className='flex justify-around items-center'>
                
                <div className="w-1/6  rounded-md text-cente py-2  ">
                    
                    <div className="flex flex-col justify-center items-center">
                    <Link className=''  to={'/buyfund'}>
                        {/* <TbExchange className='text-primary' size={25}/> */}
                        <img src={Exchange} alt="" className='mx-auto my-auto' />
                        <p className='text-[12px] font-semibold '>Exchange</p>
                    </Link>
                    </div> 
                </div>
                <div className="w-1/6  rounded-md text-cente py-2  ">
                    
                    <div className="flex flex-col justify-center items-center">
                    <Link className=''  to={'/buyfund'}>
                        {/* <RiGraduationCapLine className='text-primary' size={25}/> */}
                        <img src={Guide} alt="" className='mx-auto my-auto' />
                        <p className='text-[12px] font-semibold '>Guide</p>
                    </Link>
                    </div> 
                </div>
                
                <div className="w-1/6  rounded-md text-cente py-2  ">
                    
                    <div className="flex flex-col justify-center items-center">
                    <Link className=''  to={'/buyfund'}>
                        {/* <HiOutlineChatAlt2 className='text-primary' size={25}/> */}
                        <img src={Support} alt="" className='mx-auto my-auto' />
                        <p className='text-[12px] font-semibold '>Support</p>
                    </Link>
                    </div> 
                </div>
                <div className="w-1/6  rounded-md text-cente py-2  ">
                    
                    <div className="flex flex-col justify-center items-center">
                    <Link className=''  to={'/buyfund'}>
                        {/* <BsBoxArrowUpRight className='text-primary' size={20}/> */}
                        <img src={Invites} alt="" className='mx-auto my-auto' />
                        <p className='text-[12px] font-semibold '>Invites</p>
                    </Link>
                    </div> 
                </div>
                
            </div>
            
            <div className='my-5 mx-2'>

                <div className=''>
                    <p className='pb-2 text-[14px] border-b border-Transactionhr font-medium'>Transaction History</p>
            
                    {data.length > 0 ? (
                            data.map((item, index) => (  <div className='flex justify-between my-3'>
                        <div className='flex'>

                            <div className="">
                                <div className='bg-purple-500 rounded-full w-8 h-8' src="" alt="" ></div>
                            </div>
                            <div className='ml-2 text-[12px]'>
                                <p className='font-semibold text-[12px]'>{username || 'User'}</p>
                                <p className='text-[10px] text-dategr font-medium'>{new Date(item.created_at).toLocaleTimeString()}</p>
                            </div>

                        </div>

                        <h3>
                            <span className='text-green-500 font-bold'>+{item.amount}</span>
                        </h3>
                        
                    </div>                             ))
                        ) : (
                            <p>No date found for the selected status</p> // Show message if no data matches the selected status
                        )}
                    
                    
                </div>

                <div className='text-center text-primary font-semibold'>
                    <Link className=''  to={'/buyhistory'}>
                        <button className=''>Read More...</button>
                    </Link>
                </div>    

            </div>
          

          


  
      </div>

      <Footer/>
    
    </>

    )
  }
  
  export default HomeScreen;