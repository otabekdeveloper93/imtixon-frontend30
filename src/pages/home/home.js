
import Container from "../../components/container/container";
import Navbar from "../../components/navbar/navbar";
import { BsChevronRight,BsTwitter } from "react-icons/bs";
import { FaFacebookF,FaGithub,FaLinkedinIn } from "react-icons/fa";
import Posts from "../../components/posts/posts";
import { Link, useNavigate } from "react-router-dom";
import "./home.scss";
import Footer from "../../components/footer/footer";
import Pagination from "../../components/pagination/pagination";

const Home = () => {

    return (
        <div className="home-page">
            <Container>
                <Navbar/>
                <div className="home-secton">
                    <div className="social-box">
                        <h4>What I do!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
                        <div className="explore">
                            <span>
                            EXPLORE ME 
                            </span>
                            <button>
                                <BsChevronRight />
                            </button>
                        </div>
                        <ul className="socials">
                            <Link to="/">
                                <FaFacebookF />
                            </Link>
                            <Link to="/">
                                <FaGithub />
                            </Link>
                            <Link to="/">
                                <BsTwitter />
                            </Link>
                            <Link to="/">
                                <FaLinkedinIn />
                            </Link>
                        </ul>
                    </div>
                    <Posts />
                </div>
                <Pagination />
            </Container>
            <Footer />
        </div>
    );
};

export default Home;