import { Link, NavLink } from "react-router-dom";

function Navbar(){
    const activeStyle ={
        backgroundColor: 'orangered'
    };

    return(
        <div>
            <ul>
                {/* Link는 href 속성만 가지고 있어서 스타일 적용불가, NavLink는 class 속성도 가지고 있어서 스타일 적용가능 */}
                <li><Link to="/">HOME</Link></li>
                <li><NavLink to="/about" style={({isActive}) => isActive ? activeStyle : undefined}>ABOUT</NavLink></li>
                <li><NavLink to="/menu" style={({isActive}) => isActive ? activeStyle : undefined}>MENU</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;