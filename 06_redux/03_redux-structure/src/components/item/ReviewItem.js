import { Link } from "react-router-dom";

function ReviewItem({review}){
    return(
        <Link to={`/review/${review.id}`}>
            <div className="menuItem">
                <h3>이름 : {review.writer}</h3>
                <h3>제목 : {review.title}</h3>
                <h3>내용 : {review.content}</h3>
            </div>
        </Link>
    )
}

export default ReviewItem;