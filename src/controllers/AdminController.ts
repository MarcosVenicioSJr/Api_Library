import { Response, Request } from "express";
import adminDao from "../dao/adminDao";


class AdminController {
    async createBook(req: Request, res: Response){
        const {title, category, publisher, author} = req.body;
   
        const authorId = await adminDao.verifyAuthor(author)
        if(!authorId){
            return res.status(400).json({
                message: "Author not found"
            })
        }

        const bookExists = await adminDao.verifyBook(title)
        if(bookExists){
            return res.status(400).json({
                message: "Book already exists"
            })
        }

        const save = adminDao.createBook(title, category, authorId, publisher)
        console.log(save)
        return res.status(201).json({Success: true, message: "Book saved successfully!"})
    }
}


export default new AdminController();