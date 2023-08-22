import { useAppDispatch,useAppSelector } from '../redux/hooks';


export default function HomePage() {
 const SignupUserEmail = useAppSelector((state) => state.SignupUser.UserSignUpEmail);
 const UserName = useAppSelector((state) => state.SignupUser.UserName);

    return (

      <div>
        <h1>{UserName}</h1>
      </div>

    );


}   