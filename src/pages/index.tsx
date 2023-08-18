import SideImage from './ImgComponent';
import SignupPage from './SignUpPage';
import LoginView from './LoginPage';
import {  useAppSelector } from '../redux/hooks';

export default function Home() {
   
  const page = useAppSelector((state) => state.general.page)
  console.log("test")
  
  return (
    <div className='flex flex-row'>

      <SideImage/> {page == 'Login' ?  <LoginView/> : <SignupPage/> }

    </div>
  )
}
