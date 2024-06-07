import {createActions, handleActions} from 'redux-actions';

/* 초기값 */
// const initialState = {};     // 그냥 빈 객체로 초기화하면 실행은 잘 되지만, 콘솔창에 에러 발생
const initialState = {menu:null, menulist:[]};      // 그래서 이렇게 menu, menulist 따로 초기화

/* 액션 */
const GET_MENULIST = 'menu/GET_MENULIST';
const GET_MENU = 'menu/GET_MENU';

export const {menu: {getMenulist, getMenu}} = createActions({
    [GET_MENULIST]: result => ({menulist: result}),
    [GET_MENU]: result => ({menu: result})
})

/* 리듀서함수 */
const menuReducer = handleActions({
    [GET_MENULIST]: (state, {payload}) => payload,
    [GET_MENU]: (state, {payload}) => payload
}, initialState);

export default menuReducer;