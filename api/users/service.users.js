import usersDal from './dal.users.js';


const getUsersById = async (id) => {
    try {
        const user = await usersDal.getUsersById(id);
        return user;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};



const userService = {
    getUsersById
   

};

export default userService;