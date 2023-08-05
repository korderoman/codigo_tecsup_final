const express = require("express");
const router = require("./routes/router");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(router);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("online")
})
