// * Sobre el cloudName: https://cloudinary-build-url.netlify.app/options/
import {Cloudinary} from '@cloudinary/url-gen';
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import axios from "axios";
const expressUrl=import.meta.env.VITE_EXPRESS_LOCAL_URL


//creando instancia de cloudinary
const cld= new Cloudinary({
    cloud:{
        cloudName: 'digrubrgw'
    },

})

const listImages = [
    '10_nahlgc','4_nr4tay','6_otkcmo','11_u2bzzk',
    '8_zll42g','9_pspsht','5_zi4uxg','2_nkmf6k',
    '3_mt90ji','7_h2pdqy','1_mcqzrf'
];

const getImagesFromCloudinary= (quantity=4)=>{
    const imagesToSend = new Array(quantity).fill(null);
    imagesToSend.forEach((e,i)=>{
        imagesToSend[i]=cld.image(`games/${listImages[i]}.jpg`).resize(thumbnail().width(250).height(250))
    })

    return imagesToSend;
}
const getImages=async() =>{
    try{
        const response = await axios.get(`${expressUrl}/images`);
        return response.data.images;
    }catch (e){
        console.log(e)
    }
}

export {getImagesFromCloudinary, getImages}
