import express from 'express';
import productRouter from './api/products/router.products.js';
// import usersRouter from './api/users/router.users.js';
import morgan from 'morgan';
import axios  from 'axios';

const app = express();
const port = 3000;

app.use(express.json());

app.use(morgan('dev'))

app.use('/api/product', productRouter)

// app.use('/api/users', usersRouter)



app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
});
