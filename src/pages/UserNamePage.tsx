import { useState } from 'react';
import {useAppSelector, useAppDispatch} from '../redux/hooks';
import Image from 'next/image';
import { Set_UserName, Set_UserSignUpEmail } from '@/redux/Slices/UserSlice';
import {update_page} from '@/redux/Slices/GeneralSlice';
import { useRouter } from 'next/router';
import {checkUniqueEntity} from "../firebase"
import {CreateUserWithEmailAndPassword} from '../firebase';
  export default function SignupPage() {
    
   const router = useRouter();
   const dispatch = useAppDispatch();
   const UserSignUpEmail = useAppSelector((state) => state.SignupUser.UserSignUpEmail); 
   const isValidSignUpemail = useAppSelector((state) => state.Signup.isValidSignupEmail); 
   const UserName = useAppSelector((state) => state.SignupUser.UserName);
   const [startIndex, setIndex] = useState(0);
   const SampleUsernames = ['Fair_Negotiation_389', 'Careful_Apricot_7800','Delicious-Buy-4144','Independent-Meat-810', 'AcrobaticCaramel2222', 'No_Honey_8320', 'One-Main2074', 'Junior_Today_4771','Wooden-Ad-5263','Great_Hawk_1330','Full-Butterscotch166','Foreign_Stick_760','General-Priority-520'];
   const itemsPerPage = 5;
   const page = useAppSelector((state) => state.general.page);
   const [redborderU, setBorderU] = useState('');
   const [symbolU, setsymbolU] = useState('');
   const [password, setPassword] = useState('');
   const [redborderP, setBorderP] = useState('');
   const [symbolP, setsymbolP] = useState('');


   const refereshUserName = ( )=>{
    const nextIndex = startIndex + itemsPerPage;
    setIndex(nextIndex >= SampleUsernames.length ? 0 : nextIndex);
   }
   const handleUserName = async (event: React.ChangeEvent<HTMLInputElement>) => {

       dispatch(Set_UserName(event.target.value));
      
       if(event.target.value==''){
        setBorderU('');
        setsymbolU('');
       }
       else{
        const unq = await checkUniqueEntity('UserName', event.target.value);
       if(!unq || event.target.value.length<4){
        setBorderU('redborder');
        setsymbolU('cross');
       }
       else{
        setBorderU('blueborder');
        setsymbolU('tick');
       }
      }

   }
   const handlePassword = async (event: React.ChangeEvent<HTMLInputElement>) => {

    setPassword(event.target.value);
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,50}$/;
    if(event.target.value==''){
      setBorderP('');
      setsymbolP('');
    }
    else{
       if(passwordPattern.test(event.target.value)){
        console.log('blue')
        setBorderP('blueborder');
        setsymbolP('tick');
       }
       else{
        setBorderP('redborder');
        setsymbolP('cross');
       }
    }

    


   }
   const onSignUp = async ()=> {

    if(symbolP=='tick' && symbolU=='tick' && UserSignUpEmail != ''){
      const data = {
        Email : UserSignUpEmail,
        Password : password,
        PhotoUrl : '',
        UserName : UserName,
      }

     const check =await CreateUserWithEmailAndPassword(UserSignUpEmail.toString(), password,UserName.toString());
     if(check)
      router.push('./RedditViewPage');
    }

  }
   const setSampleUserName = async(item : string ) => {

    dispatch (Set_UserName(item));
    const unq = await checkUniqueEntity('UserName', item);
    if(unq){
    setBorderU('blueborder');
    setsymbolU('tick');
    }
    else{
      setBorderU('redborder');
    setsymbolU('cross');
    }
   }

  const BacktoSignup = () => {
    dispatch(update_page('Signup'));
    router.replace('/');

  }

   const visibleItems = SampleUsernames.slice(startIndex, startIndex + itemsPerPage);

  return(
   <>

        <h1 className=' text-xl ml-6 mt-6 text-gray-800 font-semibold '>Choose your username</h1>
        <h1 className='ml-6 '>Your username is how other community members will see you. This name will be used to credit you for things you share on Reddit. What should we call you?</h1>
        <div className="flex-grow h-px bg-gray-300 mt-6"></div>
        
       <div className='mt-4 flex justify-between'>
        
        <form method='POST' className='flex flex-col gap-4 ml-6 ' >
       
       <div className = {`border ${redborderU == 'redborder' ? 'border-red-500' : redborderU == 'blueborder' ? 'border-blue-600' : 'border-gray-200' }`}>
       <input value={UserName.toString()} onChange={handleUserName} placeholder="CHOOSE A USERNAME" required className=" focus:ring-0 placeholder-gray-400    w-80 h-12 pl-2  text-xs bg-zinc-50 border outline-none " aria-required/>
       </div>

       <div className={`border ${redborderP == 'redborder' ? 'border-red-500' : redborderP == 'blueborder' ? 'border-blue-600' : 'border-gray-200' }`}>

       <input onChange={handlePassword} placeholder="PASSWORD" required className=" focus:ring-0 placeholder-gray-400 text-xs   pl-2 w-80 h-12  bg-zinc-50 border outline-none" aria-required />
       
       </div>
       

       </form>
         
       <div className='flex flex-col'>

         <div className='flex flex-row mr-10 gap-2 items-center'>

         <p>Here are some username suggestions</p>
         <Image onClick={refereshUserName} 
                  src="https://www.redditstatic.com/accountmanager/25f30c472d0243a2d874451a240fe08a.svg"
                  alt="Reddit Logo"
                  width={15}
                  height={15}
           className='cursor-pointer' />

        </div> 

        <div >

            <ul className='cursor-pointer text-sky-600 text-sm'>
          {visibleItems.map((item, index) => (
          <li onClick={() => setSampleUserName(item)} className='mt-2' key={index}>{item}</li>
          ))}
        </ul>
        
           
            
        </div>
  
        </div>

       </div>

       {/* This will push the line to the bottom */}
       <div className="flex-grow h-px bg-gray-300 mt-120"></div>

       <div className='flex flex-row justify-between items-center mt-4'>

        <button onClick={BacktoSignup} className='text-zinc-950  ml-4 hover:text-blue-500'>Back</button>
        <div className='bg-sky-600 text-white mr-5 w-40 h-9 flex justify-center hover:bg-sky-500'>
        <button onClick={onSignUp}>Signup</button>
        </div>

       </div>

   </>
   
   
  );

  }    