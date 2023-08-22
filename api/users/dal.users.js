import fs from 'fs/promises';
// ממיר את זה פה בגייסון באמצע בדיקה)
// const PRODUCTS_FILE_PATH = "./data.json";

const getUsersById = async (id) => {
    try {
        const data = await readUsersFomFiler()
        const idUsers = data.find(user => user.id == id)
        return id.User;
    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};

const usersDal = {
    getUsersById
    
};

export default usersDal;