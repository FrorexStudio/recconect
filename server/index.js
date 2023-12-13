import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import cors from 'cors'

//Routes
import authRoutes from './routes/auth.js'

dotenv.config();

const PORT = process.env.PORT;
const db = `${process.env.DB}`;

mongoose
    .connect(db)
    .then(() => console.log("DB is started!"))
    .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRoutes);

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Server started on port localhost:${PORT}...`);
});



