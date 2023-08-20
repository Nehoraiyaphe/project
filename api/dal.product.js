
import fs, { readFile } from 'fs';
import { promisify } from 'util';

const getproducts = async (req, res) => {
    try {
        const readFileAsinc = promisify(fs.readFile)
        const dataAsinc = await readFileAsinc('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsinc);

        return jsonData

    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};

const getUserById = async (id) => {
    try {
        const readFileAsinc = promisify(fs.readFile)
        const dataAsinc = await readFileAsinc('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsinc);
        const user = jsonData.find(user => id === String(user.id));
        return user;
    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};

const createUser = async (product) => {
    try {
        const readFileAsinc = promisify(fs.readFile)
        const dataAsinc = await readFileAsinc('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsinc);
        jsonData.push(product)

        console.log('hello')

        return jsonData
        
    } catch (err) {
        res.status(404).send(err)
    }
}




    // const createUser = async (product) => {
    //     const products = await readProductsFromFile();
    //     product.id = v4();
    //     console.log(product);
    //     products.push(product);
    //     await writeProductsToFile(products);
    //     return product;
    //   };




const productDal = {
    getproducts,
    getUserById,
    createUser
};

export default productDal;




