import productDal from './dal.product.js';

const getproducts = async () => {
    try {
        const users = await productDal.getproducts();
        return users;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const getproductsById = async (id) => {
    try {
        const user = await productDal.getUserById(id);
        return user;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

// const createUser = async (product) => {
//     try{
//         const projec = await userDal.createUser(product);
//         return projec;

//     } catch (err){

//     }
    
// };

const createUser = async (product) => {
    // const { error } = newProductSchema.validate(product);
    // if (error) {
    //   throw new Error(`Validation error: ${error.details[0].message}`);
    // }
    const products = await productDal.createUser(product);
    return products
  };






const userService = {
    getproducts,
    getproductsById,
    createUser 

};

export default userService;