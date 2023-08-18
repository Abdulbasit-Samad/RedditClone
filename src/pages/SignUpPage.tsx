import {Set_SignupButtonClicked,Set_isLoadingSignupButton,Set_isValidSignupEmail} from '../redux/Slices/SignupSlice';
import { update_page } from '../redux/Slices/GeneralSlice';
import {Set_UserSignUpEmail} from '../redux/Slices/UserSlice';
import { useAppDispatch,useAppSelector } from '../redux/hooks';
import { FcGoogle } from "react-icons/fc"
import {AiFillApple} from "react-icons/ai"
import { useRouter } from 'next/router';
import {signInWithGoogle} from "../firebase"
import React from 'react';
import * as Loader from "react-loader-spinner";
import {TiTick} from 'react-icons/ti';

export default function SignupPage() {
  
  const router = useRouter();
  const dispatch = useAppDispatch();

  const isValidSignupEmail = useAppSelector((state) => state.Signup.isValidSignupEmail);
  const isLoadingSignupButton = useAppSelector((state) => state.Signup.isLoadingSignupButton);
  const SignupButtonClicked =  useAppSelector((state) => state.Signup.SignupButtonClicked);
  const SignupUserEmail = useAppSelector((state) => state.SignupUser.UserSignUpEmail);
  

  const moveToLoginView = () => {
   
    dispatch(update_page('Login'));
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
 
   dispatch(Set_SignupButtonClicked(false));
    const newEmail = event.target.value;
    dispatch(Set_UserSignUpEmail(newEmail));
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   dispatch(Set_isValidSignupEmail(emailRegex.test(newEmail)));


  };
  
  const handleContinueClick = () => {
   dispatch(Set_isLoadingSignupButton(true));   
    setTimeout(() => {

    dispatch(Set_isLoadingSignupButton(false));

     if( !isValidSignupEmail) dispatch(Set_SignupButtonClicked(true));


      else{
        router.replace('/UserNamePage');
      }
    }, 1000); 
    
  };


    return (
        <div className="flex flex-col px-8 justify-center">
       
       <h1 className="font-bold">Sign up</h1>
<h1 className="py-2 text-sm">By continuing, you are setting up a Reddit <br></br> account and agree to our <a className="text-blue-400" href="https://www.redditinc.com/policies/user-agreement" target="_blank" rel="noopener noreferrer">User Agreement</a> and <br></br><a className="text-blue-400" target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/policies/privacy-policy">Privacy Policy</a>.</h1>
       


       <div className="border border-gray-200 focus:border-black-200 p-2 mt-8 rounded-full flex flex-col hover:bg-blue-100 active:bg-blue-100 focus:ring focus:ring-blue-100 ">
       <button className="flex items-center " onClick={signInWithGoogle}>
         <FcGoogle className="text-xl "/> <h1 className="ml-4 text-base">Continue with Google</h1>
         
       </button>
       </div>


       <div className="border border-gray-200 focus:border-blue-500 p-2 mt-2 rounded-full flex flex-col hover:bg-blue-100 active:bg-blue-100 focus:ring focus:ring-blue-100 ">
       <button className="flex items-center" >
         <AiFillApple className="text-xl"/> <h1 className="ml-4 text-base">Continue with Apple</h1>
       </button>
       </div>

       <div className="flex items-center my-8">
    <div className="flex-grow h-px bg-gray-300"></div>
    <p className="mx-4 text-gray-400">or</p>
    <div className="flex-grow h-px bg-gray-300"></div>
    </div>
    <div className={`h-12 flex justify-between items-center border ${SignupUserEmail === '' ? 'border-zinc-300' :  isValidSignupEmail ? 'border-blue-600' : 'border-red-500'}`}>
    <input onChange={handleEmailChange} placeholder="Email" required className="ml-2 border-none outline-none focus:ring-0 placeholder-gray-400 text-sm  " />
    {SignupUserEmail == ''? null :  isValidSignupEmail ?  < TiTick className='text-blue-700' /> : <h1 className="font-bold mr-1 text-red-500">!</h1>}
    </div>

    {SignupButtonClicked ? <h1 className="text-xs ml-2 text-red-600 font-bold mt-1 ">
          That email is not valid
        </h1> :  !isValidSignupEmail && SignupUserEmail!='' ? <h1 className="text-xs ml-2 text-red-600 font-bold mt-1 ">
          Please fix your email to continue
        </h1> : null }

     <div className="mt-4 bg-blue-500 flex justify-center h-9 text-white font-bold hover:bg-blue-400">
      <button disabled={isLoadingSignupButton} onClick={handleContinueClick}>
      {isLoadingSignupButton ? (
            <Loader.TailSpin  color="white" height={20} width={20} />
          ) : (
            'CONTINUE'
          )}
           </button>
     </div>
     
     

     <div className="flex flex-row mt-6 ">
     <h1 className="text-xs">Already a Redditor?</h1>
        <span className="text-xs ml-2 text-blue-600 font-bold cursor-pointer" onClick={moveToLoginView}>
          LOG IN
        </span>

     </div>
      
      </div>
      

    )
  }
  