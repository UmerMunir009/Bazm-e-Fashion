import express from 'express';
import cors from 'cors';
import 'dotenv/config';

//App config
const app = express();
const port = process.env.PORT || 4000;

//Middleware
app.use(express.json()); //any request that will come,will get parsed into json
app.use(cors()); //allow cross-origin requests or we can accss the backend from any IP

//api  endpoints
app.get('/', (req, res) => {
    res.send('API is working well')
})
