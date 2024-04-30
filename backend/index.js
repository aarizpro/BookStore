import express, { json } from "express";
import {PORT,mongoDBUrl} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();
app.use(express.json());

app.get('/',(request,response)=>{
   // console.log(request);
    return response.status(234).send("Harish is a Great Coder!!!");
});
app.use(cors());

app.use('/books',booksRoute);
mongoose.
connect(mongoDBUrl)
.then(()=>{
    console.log("Database Connected");
    app.listen(PORT,()=>{
        console.log(`App is listening to port:${PORT}`);
    });
})
.catch((error)=>{
    console.log(error);
});