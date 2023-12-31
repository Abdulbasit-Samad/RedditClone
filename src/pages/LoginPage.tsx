import { update_page } from '../redux/Slices/GeneralSlice';
import { FcGoogle } from "react-icons/fc"
import {AiFillApple} from "react-icons/ai"
import {signInWithGoogle, successfulEmailLogin} from '../firebase';
import {Set_UserName,Set_UserProfile,Set_UserSignUpEmail} from '../redux/Slices/UserSlice'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAppDispatch,useAppSelector } from '../redux/hooks';
export default function LoginView() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [uname, setName] = useState('');
  const [pass, setPass] = useState(''); 
  const SignupUserEmail= useAppSelector((state) => state.SignupUser.UserSignUpEmail);

  const moveToSignUp = () => {
  
    dispatch(update_page('Signup'));
    
  }

  const successfulGmailLogin = async() => {
    const data = await signInWithGoogle();
    if(data){

     dispatch(Set_UserSignUpEmail(data.Email));
     dispatch(Set_UserName(data.UserName));
     dispatch(Set_UserProfile(data.PhotoUrl));
     router.push('/RedditViewPage');

    }
   }

   const handleusername = (event: React.ChangeEvent<HTMLInputElement>) => {
     setName(event.target.value);
   }
   const handlepassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
   }

   const login = async () => {
    if(uname && pass){
    const check = await successfulEmailLogin(uname,pass);

    if(check ==true){
     router.push('./RedditViewPage')
    }
    else{
      alert('Invalid email or password')
    }

    }
    else{
      alert('Invalid email or password')
    }

   }



return(

<div className="flex flex-col px-8 justify-center">

<h1 className="font-bold">Login</h1>

<h1 className="py-2 text-sm">By continuing, you agree to our <a className="text-blue-400" href="https://www.redditinc.com/policies/user-agreement" target="_blank" rel="noopener noreferrer">User Agreement</a> and <a className="text-blue-400" target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/policies/privacy-policy">Privacy Policy</a>.</h1>

<div className="border border-gray-200 focus:border-black-200 p-2 mt-8 rounded-full flex flex-col hover:bg-blue-100 active:bg-blue-100 focus:ring focus:ring-blue-100 w-64">
       <button className="flex items-center " onClick={successfulGmailLogin}>
         <FcGoogle className="text-xl "/> <h1 className="ml-4 text-base">Continue with Google</h1>
         
       </button>
       </div>


       <div className="border border-gray-200 focus:border-blue-500 p-2 mt-2 rounded-full flex flex-col hover:bg-blue-100 active:bg-blue-100 focus:ring focus:ring-blue-100 w-64">
       <button className="flex items-center">
         <AiFillApple className="text-xl"/> <h1 className="ml-4 text-base">Continue with Apple</h1>
       </button>
       </div>

       <div className="flex items-center my-8 w-64">
    <div className="flex-grow h-px bg-gray-300"></div>
    <p className="mx-4 text-gray-400">or</p>
    <div className="flex-grow h-px bg-gray-300"></div>
    </div>

    <div className="border border-zinc-300 h-12 flex items-center hover:border-zinc-400 w-64">
    <input onChange={handleusername} placeholder="Username" className="ml-2 border-none outline-none focus:ring-0 placeholder-gray-400 text-sm " />
    </div>

    <div className="border border-zinc-300 h-12 flex items-center hover:border-zinc-400 mt-6 w-64">
    <input onChange={handlepassword} placeholder="Password" className="ml-2 border-none outline-none focus:ring-0 placeholder-gray-400 text-sm " />
    </div>

    <div className="mt-4 bg-blue-500 flex justify-center h-9 text-white font-bold hover:bg-blue-400 w-64">
      <button onClick={login}>LOGIN</button>
     </div>

    

     <div className="flex flex-row mt-6 ">
     <h1 className="text-xs">New to Reddit?</h1>
        <span className="text-xs ml-2 text-blue-600 cursor-pointer font-bold" onClick={moveToSignUp}>
          SIGN UP
        </span>

     </div>
    

</div>


);

}