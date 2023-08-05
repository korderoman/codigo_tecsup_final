import {getPosts, getImagesFromCloudinary, getImages, getPostsFromFirestore,getPostFromFirestore} from "@services";
import {createLandingData} from "@utils/adapters";
import axios from "axios";
const expressUrl=import.meta.env.VITE_EXPRESS_LOCAL_URL
const getPostsData=async (quantity=4, postType="news")=>{
    try {
        //await getPostsFromFirestore();
        const [images, posts, postFirestore] = await  Promise.all([getImages(), getPosts(quantity,postType), getPostsFromFirestore()])
        const totalPosts=postFirestore.posts.concat(posts)
        return createLandingData(quantity,images,totalPosts);

    }catch (e){
        console.log(e)
    }

}



/**
 * @description Guarda un archivo en cloud storage y almacena metadata referida
 * al archivo
 * @param data Formulario
 * @return {Promise<void>}
 */
const sendDocument = async (data)=>{
    const formData = new FormData();

    formData.append("titulo",data.titulo )
    formData.append("descripcion", data.descripcion)
    formData.append("autor", data.autor)
    formData.append("categoria",data.categoria)
    formData.append("documento", data.documento[0])
    try {
        await axios.post(`${expressUrl}/upload`,formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }catch (e) {
        console.log(e)
    }
}

const sendPost= async(data)=>{
    const formData = new FormData();
    formData.append('titulo', data.titulo);
    formData.append('contenido',data.contenido);
    formData.append('imagen', data.imagen[0]);
    try {
        await  axios.post(`${expressUrl}/post`, formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    }catch (e) {
        console.log(e)
    }

}
const getPost=async (id)=>{
   const response= await getPostFromFirestore(id);
   return response;
}

const sendContact=async(data)=>{
    try {
        await axios.post(`${expressUrl}/contact`,data)
    }catch (e) {
        console.log(e)
    }
}

const getAllDocuments=async ()=>{
    try {
        const response=await  axios.get(`${expressUrl}/documents`)
       return response.data;
    }catch (e){
        console.log(e)
    }
}

export {getPostsData, sendDocument, sendContact, getAllDocuments,sendPost, getPost};
