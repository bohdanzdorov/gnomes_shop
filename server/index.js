require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const adminRouter = require("./Routers/adminRouter")
const commentRouter = require("./Routers/commentRouter");
const authRouter = require("./Routers/authRouter") 
const categoryRouter = require("./Routers/categoryRouter")
const productRouter = require("./Routers/productRouter")
const photoRouter = require("./Routers/photoRouter")

const errorMiddleware = require("./Middlewares/errorMiddleware");
 
const PORT = process.env.PORT; 
 
const app = express();


app.use(cors())

app.use(express.json())

app.use("/admin", adminRouter)
app.use("/comment", commentRouter)
app.use("/authentication", authRouter)
app.use("/categories", categoryRouter)
app.use("/products", productRouter)
app.use("/photo", photoRouter)

app.use(errorMiddleware)

const start = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, ()=> { 
            console.log("Server started on Port : " + PORT); 
        })

    }catch(e){
     console.log(e)
    }
}

start()
