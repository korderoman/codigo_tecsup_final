import Slider from "@components/slider/Slider.jsx";
import './Landing.scss';
import {NavLink} from "react-router-dom";
import {Suspense, useEffect, useState, lazy} from "react";
import {getPostsData} from "@controllers";
// import {SubscribeModal} from "@components/modals";

const SubscribeModal = lazy(()=>import('@components/modals/subscribe/Subscribe.modal.jsx'))
function Landing(props){
    const [news, setNews] =useState([]);
    const [showModal, setShowModal] = useState(false);

    const getNews = async ()=>{
        const posts= await getPostsData(4, 'news');
        setNews(posts);
    }

    useEffect(()=>{
        getNews();
    },[])
    return (
        <>
            <header>
                <section className="container-fluid">
                    <Slider/>
                    <section className="container landing__icons-sec">
                        <div className="row">
                            {
                                props.icons.map((icon,index)=>{
                                    return (
                                        <div key={icon+index} className="col-12 col-md-4">
                                            <div className="landing__icons-content">
                                                <div className="landing__icons-img">
                                                    <img className="landing__icons-slider" src={`icons/${icon}.png`} alt="icon"/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                </section>
            </header>
            <main className="landing__main container">
                {/*suscripcion*/}
                <section className="row landing__subscription ">
                    {
                        props.subscriptions.map((s,i)=>{
                            return (
                                <div key={i} className=" my-3 col-12 col-md-6 d-flex justify-content-center">
                                    <div className="card" style={{width: "18rem"}}>
                                        <img src={`images/landing/${s.imgLabel}.png`} className="card-img-top" alt={s.imgLabel} />
                                            <div className="card-body text-center">
                                                <h5 className="card-title text-center">{s.label}</h5>
                                                {
                                                    s.id==='boletin'?
                                                        <>
                                                        <button
                                                            type="button"
                                                            className="landing__subscription-btn btn"
                                                            onClick={()=>setShowModal(true)}
                                                        >
                                                            {s.buttonLabel}
                                                        </button>
                                                        {showModal &&
                                                            <Suspense fallback={<h3>Cargando..</h3>}>
                                                                <SubscribeModal setShowModal={setShowModal}/>
                                                            </Suspense>
                                                        }
                                                        </>
                                                        :<NavLink to={s.to} className="landing__subscription-btn btn">{s.buttonLabel}</NavLink>
                                                }

                                            </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
                {/*Noticias y Eventos*/}
                <section className="row">
                    {
                        news.map((n,i)=>{
                            return (<div key={i} className="d-flex  justify-content-center my-3 col-12 col-md-3">
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="card-img-top text-center py-2">
                                        <img src={n.image} className="card-img px-2" alt="imagen"/>
                                    </div>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-center">{n.title}</h5>
                                        <p className="card-text text-truncate" style={{minHeight:"80px"}}>
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
                </section>
            </main>

        </>
    )
}

Landing.defaultProps={
    icons:['hs1','hs2','hs3'],
    subscriptions:[
        {
            id:'boletin',
            label:'Boletín',
            imgLabel:'suscripciones',
            buttonLabel:'Suscribirse',
            to:'/subscription'
        },
        {
            id:'datos',
            label:'Documentos',
            imgLabel: 'datos-abiertos',
            buttonLabel: 'Ingresar',
            to:'/documents'
        }
    ]
}
export default Landing;
