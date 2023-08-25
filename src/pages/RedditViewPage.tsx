import { useAppDispatch,useAppSelector } from '../redux/hooks';
import Image from 'next/image';
import { useState } from 'react';
import {IoMdHome} from 'react-icons/io';
import {BsArrowUpRightCircle,BsFileBarGraph} from 'react-icons/bs'
import {TbSettings} from 'react-icons/tb';
import {BiMessageRoundedDots} from 'react-icons/bi';
import {AiOutlinePlus} from 'react-icons/ai';
import {RiNotification4Line} from 'react-icons/ri';
import {FaUser} from 'react-icons/fa';
import {LiaUserCircle} from 'react-icons/lia';
import {GrView} from 'react-icons/gr';
import {RxSwitch} from 'react-icons/rx';
import {TiGroup} from 'react-icons/ti';
import {TbLogout} from 'react-icons/tb';
import Home from './HomePage';
import CreatePost from './UserPostPage';

export default function RedditView() {

const SignupUserEmail = useAppSelector((state) => state.SignupUser.UserSignUpEmail);
const UserName = useAppSelector((state) => state.SignupUser.UserName);
const [isDropdownOpen, setDropdownOpen] = useState(false);
const [icon, set_icon] = useState('IoMdHome');
const [item, set_item ] = useState('Home');
const [isSecondDropDown, setSecondDropDown] = useState(false);
const [isOnlineSwitchOpen, setOnlineSwitch] = useState(false);
const [DarkModeSwitchOpen, setDarkSwitch] = useState(false);
const [secondDopDownValue, setSecondDopDownValue] = useState('');

 const secondtoggleDropDown = ( ) => {
  setSecondDropDown(!isSecondDropDown);
 }

 const firsttoggleDropdown = () => {
   setDropdownOpen(!isDropdownOpen);
 }
 const seticonanditemFirst = (iconp:string, itemp: string ) => {
 set_icon(iconp);
 set_item(itemp);
 setDropdownOpen(!isDropdownOpen);

 }

 const setOnlineStatus = ( ) => {

  setOnlineSwitch(!isOnlineSwitchOpen);

 }

 const setDarkMode = () => {
  setDarkSwitch(!DarkModeSwitchOpen);
 }

 const setSecondValue = (value : string) => {

  setSecondDropDown(!isSecondDropDown);
  setSecondDopDownValue(value);

 }

 const usePostIcon = () => {

  set_item('Create Post');

 }



    return (
      <div className="bg-gray-300 min-h-screen">
        <nav className='bg-white h-16 w-full flex flex-row items-center '>

           <Image src="/images/redditlogo.png " className='ml-4' alt='hello' width={100} height={100}/>

           <div  className="border hover:border-gray-300 border-white p-2 cursor-pointer ml-16 mt-3 mb-3">
          <button onClick={firsttoggleDropdown} >
            <div className='flex flex-row items-center gap-3'> {icon == 'IoMdHome'? <IoMdHome className='text-2xl'/>:  icon == 'BsArrowUpRightCircle'? <BsArrowUpRightCircle className='text-2xl'/>: icon == 'BsFileBarGraph'? <BsFileBarGraph className='text-2xl'/>: icon == 'TbSettings'? <TbSettings className='text-2xl'/> :icon == 'BiMessageRoundedDots'? <BiMessageRoundedDots className='text-2xl'/>:icon == 'AiOutlinePlus'? <AiOutlinePlus className='text-2xl'/>:icon == 'RiNotification4Line'? <RiNotification4Line className='text-2xl'/>:<IoMdHome/> } {item} <svg
            className={`ml-16 h-6 w-6 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg></div>
          </button>
          {isDropdownOpen?  (
            <div className="absolute bg-white borderborder-gray-300 mt-6 w-80 overflow-y-auto max-h-80 ">
              <ul>
                <div className='ml-4 text-gray-400 text-xs font-bold mt-1'>FEEDS</div>
                <li onClick={()=>seticonanditemFirst('IoMdHome','Home')} className="p-4 hover:bg-gray-100 flex flex-row gap-3"> <IoMdHome className='text-2xl '/> Home </li>
                <li onClick={()=>seticonanditemFirst('BsArrowUpRightCircle','Popular')} className="p-4 hover:bg-gray-100 flex flex-row gap-3"> <BsArrowUpRightCircle className='text-2xl'/> Popular </li>
                <li onClick={()=>seticonanditemFirst('BsFileBarGraph','All')} className="p-4 hover:bg-gray-100 flex flex-row gap-3"> <BsFileBarGraph className='text-2xl'/> All </li>
                <div className='ml-4 text-gray-400 text-xs font-bold mt-4'>OTHER</div>
                <li onClick={()=>seticonanditemFirst('TbSettings','User Settings')} className="p-4 hover:bg-gray-100 flex flex-row gap-3"> <TbSettings className='text-2xl'/> User Settings </li>
                <li onClick={()=>seticonanditemFirst('BiMessageRoundedDots','Messages')} className="p-4 hover:bg-gray-100 flex flex-row gap-3"> <BiMessageRoundedDots className='text-2xl'/> Messages </li>
                <li onClick={()=>seticonanditemFirst('AiOutlinePlus','Create Post')} className="p-4 hover:bg-gray-100 flex flex-row gap-3"> <AiOutlinePlus className='text-2xl'/> Create Post </li>
                <li onClick={()=>seticonanditemFirst('RiNotification4Line','Notifications')} className="p-4 hover:bg-gray-100 flex flex-row gap-3"> <RiNotification4Line className='text-2xl'/> Notifications </li>
              </ul>
            </div>
          ):null
          }
        </div>

         <div className='ml-16 mt-3 mb-3 w-1/2 bg-gray-600 rounded-3xl  '> <input placeholder='Search' className= 'border outline-gray-100 p-2 w-full bg-gray-100 rounded-2xl  hover:outline-blue-300' /></div>
        <div  className='ml-4 cursor-pointer hover:bg-gray-200 h-7 w-10 flex justify-center ' ><BsArrowUpRightCircle className='text-2xl '/></div>

        <div  className='ml-4 cursor-pointer hover:bg-gray-200 h-7 w-10 flex justify-center ' ><BiMessageRoundedDots className='text-3xl'/></div>

        <div  className='ml-4 cursor-pointer hover:bg-gray-200 h-7 w-10 flex justify-center ' ><RiNotification4Line className='text-2xl '/></div>

        <div onClick={()=>usePostIcon()} className='ml-4 cursor-pointer hover:bg-gray-200 h-7 w-10 flex justify-center ' ><AiOutlinePlus className='text-3xl'/></div>
         

       {/*user */}

       <div  className="border hover:border-gray-300 border-white p-2  ml-12 mt-3 mb-3">
          <button onClick={secondtoggleDropDown} >
            <div className='flex flex-row items-center gap-3 cursor-pointer'> <FaUser/> Western-123-ampl <svg
            className={`ml-16 h-6 w-6 ${isSecondDropDown ? 'transform rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg></div>
          </button>
          {isSecondDropDown?  (
            <div className="absolute bg-white borderborder-gray-300 mt-6 w-80 overflow-y-auto max-h-100">
              <ul>
                <div className='ml-4 text-gray-400 text-base  mt-1 flex flex-row items-center gap-4'><LiaUserCircle className='text-3xl'/>  My Stuff</div>
                <li  className="p-3 hover:bg-gray-100 flex justify-between cursor-pointer mt-2"> <div className='ml-11 font-semibold flex flex-row'>Online Status <RxSwitch  className={`text-3xl ml-8 ${ isOnlineSwitchOpen? 'bg-sky-400' : null}`} onClick={setOnlineStatus}/></div>  </li>
                <li onClick={()=> {setSecondValue('Profile')}} className="p-3 hover:bg-gray-100 flex flex-row gap-3 cursor-pointer"> <div className='ml-11 font-semibold '>Profile</div> </li>
                <li onClick={()=> {setSecondValue('Create Avatar')}} className="p-3 hover:bg-gray-100 flex flex-row gap-3 cursor-pointer"> <div className='ml-11 font-semibold'>Create Avatar</div></li>
                <li onClick={()=> {setSecondValue('User Settings')}} className="p-3 hover:bg-gray-100 flex flex-row gap-3 cursor-pointer"> <div className='ml-11 font-semibold'>User Settings</div></li>

                <div className="flex-grow h-px bg-gray-300 mt-4"></div>
                
                <div className='ml-4 text-gray-400 text-base  mt-6 flex flex-row items-center gap-6 '><GrView className='text-xl '/>  View Options</div>
                <li  className="p-3 hover:bg-gray-100 flex  cursor-pointer mt-2"> <div className=' font-semibold flex flex-row ml-12 '>Dark <RxSwitch className={`text-3xl ml-24 ${DarkModeSwitchOpen?  'bg-sky-400' : null}`} onClick={setDarkMode}/></div> </li>
 
                <div className="flex-grow h-px bg-gray-300 mt-2"></div>

                <li onClick={()=> {setSecondValue('Create a Community')}} className="p-3 hover:bg-gray-100 flex  cursor-pointer mt-3"> <div className=' font-semibold flex flex-row gap-6 '><TiGroup className='text-2xl '/>Create a Community </div> </li>
                
                <div className="flex-grow h-px bg-gray-300 mt-4"></div>

                <li onClick={()=> {setSecondValue('Log Out')}} className="p-3 hover:bg-gray-100 flex  cursor-pointer mt-3"> <div className=' font-semibold flex flex-row gap-6 '><TbLogout className='text-2xl '/>Log Out </div> </li>

                <div className='flex bg-white h-10 items-center'> <p className='text-gray-400 font-semibold text-xs ml-4 '>Reddit, Inc. © 2023. All rights<br/> reserved.</p></div>

              </ul>
            </div>
          ):null
          }
        </div>



        </nav>

        { item=='Home'? <Home/> : item=='Create Post'? <CreatePost/>:null}
        
      </div>

    );


}   