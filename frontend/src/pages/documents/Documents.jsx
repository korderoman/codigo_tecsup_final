import {getAllDocuments} from "@controllers/data.controller.jsx";
import {useEffect, useState} from "react";
import {faGamepad, faBook, faFilePdf} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Documents.scss';
import Loading from "@components/loading/Loading.jsx";
function Documents(){
    const [data, setData] = useState({documents:[]})

    useEffect( ()=>{
        const getDocuments = async ()=>{
            const aux =await getAllDocuments();
            if(aux.documents){
                setData({documents: aux.documents});
            }
            // https://devtrium.com/posts/async-functions-useeffect
            /**
             * * Si no se agrega existen posibles efectos secundarios como una rellamada
             *  * con lo que vuelve a setear a cero el array
             */
            return ()=>aux.documents

        }
        getDocuments();
    },[])

    /**
     * @description Renderiza los cards con data de firestore
      * @return {[{descripcion,titulo,autor,url,id,categoria, publicado}]}
     */
    const showContent = ()=>{
         return data.documents.map((d,i)=>{
             return (
                 <div key={i} className="d-flex flex-column my-2 mt-5" style={{width:"24rem"}} >
                     <span>Publicado el {d.publicado}</span>
                     <h1>{d.titulo}</h1>
                     <span title={d.categoria}  >
                                   <span className="fw-bold">Categorías:</span>  <FontAwesomeIcon className="documents__icon" icon={d.categoria==='videogames'? faGamepad : faBook}/>
                                </span>
                     <p><span className="fw-bold">Descripción: </span>{d.descripcion}</p>
                     <p><span className="fw-bold">Autor: </span>{d.autor}</p>
                     <span className="fw-bold mb-1">Descarga:</span>
                     <a className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href={d.url} rel="noreferrer noopener" target="_blank">
                         <FontAwesomeIcon icon={faFilePdf} size="xl"/>
                     </a>
                     <hr/>
                 </div>

             )
         })
     }

    return (
        <>
            <section className="container mt-5">
                {
                    data && data.documents.length>0 ? showContent() : <Loading/>
                }
            </section>

        </>
    )
}

export  default Documents
