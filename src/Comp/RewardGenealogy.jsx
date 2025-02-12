import { Link, useNavigate } from "react-router-dom";
import back from './../assets/image/back.svg';
import mic from './../assets/image/mic.svg';
import frstr from './../assets/image/1star.svg';
import sestr from './../assets/image/2star.svg';
import thstr from './../assets/image/3star.svg';
import rebg from './../assets/image/rewabg.png';
import { useEffect, useState } from "react";
import endpoints from "../../ApiKeys";
import axios from "axios";
import { Footer } from "./Footer";


const RewardGenealogy = () => {

    const [active, setActive] = useState("Level 1");

    const buttons = ["All", "success", "processing", "Failed"];

    const [data, setData] = useState(null);
  // State to handle loading state
  const [loading, setLoading] = useState(true);
  // State to handle error if any
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('user_id');

    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://voxnxt.vilvabusiness.com/api/geonology",
          {
            user_id: user_id
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
        );

        setData(response.data); // Store the response data
        setLoading(false); // Set loading to false after receiving the data
      } catch (error) {
        setError("Error fetching data: " + error.message); // Handle error
        setLoading(false); // Set loading to false after an error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }
//   / fetchData()
    const levels = [
        { name: "Level 1", icon: frstr },
        { name: "Level 2", icon: sestr },
        { name: "Level 3", icon: thstr }
    ];
    const referredUsers = data?.referred_users || [];
    

  return (
    <div>
      
        <div className="">

                <section>
                        <div className="flex items-center justify-between p-4 h-3.5rem">
                            <div className=" flex">
                                <Link className='flex'  to={'/buyhistory'}>
                                    <img src={back} className="text-primary my-auto cursor-pointer" size={24}/>
                                </Link>
                                <p className="text-primary text-base font-semibold ml-4">Reward Genealogy</p>
                            </div>
                            <div>
                                <img src={mic} className="text-primary my-auto cursor-pointer" />
                            </div>
                        </div>
                </section>

                <section>
                        <div className="flex justify-center my-2 mx-4  rounded-xl relative rewardbg">

                            {/* <img src={rewardbg} className="" />      */}
                            <div className="text-center mt-2">
                                <p className="text-[15px] text-stone-800">Total Rewards</p>
                                <span className="text-[26px] font-semibold text-yellow-500">10,000</span>
                                <img src={rebg} className="" />
                            </div>
                                 
                        </div>
                </section>

                <section className="mx-3 ">

                    <div className="grid grid-cols-3 rounded-md border border-gray-100 bg-todaybg p-1">
                            {levels.map((level, index) => (
                                <button
                                    key={index}
                                    className={`flex items-center justify-center rounded-md px-2 py-2 text-sm cursor-pointer 
                                        ${active === level.name ? "bg-primary text-viewtext" : "bg-transparent"}
                                    `}
                                    onClick={() => setActive(level.name)}
                                >
                                    <img src={level.icon} className="mr-1" />
                                    <span className={` font-semibold ${active === level.name ? "text-viewtext" : "text-primary"}`}>
                                        {level.name}
                                    </span>
                                </button>
                            ))}
                    </div>

                </section>


                <section>

                    <div className='my-5 mx-3 '>

                        <div className=''>

                        {referredUsers.length === 0 ? (
        <p>No referred users found.</p>
      ) : (
        referredUsers.map((user, index) => (
          <div
            key={index}
            className="flex justify-between py-2 border-b-2 border-buynowbroder"
          >
            <div className="flex">
              <div className="my-auto">
                <div className="bg-sky-200 rounded-full w-8 h-8" />
              </div>
              <div className="ml-2 text-[12px]">
                <p className="text-[12px] text-stone-500 font-medium">{user.email}</p>
                <p className="text-[14px] text-black font-medium">1200 Points</p>
                {/* Optionally display more user details if available */}
                {/* <p className='text-[10px] text-zinc-500 font-medium'>Limit ($100 - $1000)</p> */}
              </div>
            </div>

            <div className="my-auto">
              <button className="bg-primary rounded-md text-[14px] py-[4px] px-[13px] text-viewtext">
                View
              </button>
            </div>
          </div>
        ))
      )}

                            {/* <div className='flex justify-between py-2 border-b-2 border-buynowbroder'>
                                <div className='flex'>

                                    <div className="my-auto">
                                        <div className='bg-sky-200 rounded-full w-8 h-8' src="" >
                                        </div>
                                    </div>
                                    <div className='ml-2 text-[12px]'>
                                        <p className='text-[12px] text-stone-500 font-medium'>Person X</p>
                                        <p className='text-[14px] text-black font-medium'>1200 Points</p>
                                        <p className='text-[10px] text-zinc-500 font-medium'>Limit ($100 - $1000)</p>
                                    </div>

                                </div>

                                <div className="my-auto">
                                    <button className='bg-primary rounded-md text-[14px] py-[4px] px-[13px] text-viewtext'>View</button>
                                </div>
                                
                            </div> */}
                            
                            
                        </div>

                    </div>

                </section>

                

        </div>

        <Footer/>
        
    </div>
  )
}

export default RewardGenealogy ;
