const cloudinary =require("cloudinary").v2;
const dotenv= require("dotenv");
const {uploadPosts} = require("./firebase.controller");
dotenv.config(); //* solicitar llaves al admin
cloudinary.config({
    cloud_name:'digrubrgw',
    api_key:process.env.API_KEY_CLOUDINARY,
    api_secret:process.env.API_SECRET_CLOUDINARY,
    secure: true
})

// https://support.cloudinary.com/hc/en-us/community/posts/360007581379-Correct-way-of-uploading-from-buffer-
const uploadImage = async (req) =>{
    try {
        await cloudinary.uploader.upload_stream({
            folder:'games',
            resource_type:'image'
        },async (err,image)=>{
            const data = {
                title:req.body.titulo,
                body:req.body.contenido,
                image:image.url
            };
            await uploadPosts(data);
        }).end(req.file.buffer);

    }catch (e) {
        console.log(e)
    }

}

const getImages= async ()=>{
    try {
        const response= await  cloudinary.api.resources({
            type:'upload',
            prefix:'games'
        });
        //console.log(response)
        return response.resources.map(r=>{
            return r.url;
        })


    }catch (e) {
        console.log(e)
    }
}


module.exports= {uploadImage, getImages}
