const createLandingData=(quantity=4,images, posts)=>{
    let data=[];
    for(let i=0 ; i<quantity;i++){
        const post = {
            id: posts[i].id,
            body: posts[i].body,
            title: posts[i].title,
            image: posts[i].image? posts[i].image : images[i]
        }
        data.push(post)
    }

    return data;
}

export {createLandingData}
