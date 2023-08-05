import axios from "axios";
const baseURL="https://jsonplaceholder.typicode.com"
const expressUrl=import.meta.env.VITE_EXPRESS_LOCAL_URL
const maxPosts = 100;

const getPosts=async(quantity=4, postType='news')=>{
    try {
        const start= postType!=='news' ? maxPosts-quantity:0;
        const end = start+quantity;
        const url = `${baseURL}/posts?_start=${start}&_end=${end}`;
        const response = await axios.get(url);
        return response.data;


    }catch (e){
        console.log(e)
    }
}

const getPostsFromFirestore=async ()=>{
    const response = await axios.get(`${expressUrl}/posts`);
    return response.data;
}

const getPostFromFirestore=async(id)=> {
    const response = await axios.post(`${expressUrl}/getpost`,{id});
    return response.data;
}




export {getPosts, getPostsFromFirestore, getPostFromFirestore}
