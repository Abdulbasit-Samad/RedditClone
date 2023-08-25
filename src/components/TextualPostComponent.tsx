import { useState } from 'react';


export default function TextualPost (){

const titlelimit = 3000;
const [titlelength, setlength] = useState(0);
const [title, setTitle] = useState('');

const titleLengthhandler = (event: React.ChangeEvent<HTMLInputElement>) =>{

 setTitle(event.target.value);
 setlength(event.target.value.length)    
       
}

const setTitlefun  = (event: React.ChangeEvent<HTMLInputElement>) =>{

    setTitle(event.target.value);
}    

    return (

        <div className="bg-white w-125 h-96 flex flex-col items-center">
                <div className={` border ${ titlelength==0 ? 'border-gray-300': 'border-black'} mt-4  flex flex-row justify between`}>

                    <input maxLength={titlelimit} onChange={titleLengthhandler} placeholder='Title' className='w-120 h-10 px-2 border-none outline-none'/>
                    <p>{titlelength}/{titlelimit}</p>
                    

                </div>
        </div>
    );
}