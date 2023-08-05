import './News.scss';
import {useEffect, useState} from "react";
import {getPostsData} from "@controllers";
import {NavLink} from "react-router-dom";
function News(){
    const [news, setNews]= useState([]);
    const getNews = async ()=>{
        const posts = await  getPostsData(9, 'news');
        setNews(posts);
    }
    useEffect(()=>{
        getNews();
    },[])

    return (
        <>
            <main className="container news__main">
                {
                    news.map((n,i)=>{
                        return (<div key={i} className="d-flex  justify-content-center my-3">
                            <div className="card" style={{width: "23rem"}}>
                                <div className="card-img-top text-center py-2">
                                    <img src={n.image} className="card-img px-2" alt="imagen"/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-center">{n.title}</h5>
                                    <p className="card-text">
                                        {n.body}
                                    </p>

                                </div>
                                <div className="card-footer text-center">
                                    <NavLink to={`/post/${n.id}`} className="landing__subscription-btn btn">Leer más</NavLink>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </main>

        </>
    );
}

export  default News;
