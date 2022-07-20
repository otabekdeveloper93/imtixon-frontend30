import Container from "../../components/container/container";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Img from "../../assets/imgs/Img.jpg"
import { BsClock, BsShare } from "react-icons/bs";
import { MdOutlineWavingHand } from "react-icons/md";
import { useContext, useState } from "react";
import { PostsContext } from "../../context/postContext"
import { useParams } from "react-router-dom";
import "./single.scss";

const Single = () => {

    const {id} = useParams();
    const {albums} = useContext(PostsContext);
    const [likes, setLikes] = useState();
    let singleObj = null;
    
    if(albums){
        const obj = albums.find(item => item.id === +id)
        singleObj = {...obj}
    }

    const handlerLikes = (evt) => {
        const obj = albums.find(item => item.id === +evt.target.dataset.idjon);
        setLikes(obj.likes += 1);
    }

    return (
        <div className="single-page">
            <Container>
                <Navbar/>
                <div className="single-section">
                    <div className="like-share-box">
                        <div className="likes" data-idjon={singleObj ? singleObj.id : ""} onClick={handlerLikes} style={{textAlign: "center"}}> 
                            <MdOutlineWavingHand/>
                            <p>{likes ? likes : singleObj ? singleObj.likes : 0}</p>
                        </div>
                        <div style={{textAlign: "center"}}>
                            <BsShare/>
                            <p>{singleObj ? singleObj.share : 0}</p>
                        </div>
                    </div>
                    <div className="single-post">
                        <span className="user-type">{singleObj ? singleObj.type : ""}</span>
                        <h4 className="user-title">{singleObj ? singleObj.title : ''}</h4>
                        <div><span className="single-date">{singleObj ? singleObj.date : ''}</span><span> | </span><span className="single-clock"><BsClock/> {singleObj ? singleObj.readed : 0} minutes read</span></div>
                    </div>
                    <img className="img" src={Img} alt="img" />
                    <p className="post-body">{singleObj ? singleObj.body : 0}</p>
                    <h4>Information overload</h4>
                    <p>Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.</p>
                    <div className="salom">
                        <p>Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit.uz nulla, viverra id suscipit quis, tristique a dolor. </p>
                        <i>'Designing For Sustainability, Tim Frick, 2014'</i>
                    </div>
                    <h4>Lessons Learnt: Best Practice</h4>
                    <ul className="morbi">
                        <li>Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.</li>
                        <li>Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.</li>
                    </ul>
                    <div className="more">
                        <h3>More like this</h3>
                        <div className='post'>
                            <div className='date-category'>
                                <span>September 24.2020</span>
                                <span>Figma</span>
                            </div>
                            <p className='title'>How to choose the right colors when creating a website?</p>
                            <span className='readed'>
                                <BsClock />
                                3 minutes read
                            </span>
                        </div>
                        <div className='post'>
                            <div className='date-category'>
                                <span>September 24.2020</span>
                                <span>User Interface</span>
                            </div>
                            <p className='title'>Where to grow your business as a photographer: site or social media?</p>
                            <span className='readed'>
                                <BsClock />
                                3 minutes read
                            </span>
                        </div>
                        <div className='post'>
                            <div className='date-category'>
                                <span>September 24.2020</span>
                                <span>UX</span>
                            </div>
                            <p className='title'>Travelling as a way of self-discovery and progress</p>
                            <span className='readed'>
                                <BsClock />
                                3 minutes read
                            </span>
                        </div>
                    </div>

                </div>
            </Container>
            <Footer/>
        </div>
    );
};

export default Single;