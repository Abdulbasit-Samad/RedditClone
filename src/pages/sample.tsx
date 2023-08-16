import { useAppDispatch, useAppSelector } from './hooks';
import { update_page } from '../redux/Slice';
import { RootState } from '../redux/store';

export default function SamplePage() {
    const dispatch = useAppDispatch();
    
    
    /*const page = useSelector((state: RootState) => state.auth.page);*/



    const page = useAppSelector((state) => state.auth.page)

    console.log(page);

    const update = () => {
        dispatch(update_page('hello'));
    }

    return (

      <button onClick={update}>

        Press

      </button>
        
    );

}