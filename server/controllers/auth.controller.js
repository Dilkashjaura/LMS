import { errorHandler } from "../lib/utils.js";
import {authService}  from "../services/auth.service.js";

const register = async (req, res) =>{
    try {
            
        const response = await authService.register(req);
        return res.status(201).send ({

            success: true,
            message: 'User registered succesfully',
            user: response

        });
    } catch (error) {
        errorHandler(res, error);
    }
}

const authController = {
    register
}

export default authController;