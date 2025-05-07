import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js'; 

//App config
const app = express();
const port = process.env.PORT || 4000;
connectDB(); //mongodb connection established here with project
connectCloudinary(); //cloudinary connection established here with project


//Middleware
app.use(express.json()); //any request that will come,will get parsed into json
app.use(cors()); //allow cross-origin requests or we can accss the backend from any IP

//api  endpoints
app.use('/api/user', userRouter); //user routes

app.get('/', (req, res) => {
    res.send('API is working well')
})

//start the server
app.listen(port,()=>console.log(`Server is running on port ${port}`))