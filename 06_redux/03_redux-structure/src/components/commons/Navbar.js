import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <ul>
                <li><NavLink to="/">메인</NavLink></li>
                <li><NavLink to="/menu">메뉴</NavLink></li>
                <li><NavLink to="/review">리뷰</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;