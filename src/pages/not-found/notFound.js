import Container from "../../components/container/container";
import Navbar from "../../components/navbar/navbar";
import errorImg from "../../assets/imgs/Vector.svg"
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import "./notFound.scss";
import { AuthContext } from "../../context/auth";
import { useContext } from "react";


const NotFound = () => {

    const { token } = useContext(AuthContext);

    return (
        <div className="not-found-page">
            <Container>
                <Navbar />
                <div className="error-box">
                    <img src={errorImg} alt="image" />
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