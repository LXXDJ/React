import {applyMiddleware, legacy_createStore} from 'redux';
import rootReducer from './modules';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from '@redux-devtools/extension';

const store = legacy_createStore(   // 이게 그냥 createStore와 같은 역할, 버전 문제로 legacy 추가입력
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;