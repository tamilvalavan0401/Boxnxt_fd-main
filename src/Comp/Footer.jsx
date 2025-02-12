import { Link } from "react-router-dom";
import home from './../assets/image/home.svg';
import P2P from './../assets/image/p2p.svg';
import Assets from './../assets/image/assets.svg';
import Profile from './../assets/image/profile.svg';



export const Footer = () => {
  return (
    <div>

        <div className="fixed bottom-0 w-full bg-primary z-50 footer h-[56px]">
          <div className="mt-2 flex justify-around items-center pb-1">
            <div className="w-1/6 rounded-md text-center">
              <div className="flex flex-col justify-center items-center">
                {/* <AiFillHome className="text-white" size={20} /> */}
                <Link  to={'/home'}>
                <img src={home} className="mx-auto" alt="" />
                <p className="text-[11px] text-purple-300">Home</p>
                </Link>
              </div>
            </div>
            <div className="w-1/6 rounded-md text-center">
              <div className="flex flex-col justify-center items-center">
              <Link  to={'/rewards'}>
                {/* <FiUsers className="text-purple-300" size={20} /> */}
                <img src={P2P} className="mx-auto" alt="" />
                <p className="text-[11px] text-purple-300">P2P</p>
                </Link>
              </div>
            </div>
            <div className="w-1/6 rounded-md text-center">
              <div className="flex flex-col justify-center items-center">
              <Link  to={'/assets'}>
                {/* <TbWallet className="text-purple-300" size={20} /> */}
                <img src={Assets} className="mx-auto" alt="" />
                <p className="text-[11px] text-purple-300">Assets</p>
                </Link>
              </div>
            </div>
            <div className="w-1/6 rounded-md text-center">
              <div className="flex flex-col justify-center items-center">
              <Link  to={'/profile'}>
                {/* <CgProfile className="text-purple-300" size={20} /> */}
                <img src={Profile} className="mx-auto" alt="" />
                <p className="text-[11px] text-purple-300">Profile</p>
                </Link>
              </div>
            </div>
          </div>
        </div>


    </div>
  )
}
