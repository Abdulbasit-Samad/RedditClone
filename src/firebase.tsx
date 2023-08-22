// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import { Set_UserSignUpEmail, Set_UserName, Set_UserProfile } from "./redux/Slices/UserSlice";
import {useAppDispatch} from './redux/hooks';
import {createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { nanoid } from 'nanoid';


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW-lSY0EynIgUsGsQsMKBya1YkaOx58yQ",
  authDomain: "redditclone-11d9c.firebaseapp.com",
  projectId: "redditclone-11d9c",
  storageBucket: "redditclone-11d9c.appspot.com",
  messagingSenderId: "92572922792",
  appId: "1:92572922792:web:64b0ab55f7660cc7aae39d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const usersCollection = collection(db, 'Users');
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();


export const userData = {
  Type : '',
  Email: '',
  Password : '',
  UserName : '',
  PhotoUrl : '',
};

const updateUserValues = (email : string, password : string, userName : string, photoUrl: string, typee: string) => {
  return {
    ...userData,
    Type : typee,
    Email: email,
    Password: password,
    UserName: userName,
    PhotoUrl: photoUrl,
  };
};

const generateUserName = async (name: string | null) => {

  
  while(true){
    if(name) {
    let uname = name.replace(/\s/g, '');
    uname +='_' + nanoid(6);
    
    if(await checkUniqueEntity('UserName',uname)){
      console.log(uname);
     return uname;
    }

  }
  else{return ''};
  }

}

export const checkUniqueEntity = async (name: string, value: string | null | String)=>{

const Userquery = query(usersCollection, where(name, '==', value));
const querysnap = await getDocs(Userquery);

  if(querysnap.size==0)return true;
  else{return false;}

}

const adduserinfo = async  (Uemail : string, Upass : string | null, Uname : string, Purl : string, Typee: string ) => {
 
  let tname = await generateUserName(Uname);
  const updatedUserData = updateUserValues(Uemail, '', tname, Purl, Typee);
  
  try {

    await addDoc(usersCollection,updatedUserData);
    return updatedUserData;

  }
  catch (error){return '' }

}


export const signInWithGoogle = async () => {
  
  try {
      const result = await signInWithPopup(auth, GoogleProvider); // Use 'await' here
      
      if(await checkUniqueEntity('Email',result.user.email)){

        if(result.user.email && result.user.photoURL && result.user.displayName)
       
         return adduserinfo(result.user.email,'',result.user.displayName,result.user.photoURL, 'google');
        
        
      }
      else{
        const Userquery = query(usersCollection, where('Email', '==', result.user.email));
        const querysnap = await getDocs(Userquery);
        let uname = '';
        querysnap.forEach((doc) => {
          uname = doc.data().UserName;
        });
        if(result.user.email && result.user.photoURL)
        return updateUserValues(result.user.email,'',uname,result.user.photoURL, 'google');
      }
      

  } catch (e) { return '' }
};


export const CreateUserWithEmailAndPassword = async ( Uemail: string , Upassword: string, Uname : string) => {
  try{
    const user = createUserWithEmailAndPassword(auth,Uemail, Upassword );
    const data = {
      Type: 'email',
      Email : Uemail,
      Password : Upassword,
      PhotoUrl : '',
      UserName : Uname,
    }
    try {

      await addDoc(usersCollection,data);
    
      }
      catch (error){ }
  }
  catch (error) {

  }
  
}

export const successfulEmailLogin = async (username : string, password : string) => {

  const Userquery = query(usersCollection, where('UserName', '==', username));
      const querysnap = await getDocs(Userquery);
      let pass = '', ty = '';
      querysnap.forEach((doc) => {
        pass = doc.data().Password;
        ty= doc.data().Type;
      });
      if(pass == password && ty=='email')return true;
      else {return false;}
  
 }


  