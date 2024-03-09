import { hashPassword } from "../helper/auth.helper.js";
import { userModel } from "../models/user_mode.js";

const register = async (req) => {
    try{
    const{username, email, password, secretCode} = req.body;

    if(!username){
            throw object.assign(new Error(), {
            name: 'BAD_REQUEST',

            message:'username is required',
        })

    }
    if(!email){
        throw object.assign(new Error(), {
            name: 'BAD_REQUEST',
            message:'email is required',
        })
    }
    if(!password){
        throw object.assign(new Error(), {
            name: 'BAD_REQUEST',
            message:'password is required',
        })
    }
    if(!secretCode){
        throw object.assign(new Error(), {
            name: 'BAD_REQUEST',
            message:'secretCode is required',
        })
    }

    const  existingUser = await userModel.findOne({email});
     if(existingUser){
        throw Object.assign(new Error(),{
            name: "CONFLICT",
            message: "user already registered",
        })
     }

     const hash_Password = await hashPassword(password);
     
     const user = await userModel.create({username, email, password: hash_Password, secretCode})
     return user;
    }
    catch(error)
    {
        throw(error)
    }

}

export const authService = {
    register
};

