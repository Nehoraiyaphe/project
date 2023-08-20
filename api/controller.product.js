import productService from './service.product.js';

const getAllproducts = async (req, res) => {
    try {
        console.log("getAllproducts")
        const users = await productService.getproducts();
        if (users.length > 0)
            return res.status(200).send(users)
        else {
            return res.status(404).json({ "message": "No Users" })
        }
    } catch (error) {
        console.error(error)
    }
};

const getproductsById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await productService.getproductsById(id);
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).json({ "message": "user not found" })
        }
    } catch (error) {
        console.error(error)
    }
    // res.json({ message: "User created successfully." });
};

const createUser = async (req, res) => {
    try {
        const proda = req.body;
        const project = await productService.createUser(proda)
        res.status(200).json(project)
    } catch (err) {
        console.error('Data is :', err);
        res.status(404).json(err);

    }

};



const userControler = {
    getAllproducts,
    getproductsById,
    createUser
};


export default userControler;




