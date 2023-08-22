import usersService from './service.users.js';


const getUsersById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usersService.getUsersById(id);
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).json({ "message": "user not found" })
        }
    } catch (error) {
        console.error(error)
    }

};



const userControler = {
    getUsersById
    
};


export default userControler;