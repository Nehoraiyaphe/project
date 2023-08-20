import express from 'express';
import productRouter from './api/router.products.js';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/product', productRouter)

app.use(morgan('dev'))



app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
});
