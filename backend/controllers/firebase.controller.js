//*Solicitar llave al administrador
const serviceAccountFirebase= require("../keys/tecsup-3cb3f-firebase-adminsdk-z0w3t-f398591f7c.json")
const firebase = require("firebase-admin");
const moment = require("moment")

moment.locale('es-mx')
firebase.initializeApp({
    credential:firebase.credential.cert(serviceAccountFirebase)
})




// * https://cloud.google.com/storage/docs/access-control/iam-permissions?hl=es-419
// * https://cloud.google.com/storage/docs/access-control/iam-roles
const storage = firebase.storage();
const firestore = firebase.firestore();
/**
 * @description Sube un archivo en buffer a cloud storage, lo hace accesible y
 * obtiene su url pública, internamente invoca a firestore para subir la metadata
 * del formulario
 * @param req Todo el request
 * @return {Promise<void>} No retorna un valor
 */
const uploadDocument=async (req)=>{
    const file = req.file;
    const bucket=storage.bucket('tecsupfiles')
    const blob=bucket.file("files/"+file.originalname)
    const blobStream = blob.createWriteStream({
        metadata:{
            contentType: file.mimeType
        }
    })
    blobStream.on("error",e=>{
        console.log(e)
    })
    blobStream.on("finish",async()=>{
        console.log("archivo subido a cloud storage con éxito")
        await blob.makePublic();
        const publicUrl=blob.publicUrl();
        await uploadMetadata(req.body,publicUrl)
    })
    blobStream.end(file.buffer)

}
/**
 * @description Sube un documento a la colección de documents en firestore
 * @param data Metada del documento (proviene del formulario
 * @param url Url generada del documento subido a cloud storage
 * @return {Promise<void>} No tiene retorno
 */
 const uploadMetadata = async(data, url)=>{
        const docToSend = {
            titulo: data.titulo,
            descripcion: data.descripcion,
            autor: data.autor,
            categoria: data.categoria,
            id:'',
            publicado:'',
            url
        }
        try {
            const id = firestore.collection('documents').doc().id;
            docToSend.id = id;
            docToSend.publicado = moment().format('LL');
            await firestore.collection('documents').doc(id).create(docToSend);
            console.log("documento subido a firestore con éxito");
        } catch (e) {
            console.log(e)
        }

 }

 const uploadPosts= async (data)=>{
     const docToSend = {
         title: data.title,
         body: data.body,
         image: data.image,
         id:'',

     }
     try {
         const id = firestore.collection('posts').doc().id;
         docToSend.id =id;
         await firestore.collection('posts').doc(id).create(docToSend);
         console.log("post subido a firestore con éxito");
     }catch (e) {
         console.log(e);
     }

}

const getAllPosts=async ()=>{
    try {
        const posts = (await firestore.collection('posts')
            .get()).docs.map(d=>d.data());
        return posts;
    }catch (e){
        console.log(e)
    }
}

const getPost=async (id) =>{
     try {
         const documentReference = await  firestore.collection('posts').doc(id)
         const response = await documentReference.get();
         return response.data();
     }catch (e) {
         console.log(e)
     }
}

 const getAllDocuments= async ()=>{
        try {
            const documents = (await firestore.collection('documents')
                .get()).docs.map(d=>d.data());
            return documents;
        }catch (e){
            console.log(e)
        }
 }

module.exports = {uploadDocument, getAllDocuments, uploadPosts, getAllPosts, getPost}
