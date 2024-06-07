import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetReivewAPI } from "../../api/MenuAPICalls";

function Review({id}){
    const dispatch = useDispatch();
    const {review} = useSelector(state => state.reviewReducer);
    
    useEffect(()=>{
        dispatch(callGetReivewAPI(id));
    },[]);

    return(
        review &&
        <>
            <h3>이름 : {review.writer}</h3>
            <h3>제목 : {review.title}</h3>
            <h3>내용 : {review.content}</h3>
        </>
    );
}

export default Review;