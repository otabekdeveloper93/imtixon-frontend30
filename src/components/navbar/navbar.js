import { useContext, useRef, useState} from "react";
import Logo from "../logo/logo";
import { BiSearch, BiMenu,BiX} from "react-icons/bi";
import "./navbar.scss";
import { PostsContext } from "../../context/postContext";
import { category } from "../../consts";


const Navbar = () => {

    const searchInput = useRef();
    const filterBlock = useRef();
    const {albums,setFilterAlbum} = useContext(PostsContext);

    const [gamburgerMenu, setGamburgerMenu] = useState(false);

    const handlerSeachForm = (evt) => {
        evt.preventDefault();

        const searchInputValue = searchInput.current.value;
        if(albums){
           const newArr = albums.filter(item => item.title.includes(searchInputValue))
            setFilterAlbum(newArr)
        }
    }

    const filterArrayHandler = (evt) => {
        
        if(evt.target.matches("button") && evt.target.textContent !== "All"){
            if(albums){
                const newArr = albums.filter(item => item.type.includes(evt.target.textContent));
                setFilterAlbum(newArr)
                filterBlock.current.classList.remove("activate")
                setGamburgerMenu(false);
            }
        }else{
            if(albums){
                const newArr = albums.filter(item => item.type.includes(''));
                setFilterAlbum(newArr)
                filterBlock.current.classList.remove("activate")
                setGamburgerMenu(false);
            }
        }
        
    }

    const handlerGamburgerMenu = (evt) => {

        if(evt.target.matches("button") && evt.target.className === "nav-menu"){
            filterBlock.current.classList.add("activate")
            setGamburgerMenu(true);
        }
        else {
            filterBlock.current.classList.remove("activate")
            setGamburgerMenu(false);
        }
    }

    return (
        <div className="navbar">
            <Logo black="black"/>
            <ul className="filter-block" onClick={filterArrayHandler} ref={filterBlock}>
                <li><button className="filter-category">All</button></li>
                {category?.map((item,index) => (
                    <li key={index}><button className="filter-category">{item}</button></li>
                ))}
            </ul>
            <div className="navbar-menu-box" onClick={handlerGamburgerMenu}>
                {gamburgerMenu ? <button type="button" className="nav-x"><BiX /></button> : <button type="button" className="nav-menu"><BiMenu /></button>}
            </div>
            <form onSubmit={handlerSeachForm}>
                <input type="text" ref={searchInput}/>
                <button className="nav-search" type="submit">
                    <BiSearch/>
                </button>
            </form>
        </div>
    );
};


export default Navbar;