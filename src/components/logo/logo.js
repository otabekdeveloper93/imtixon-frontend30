import { Link } from "react-router-dom";
import logo from "../../assets/imgs/Subtract.svg";
import logo1 from "../../assets/imgs/Subtract1.svg";
import './logo.scss';

const Logo = ({black}) => {
    return (           
        <Link to="/">
            <div className="logo">
                <img className="logo-img" src={black ? logo : logo1} alt="logo"/>
                <h2>BoburBlog</h2>
            </div>
        </Link>
    );
};

export default Logo;