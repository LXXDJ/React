import { useParams } from "react-router-dom";
import Review from "../components/item/Review";

function ReviewDetail(){
    const {id} = useParams();

    return(
        <div>
            <h1>리뷰 상세</h1>
            <Review id={id}/>
        </div>
    )
}

export default ReviewDetail;