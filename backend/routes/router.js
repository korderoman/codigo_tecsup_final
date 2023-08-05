const express = require("express");
const multer = require("multer");
const {uploadDocument, getAllDocuments, getAllPosts, getPost} = require("../controllers/firebase.controller");
const {uploadImage, getImages} = require("../controllers/cloudinary-admin.controller");
const upload = multer({
    storage: multer.memoryStorage(),
});

// eslint-disable-next-line new-cap
const router = express.Router();
router.get("/subscribe", (req, res)=>{
    return res.status(200).json("suscrito");
});

router.get('/images', async (req,res)=> {
    const response = await getImages();
    return res.status(200).json({images: response});
})

router.post("/contact", (req, res)=>{
    console.log("contacto", req.body);
    return res.status(200).json("contact success");
});

router.get("/posts",async (req,res)=>{
 const posts= await getAllPosts();
 return res.status(200).json({posts:posts})
})
router.post('/getpost',async (req,res)=>{
    console.log("id",req.body.id)
    const post = await getPost(req.body.id)

    return res.status(200).json({post: post});
})

router.post("/post",upload.single('imagen'), async (req, res)=>{
        await uploadImage(req);
        return res.status(200).json("post upload successful")
})

router.post("/upload", upload.single("documento"),async (req, res)=>{
    await uploadDocument(req)
    return res.status(200).json("upload document");
});

router.get("/documents", async (req, res)=>{
    const documents= await getAllDocuments();
    return res.status(200).json({documents: documents});
});

router.get("/document", (req, res)=>{
    return res.status(200).json("get document");
});


module.exports = router;
