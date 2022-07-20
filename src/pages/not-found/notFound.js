import Container from "../../components/container/container";
import errorImg from "../../assets/imgs/Vector.svg"
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import "./notFound.scss";
import { AuthContext } from "../../context/auth";
import { useContext } from "react";
import { category } from "../../consts";
import { BiSearch, BiMenu} from "react-icons/bi";
import Logo from "../../components/logo/logo";


const NotFound = () => {

    const { token } = useContext(AuthContext);

    return (
        <div className="not-found-page">
            <Container>
                <div className="navbar">
                    <Logo black="black"/>
                    <ul className="filter-block">
                        <li><button className="filter-category">All</button></li>
                        {category?.map((item,index) => (
                            <li key={index}><button className="filter-category">{item}</button></li>
                        ))}
                    </ul>
                    <div className="navbar-menu-box">
                        <button type="button" className="nav-menu"><BiMenu /></button>
                    </div>
                    <form>
                        <input type="text" />
                        <button className="nav-search" type="button">
                            <BiSearch/>
                        </button>
                    </form>
                </div>
                <div className="error-box">
                    <img src={errorImg} alt="" />
                    <h1>Page not found - 404</h1>
                    <p>This page not found (deleted or never exists).
                        <br/>Try a phrase in search box or back to home and start again.
                    </p>
                    {token ? <Link to="/">TAKE ME HOME! <BsChevronRight/></Link> : <Link to="/login">TAKE ME LOGIN! <BsChevronRight/></Link>}

                </div>
            </Container>
        </div>
    );
};


export default NotFound;