import bcrypt from 'bcryptjs'

export const hashPassword = async (password) =>{
        try {

            const hashPassword = await bcrypt.hash(password, 10);
            return hashPassword;
            
        } catch (error) {
            console.log(error);
        }
}

export const comparePassword = async(password,hashPassword) =>{
    return bcrypt.compare(password, hashPassword);
}