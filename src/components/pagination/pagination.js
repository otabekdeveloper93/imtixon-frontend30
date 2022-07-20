import {useContext} from 'react';
import { PostsContext } from "../../context/postContext";
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";
import "./pagination.scss";

const Pagination = () => {

    const { filterAlbum, pageCount, setPageCount} = useContext(PostsContext);

    if(!filterAlbum){
        return null
    }

    const pagination = Math.ceil(filterAlbum.length / 10);



    const handlerSwitchPage = (evt) => {
        if(evt.target.matches("button")){
            setPageCount(+evt.target.dataset.id)
            
            evt.target.style.color = "#FFBA9D"
        } 
    }
    const nextPageHandler = (evt) => {
        if(pageCount < pagination){
            setPageCount(pageCount + 1)
        }
        if(pageCount >= 5){
            evt.target.previousElementSibling.children[0].style.transform = "translateX(-168px)"
        }
    }

    const prevPageHandler = (evt) => {
        if(pageCount > 1){
            setPageCount(pageCount - 1)
        }
        if(pageCount <= 6){
            evt.target.nextElementSibling.children[0].style.transform = "translateX(0)"
        }
    }

    return (
        <div className="pagination">
            <div className='page-box'>
                <button className='next-prev' onClick={prevPageHandler}>
                    <BsChevronLeft/>
                </button>
                <div className='div'>
                    <ul onClick={handlerSwitchPage}>
                        {Array(pagination).fill().map((_,index) => (
                            <li key={index}>
                                <button data-id={index + 1}>{ index + 1}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className='next-prev' onClick={nextPageHandler}>
                    <BsChevronRight/>
                </button>
            </div>
        </div>

    );
};

export default Pagination;