import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { callGetMenuListAPI } from '../../api/MenuAPICalls';
import MenuItem from '../item/MenuItem';

function MenuList(){
    const dispatch = useDispatch();
    const {menulist} = useSelector(state => state.menuReducer);

    useEffect(()=>{
        /* 메뉴 목록을 조회하는 API를 호출하는 로직을 담은 함수 전달 */
        dispatch(callGetMenuListAPI());
    },[])

    return(
        <div className='menuBox'>
            {menulist && menulist.map(menu => <MenuItem key={menu.id} menu={menu} />)}
        </div>
    )
}

export default MenuList;