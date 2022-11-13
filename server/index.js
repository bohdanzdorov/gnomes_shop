require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");

const commentRouter = require("./Routers/commentRouter");
const authRouter = require("./Routers/authRouter") 
const categoryRouter = require("./Routers/categoryRouter")

const errorMiddleware = require("./Middlewares/errorMiddleware");
 
const PORT = process.env.PORT; 
 
const app = express();
app.use(express.json())

app.use("/comment", commentRouter)
app.use("/authentication", authRouter)
app.use("/categories", categoryRouter)

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
