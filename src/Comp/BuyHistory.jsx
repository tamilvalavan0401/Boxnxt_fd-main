import { Link, useNavigate } from "react-router-dom";
import back from './../assets/image/back.svg';
import history from './../assets/image/history.svg';
import { useEffect, useState } from "react";
import endpoints from "../../ApiKeys";
import { Footer } from "./Footer";


const BuyHistory = () => {


    const [active, setActive] = useState("All"); // Default set to "All"
    const buttons = ["All", "success", "processing", "failed"];

    const [data, setData] = useState([]); // To store the API response (initializing with empty array)
    const [loading, setLoading] = useState(true); // To track loading state
    const [error, setError] = useState(null); // To store any errors





  const getStatusColor = (status) => {
    switch (status) {
      case 'success':
        return 'text-green-600'; // Green for success
      case 'processing':
        return 'text-yellow-500'; // Yellow for processing
      case 'failed':
        return 'text-red-600'; // Red for failed
      default:
        return 'text-gray-600'; // Default if status is unknown
    }
  };
  const navigate =useNavigate();

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

  

  const filteredData = active === "All"
  ? data  // If "All" is selected, show all data
  : data.filter((item) => item.status === active);

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
  
    if (loading) return <div>Loading...</div>; // Show loading state while fetching
    if (error) return <div>Error: {error}</div>; // Display error message if there is one


  

  return (
    <div>

{/* <div>
      <h1>Get Stake Data</h1>
      <div>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="stake-item">
            <h3>Stake ID: {item.id}</h3>
            <p><strong>User ID:</strong> {item.user_id}</p>
            <p><strong>Amount:</strong> ${item.amount}</p>
            <p><strong>Rate:</strong> {item.rate}</p>
            <p><strong>File:</strong> {item.file ? item.file : "No file available"}</p>
            <p><strong>Status:</strong> {item.status}</p>
            <p><strong>Remarks:</strong> {item.remarks ? item.remarks : "No remarks"}</p>
            <p><strong>Created At:</strong> {new Date(item.created_at).toLocaleString()}</p>
            <p><strong>Updated At:</strong> {new Date(item.updated_at).toLocaleString()}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No stake data available.</p>
      )}
      </div>
    </div> */}
         
        <div className="">

                <section>
                        <div className="flex items-center justify-between p-4 h-3.5rem">
                            <div className=" flex">
                                <Link className='flex'  to={'/buydetails'}>
                                    <img src={back} className="text-primary my-auto" size={24}/>
                                </Link>
                                <p className="text-primary text-base font-semibold ml-4">Buy History</p>
                            </div>
                            <div>
                            <Link className='flex'  to={'/rewardgenealogy'}>
                                <img src={history} className="text-primary my-auto" />
                            </Link>
                            </div>
                        </div>
                </section>

                <section>
                    <div className="mx-3 my-3">
                        {buttons.map((btn, index) => (
                            <button
                                key={index}
                                className={`rounded-md px-3 py-1 text-[14px] ml-2 
                                    ${active === btn ? "bg-purple-800 text-white" : "bg-purple-200 text-black"}`}
                                onClick={() => setActive(btn)}
                            >
                                {btn}
                            </button>
                        ))}
                    </div>
                </section>

                <section className="bg-neutral-50 py-2 rounded-xl">

                    <div className=' mx-3 grid gap-y-1.5'>

                            <p className="text-[12px] text-neutral-500">Today</p>
                            
                    <div>
                        {/* Button Group for Filtering */}
                        {/* <div className="mx-3 my-3">
                            {buttons.map((btn, index) => (
                            <button
                                key={index}
                                className={`rounded-md px-3 py-1 text-[14px] ml-2 ${
                                active === btn
                                    ? 'bg-purple-800 text-white'
                                    : 'bg-purple-200 text-black'
                                }`}
                                onClick={() => setActive(btn)} // Set active status on button click
                            >
                                {btn}
                            </button>
                            ))}
                        </div> */}

                        {/* Display Filtered Data */}
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between my-1
                                 items-center bg-buyhistorydate border border-buyhistorydatebr p-2 rounded-xl"
                            >
                                <div className="flex">
                                <div className="my-auto">
                                    <div className="bg-sky-200 rounded-full w-8 h-8">
                                    {/* Placeholder for user profile image */}
                                    </div>
                                </div>
                                <div className="ml-2 text-[14px]">
                                    <p className="font-semibold">{username || 'User'}</p>
                                    <p className="text-[10px] text-dategr font-medium">
                                    {new Date(item.created_at).toLocaleTimeString()}
                                    </p>
                                </div>
                                </div>

                                <div className="text-center">
                                <p className="text-[14px]">＄<span>{item.amount}</span></p>
                                <p className={`text-[12px] font-semibold ${getStatusColor(item.status)}`}>
                                    {item.status}
                                </p>
                                </div>
                            </div>
                            ))
                        ) : (
                            <p>No date found for the selected status</p> // Show message if no data matches the selected status
                        )}
                    </div>





                  {/* {data.length > 0 ? (
                                data.map((item, index) => (
                                    <div key={index} className='flex justify-between items-center bg-buyhistorydate border border-buyhistorydatebr p-2 rounded-xl'>
                                    <div className='flex'>
                                        <div className="my-auto">
                                        <div className='bg-sky-200 rounded-full w-8 h-8'>
                                            You can replace this with an actual user profile image if available
                                        </div>
                                        </div>
                                        <div className='ml-2 text-[14px]'>
                                        <p className="font-semibold">{item.user_name ? item.user_name : 'User'}</p> Add dynamic user name
                                        <p className='text-[10px] text-dategr font-medium'>{new Date(item.created_at).toLocaleTimeString()}</p> Format created_at to display time
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <p className="text-[14px]">＄<span>{item.amount}</span></p> Display amount dynamically
                                        <p className={`text-[12px] font-semibold ${getStatusColor(item.status)}`}>{item.status}</p> Add dynamic status with color
                                    </div>  
                                    </div>
                                ))
                                ) : (
                                <p>No data available</p> // Handle empty data
                                )}  */}









                            {/* <div className='flex justify-between items-center bg-buyhistorydate border-1 border-buyhistorydatebr p-2 rounded-xl'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-sky-200 rounded-full w-8 h-8' src="" alt="">
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[14px]'>
                                        <p className="font-semibold">Jyothi Prakash</p>
                                        <p className='text-[10px] text-dategr font-medium'>09.45 PM</p>
                                    </div>

                                </div>

                                <div className="text-center">
                                    <p className="text-[14px]">＄<span>1000</span></p>
                                    <p className='text-yellow-500 text-[12px] font-semibold'>Processing</p>

                                </div>  
                            </div>
                            <div className='flex justify-between items-center bg-buyhistorydate border-1 border-buyhistorydatebr p-2 rounded-xl'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-sky-200 rounded-full w-8 h-8' src="" alt="">
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[14px]'>
                                        <p className="font-semibold">Jyothi Prakash</p>
                                        <p className='text-[10px] text-dategr font-medium'>09.45 PM</p>
                                    </div>

                                </div>

                                <div className="text-center">
                                    <p className="text-[14px]">＄<span>1000</span></p>
                                    <p className='text-red-600 text-[12px] font-semibold'>Failed</p>

                                </div>  
                            </div>
                            <div className='flex justify-between items-center bg-buyhistorydate border-1 border-buyhistorydatebr p-2 rounded-xl'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-sky-200 rounded-full w-8 h-8' src="" alt="">
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[14px]'>
                                        <p className="font-semibold">Jyothi Prakash</p>
                                        <p className='text-[10px] text-neutral-500 font-medium'>09.45 PM</p>
                                    </div>

                                </div>

                                <div className="text-center">
                                    <p className="text-[14px]">＄<span>1000</span></p>
                                    <p className='text-green-600 text-[12px] font-semibold'>Success</p>

                                </div>  
                            </div> */}
                            
                            
                    </div>

                    {/* <div className=' mt-2 mx-3 grid gap-y-1.5'>

                            <p className="text-[12px] text-neutral-500">January 06</p>
                            
                            <div className='flex justify-between items-center bg-buyhistorydate border-1 border-buyhistorydatebr p-2 rounded-xl'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-sky-200 rounded-full w-8 h-8' src="" alt="">
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[14px]'>
                                        <p className="font-semibold">Vigneshwaran</p>
                                        <p className='text-[10px] text-dategr font-medium'>09.45 PM</p>
                                    </div>

                                </div>

                                <div className="text-center">
                                    <p className="text-[14px]">＄<span>1000</span></p>
                                    <p className='text-green-600 text-[12px] font-semibold'>Success</p>

                                </div>  
                            </div>
                            <div className='flex justify-between items-center bg-buyhistorydate border-1 border-buyhistorydatebr p-2 rounded-xl'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-sky-200 rounded-full w-8 h-8' src="" alt="">
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[14px]'>
                                        <p className="font-semibold">Vigneshwaran</p>
                                        <p className='text-[10px] text-dategr font-medium'>09.45 PM</p>
                                    </div>

                                </div>

                                <div className="text-center">
                                    <p className="text-[14px]">＄<span>1000</span></p>
                                    <p className='text-yellow-500 text-[12px] font-semibold'>Processing</p>

                                </div>  
                            </div>
                            <div className='flex justify-between items-center bg-buyhistorydate border-1 border-buyhistorydatebr p-2 rounded-xl'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-sky-200 rounded-full w-8 h-8' src="" alt="">
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[14px]'>
                                        <p className="font-semibold">Vigneshwaran</p>
                                        <p className='text-[10px] text-dategr font-medium'>09.45 PM</p>
                                    </div>

                                </div>

                                <div className="text-center">
                                    <p className="text-[14px]">＄<span>1000</span></p>
                                    <p className='text-red-600 text-[12px] font-semibold'>Failed</p>

                                </div>  
                            </div>
                            <div className='flex justify-between items-center bg-buyhistorydate border-1 border-buyhistorydatebr p-2 rounded-xl'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-sky-200 rounded-full w-8 h-8' src="" alt="">
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[14px]'>
                                        <p className="font-semibold">Vigneshwaran</p>
                                        <p className='text-[10px] text-neutral-500 font-medium'>09.45 PM</p>
                                    </div>

                                </div>

                                <div className="text-center">
                                    <p className="text-[14px]">＄<span>1000</span></p>
                                    <p className='text-green-600 text-[12px] font-semibold'>Success</p>

                                </div>  
                            </div>
                            
                            
                    </div>

                    <div className=' mt-2 mx-3 grid gap-y-1.5'>

                            <p className="text-[12px] text-neutral-500">January 04</p>
                            
                            <div className='flex justify-between items-center bg-purple-100 border-1 border-purple-100 p-2 rounded-xl'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-sky-200 rounded-full w-8 h-8' src="" alt="">
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[14px]'>
                                        <p className="font-semibold">Vigneshwaran</p>
                                        <p className='text-[10px] text-dategr font-medium'>09.45 PM</p>
                                    </div>

                                </div>

                                <div className="text-center">
                                    <p className="text-[14px]">＄<span>1000</span></p>
                                    <p className='text-green-600 text-[12px] font-semibold'>Success</p>

                                </div>  
                            </div>
                            <div className='flex justify-between items-center bg-purple-100 border-1 border-purple-100 p-2 rounded-xl'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-sky-200 rounded-full w-8 h-8' src="" alt="">
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[14px]'>
                                        <p className="font-semibold">Vigneshwaran</p>
                                        <p className='text-[10px] text-dategr font-medium'>09.45 PM</p>
                                    </div>

                                </div>

                                <div className="text-center">
                                    <p className="text-[14px]">＄<span>1000</span></p>
                                    <p className='text-yellow-500 text-[12px] font-semibold'>Processing</p>

                                </div>  
                            </div>
                            <div className='flex justify-between items-center bg-purple-100 border-1 border-purple-100 p-2 rounded-xl'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-sky-200 rounded-full w-8 h-8' src="" alt="">
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[14px]'>
                                        <p className="font-semibold">Vigneshwaran</p>
                                        <p className='text-[10px] text-dategr font-medium'>09.45 PM</p>
                                    </div>

                                </div>

                                <div className="text-center">
                                    <p className="text-[14px]">＄<span>1000</span></p>
                                    <p className='text-red-600 text-[12px] font-semibold'>Failed</p>

                                </div>  
                            </div>
                            <div className='flex justify-between items-center bg-purple-100 border-1 border-purple-100 p-2 rounded-xl'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-sky-200 rounded-full w-8 h-8' src="" alt="">
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[14px]'>
                                        <p className="font-semibold">Vigneshwaran</p>
                                        <p className='text-[10px] text-neutral-500 font-medium'>09.45 PM</p>
                                    </div>

                                </div>

                                <div className="text-center">
                                    <p className="text-[14px]">＄<span>1000</span></p>
                                    <p className='text-green-600 text-[12px] font-semibold'>Success</p>

                                </div>  
                            </div>
                            
                            
                    </div> */}

                </section>

        </div>

        <Footer/>
        
    </div>
  )
}

export default BuyHistory ;
