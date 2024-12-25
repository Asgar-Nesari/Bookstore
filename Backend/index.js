import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bookRoute from './route/book.route.js'
import cors from 'cors';
import userRoute from './route/user.route.js';

const app = express()

const PORT=process.env.PORT || 4000;


dotenv.config()
//middleware
app.use(cors());
app.use(express.json());


//connect to mongodb
try {
  mongoose.connect(process.env.MongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('MongoDB is connected')
  
} catch (error) {
  console.log('Error: ', error);
  
}

//defing routes
app.use('/books', bookRoute);
app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});