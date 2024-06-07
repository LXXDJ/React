import { getMenu, getMenulist } from "../modules/MenuModules";
import { getReviewlist, getReview } from "../modules/ReivewModules";
import { request } from "./api";

export function callGetMenuListAPI(){
    // Menus와 관련해서 비동기 통신
    return async(dispatch, getState) => {
        const result = await request('GET', '/menu');
        console.log('getMenuList result: ', result);    // 확인용 출력

        /* API 호출을 통해 반환 받은 데이터를 Store에 저장하기 위해 다시 dispatch(action객체) 호출 */
        dispatch(getMenulist(result));
    }
}

export function callGetMenuAPI(id){
    return async (dispatch, getState) => {
        const result = await request('GET', `/menu/${id}`)
        // console.log('getMenu result: ', result);

        dispatch(getMenu(result));
    }
}

export function callGetReviewListAPI(){
    return async(dispatch, getState) => {
        const result = await request('GET', '/review');
        dispatch(getReviewlist(result));
    }
}

export function callGetReivewAPI(id){
    return async (dispatch, getState) => {
        const result = await request('GET', `/review/${id}`)
        dispatch(getReview(result));
    }
}