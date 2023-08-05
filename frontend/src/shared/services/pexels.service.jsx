import {createClient} from "pexels";
const API_KEY_PEXEL=import.meta.env.VITE_API_KEY_PEXEL;
const client = createClient(API_KEY_PEXEL);
const query='Nature';



const getRandomImage=async (quantity=4, postType="news")=>{
    try {
       const photos = await  client.photos.search({query,per_page:quantity})
        if(photos){
            return photos
        }else{
            return [];
        }
    }catch (e){
        console.log(e)
    }
}

export {getRandomImage}
