import { Response, Request } from "express";
import adminDao from "../dao/adminDao";


class AdminController {
    async createBook(req: Request, res: Response){
        const {title, category, publisher, author} = req.body;

        
        const authorId = await adminDao.verifyAuthor(author)
        console.log(authorId)
        if(!authorId){
            return res.status(400).json({
                message: "Author not found"
            })
        }

        const save = await adminDao.createBook(title, category, authorId, publisher)
        
        return res.status(201).json({Success: true, message: save})
    }
}


export default new AdminController();