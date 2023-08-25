import SideImage from '../components/ImgComponent';
import SignupPage from './SignUpPage';
import LoginView from './LoginPage';
import HomePage from './RedditViewPage';
import {  useAppSelector } from '../redux/hooks';

export default function Home() {
   
  const page = useAppSelector((state) => state.general.page)
  
  return (
  /*  <div className='flex flex-row'>

      <SideImage/> {page == 'Login' ?  <LoginView/> : <SignupPage/> }

  </div>  */

    <HomePage/>


  )
}
