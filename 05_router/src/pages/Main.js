import {Link} from 'react-router-dom';

function Main(){
    return(
        <div>
            <h1>메인</h1>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/about">소개</Link>
                <Link to="/menu">메뉴목록</Link>
                {/* <a href="/menu">메뉴목록</a> a태그로 라우팅됨 */}
            </nav>
        </div>
    )
}

export default Main;