import Logo from "../logo/logo";
import "./footer.scss";
import Container from "../container/container";

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Logo/>
                <ul>
                    <h4>FIGHT WITH ME ON:</h4>
                    <li>Instagram</li>
                    <li>Telegram</li>
                    <li>YouTube</li>
                    <li>Figma</li>
                </ul>
                <ul>
                    <h4>WHAT I HAVE DONE:</h4>
                    <li>Xalq Kutubxonasi</li>
                    <li>Websitee</li>
                    <li>Website</li>
                    <li>Play Market</li>
                    <li>App Store</li>
                </ul>
                <ul>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Dribbble</li>
                    <li>Behance</li>
                </ul>
            </Container>
        </div>
    );
};

export default Footer;