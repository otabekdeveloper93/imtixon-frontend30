import { createContext,useEffect, useState } from "react";
import {getRndInteger} from "../utils";
import {category} from '../consts';
import Loading from "../components/loading/loading";


export const PostsContext = createContext();

const PostProvider = (props) => {


    const [albums, setAlbums] = useState();
    const [filterAlbum, setFilterAlbum] = useState();
    const [pagenatedAlbum, setPagenatedAlbum] = useState();
    const [pageCount, setPageCount] = useState(1);

    const [loading, setLoading] = useState(false);
    
    useEffect(() =>{
        setLoading(true);

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            if(res.ok){
                return res.json()
            }
        } )
        .then(data => {
            
            const newArray = data.map(item => {
                return {
                    ...item,
                    likes: getRndInteger(0, 200),
                    date: new Date(`${getRndInteger(2001, 2023)}-${getRndInteger(1, 12)}-${getRndInteger(1, 28)}`).toLocaleDateString(),
                    type: category[getRndInteger(0, 4)],
                    share: getRndInteger(0, 200),
                    readed: getRndInteger(2, 5)
                }
            })
            setAlbums(newArray);
            setFilterAlbum(newArray)
        })
        .finally(() => {
            setTimeout(()=>{
                setLoading(false)
            }, 4000)
        })
    },[])

    useEffect(() => {

        if(filterAlbum){
            setPagenatedAlbum(filterAlbum.slice((pageCount - 1) * 10, pageCount * 10))
        }
    },[filterAlbum,pageCount])

    if(loading){
       return <Loading />
    }

    return <PostsContext.Provider value={{albums, setAlbums, filterAlbum, setFilterAlbum, pagenatedAlbum, setPagenatedAlbum, pageCount, setPageCount}} {...props} />
}

export default PostProvider;