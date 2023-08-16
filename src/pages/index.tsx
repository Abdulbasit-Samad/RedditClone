/*import SideImage from './ImgComponent';
import SignupPage from './SignUpPage';
import LoginView from './LoginPage';
import { useRouter } from 'next/router'; */
import SamplePage from "./sample"

export default function Home() {
  /*const router = useRouter();
    const { query } = router;
    const param = query.key; */
  return (
    <div className='flex flex-row'>

   { /*   <SideImage/> {param == 'login' ?  <LoginView/> : <SignupPage/> */}

    <SamplePage/>


    </div>
  )
}
