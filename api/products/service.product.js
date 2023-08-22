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
        const user = await productDal.getproductsById(id);
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

  const putProduct = async(product, id) =>{
      try{
        const putProduct = await productDal.putProduct(product, id);
        return putProduct;
      }catch (err){
        // console.error("Data is :"err);
        // throw (err);
      }
  };

  const deleteProduct = async(id) =>{
    try{
        const prod = await productDal.deleteProduct(id);
        return prod;
    }catch (err){
        console.error(err);

    }
  };
  const changeOne = async (id,quantity) =>{
    try{
        
        const product = await productDal.changeOne(id, quantity)
            return product;
    }catch (error){
        console.error(error)
    }
 };


const userService = {
    getproducts,
    getproductsById,
    createUser,
    putProduct,
    deleteProduct,
    changeOne 

};

export default userService;