import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=" flex flex-col items-end mr-96 mt-10 gap-3 ">

      <div className='bg-white w-96 h-32 flex flex-col '>

      <Image src="/images/RedditPremium.png "  alt='hello' width={400} height={200} />
      <a href="https://www.reddit.com/premium" className='rounded-3xl w-80 h-10 bg-orange-600 flex justify-center mt-5 ml-8 pt-1 text-white font-bold text-lg hover:bg-orange-500'>
          Try Now
        </a>

      </div>    
      
      <div className='bg-white w-96 h-80 flex flex-col '>
 
      
      <Image src="/images/redditfront.png "  alt='hello' width={400} height={200} />
      <div className="bg-gray-300 h-px  ml-4 mr-4"></div>
      <button className='rounded-3xl w-80 h-10 bg-blue-500 flex justify-center mt-8 ml-8 pt-1 text-white font-bold text-lg hover:bg-blue-400'>Create Post </button>
      <button className='rounded-3xl w-80 h-10 bg-white border border-blue-500 flex justify-center mt-2 ml-8 pt-1 text-blue-500 font-bold text-lg hover:bg-blue-50'>Create Community </button>
      </div>
      
      
      <div className='bg-white w-96 h-60  '>
       
      <div className='flex flex-row justify-between '>
                    <div className='flex flex-col ml-3 mt-2 gap-2 text-sm text-gray-500 '>
                    <a href="https://www.redditinc.com/policies/user-agreement" target="_self">           <p className='cursor-pointer'>User Agreement</p>   </a>
                    <a href="https://www.reddit.com/policies/privacy-policy" target="_self">              <p className='cursor-pointer'>Privacy Policy</p>  </a>
                    </div>

                    <div className='flex flex-col mr-3 mt-2 gap-2 text-sm text-gray-500'>
                    <a href="https://www.redditinc.com/policies/content-policy" target="_self">               <p className='cursor-pointer'>Content Policy</p>  </a>
                    <a href="https://www.redditinc.com/policies/moderator-code-of-conduct" target="_self">            <p className='cursor-pointer'>Moderator Code Of <br/>Conduct</p> </a>
                    </div>


      </div>

      <div className="bg-gray-300 h-px mt-3 ml-4 mr-4"></div>

      <div className='flex flex-row justify-between '>
                    <div className='flex flex-col ml-3 mt-2 gap-2 text-sm text-gray-500 '>
                        <p className='cursor-pointer'>English</p> 
                          <p className='cursor-pointer'>Francis</p>
                          <p className='cursor-pointer'>Italiano</p>
                    </div>

                    <div className='flex flex-col mr-14 mt-2 gap-2 text-sm text-gray-500'>
                          <p className='cursor-pointer'>Deutsch</p>
                          <p className='cursor-pointer'>Espanol</p>
                          <p className='cursor-pointer'>Portuges</p>
                    </div>


      </div>

      <div className="bg-gray-300 h-px mt-3 ml-4 mr-4"></div>
      <p className=' ml-3 mt-2  text-sm text-gray-500 '>Reddit, Inc. © 2023. All rights reserved.</p>

      </div>
    </div>
  );
}
