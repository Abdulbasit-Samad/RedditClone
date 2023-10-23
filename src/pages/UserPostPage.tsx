import {MdOutlinePostAdd} from 'react-icons/md';
import {CgImage} from 'react-icons/cg';
import {HiMiniLink} from 'react-icons/hi2';
import {update_postType} from '../redux/Slices/PostSlice';
import TextualPost from '@/components/TextualPostComponent'; 
import ImageAndVedioPost from '@/components/ImageVedioPostComponnet'; 
import LinkPost from '@/components/LinkPostComponent';
import { useAppDispatch,useAppSelector } from '../redux/hooks';


export default function CreatePost (){

    const dispatch = useAppDispatch();
    const postType = useAppSelector((state) => state.Post.postType);

    const changePostType = (type : string ) => {
        
        dispatch(update_postType(type));
        
    }
    

    return (
        <div className=" flex flex-col ">

            <h1 className="font-semibold text-xl font-sans ml-64 mt-6">Create a Post </h1>

            <div className="flex-grow h-px bg-white  ml-100 mr-120"></div>

            <div className='flex flex-row mt-8 ml-64 '>
                    <div onClick={()=> {changePostType('Textual')}} className={` w-64 h-14 hover:bg-blue-50 flex flex-row justify-center  gap-3 py-4 border border-r-gray-400  ${postType =='Textual'? 'border-b-blue-500 border-b-4 bg-blue-50' : 'border-b-gray-400'}  bg-white`}>
                          <MdOutlinePostAdd className={`text-4xl ${postType=='Textual'? 'text-blue-500' : 'text-gray-500'}`}/> <p className={`font-semibold text-lg mt-1  ${postType=='Textual'? 'text-blue-500' : 'text-gray-500'}`}> Post</p>
                    </div>
                    
                    <div onClick={()=> {changePostType('ImageAndVedio')}} className={` w-64 h-14 hover:bg-blue-50 flex flex-row justify-center gap-3 py-4 border border-r-gray-400 ${postType =='ImageAndVedio'? 'border-b-blue-500 border-b-4 bg-blue-50': 'border-b-gray-400'} bg-white `}>

                        <CgImage className={`text-3xl ${postType=='ImageAndVedio'? 'text-blue-500' : 'text-gray-500'}`}/> <p className={`text-lg mt-1 font-semibold ${postType=='ImageAndVedio'? 'text-blue-500' : 'text-gray-500'} `} > Image & Vedio</p>

                    </div>

                    <div onClick={()=> {changePostType('Link')}} className={` w-64 h-14 hover:bg-blue-50 flex flex-row justify-center py-4 gap-3  border ${postType =='Link'? 'border-b-blue-500 border-b-4 bg-blue-50': 'border-b-gray-400'} bg-white`}>

                        <HiMiniLink className={`text-3xl ${postType=='Link'? 'text-blue-500' : 'text-gray-500'}`}/>  <p className={`text-lg   ${postType=='Link'? 'text-blue-500' : 'text-gray-500'}  `}> Link</p>
        
                    </div>

            </div>

            {
            
                 postType=='Textual'? 
                 
                
                <div className='ml-64'> <TextualPost/> </div>
                 
                 
                 :

                 postType=='ImageAndVedio'? 


                 <div className='ml-64'>  <ImageAndVedioPost/> </div>

                 : 

                 <div className='ml-64'>  <LinkPost/> </div>

            
            
            
            }
                   

        </div>
        


    );

}