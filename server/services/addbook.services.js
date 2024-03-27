import { addbookModel } from "../models/addbook_model.js";



const addbook = async (req) => {
    try {
        const newBook = new addbookModel({
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            description: req.body.description,
            coverimage: req.file.path,
        });

        const savedBook = await newBook.save();
        return savedBook;
        
    } catch (error) {
        console.log(error);
        throw error; 
    }
};

export const addbookService = {
    addbook
};
