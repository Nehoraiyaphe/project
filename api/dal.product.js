
import fs from 'fs/promises';



const PRODUCTS_FILE_PATH = "./data.json";

const readProductsFomFiler = async () => {
    const data = await fs.readFile(PRODUCTS_FILE_PATH, "utf8");
    return JSON.parse(data);
};

const writeProductsToFile = async (products) => {
    const updatedDataJSON = JSON.stringify(products);
    await fs.writeFile(PRODUCTS_FILE_PATH, updatedDataJSON, "utf8");
};


const getproducts = async (req, res) => {
    try {
        const data = await readProductsFomFiler()
        return data
    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};

const getproductsById = async (id) => {
    try {
        const data = await readProductsFomFiler()
        const idProdact = data.find(product => product.id == id)
        return idProdact;
    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};


const createUser = async (product) => {
    try {
        const data = await readProductsFomFiler()
        data.push(product)
        // console.log('hello')

        return data

    } catch (err) {
        res.status(404).send(err)
    }
};


const deleteProduct = async (id) => {
    try {
        //import the data
        const data = await readProductsFomFiler()
        const index = data.findIndex(product => product.id == id);
        const item = data.splice(index, 1)
        //update data
        writeProductsToFile(data)
        return item
    } catch (error) {
        throw new Error(err)
    }

};
const putProduct = async (product, id) => {
    try {
        const data = await readProductsFomFiler()
        const index = data.findIndex(product => product.id == id)
        data[index] = product;
        writeProductsToFile(data)
        return product;
    } catch (error) {
        throw new Error(err)
    }

};





const productDal = {
    getproducts,
    getproductsById,
    createUser,
    deleteProduct,
    putProduct
};

export default productDal;




