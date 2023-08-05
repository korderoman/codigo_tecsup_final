import './Post.scss';
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getPost} from "@controllers";
import Loading from "@components/loading/Loading.jsx";

function Post(){
    const {id} = useParams();
    const [post, setPost]=useState(null);
    const getPostData=async(id)=>{
        const response=await getPost(id);
        if(response.post){
            setPost(response.post)
        }
        return ()=>response.post

    }
    useEffect(()=>{
        getPostData(id);

    },[])
     const postContent=()=>{
        return (
           <section className="container-fluid">
               <h1 className="text-center text-uppercase fw-bold">{post.title}</h1>
               <section className="post__content">
                   {post.body}
               </section>
               <div className="post__image d-flex justify-content-center my-2">
                   <img src={post.image} alt="imagen"/>
               </div>
           </section>

        )
     }

    return(
      <>
          {post? postContent(): <Loading/>}
      </>
    );
}

export  default  Post;
