import { Response, Request } from "express";
import adminDao from "../dao/adminDao";


class AdminController {
    async createBook(req: Request, res: Response){
        const {title, category, publisher, author, token} = req.body;
   
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

        const tokenExists = await adminDao.verifyToken(token)
        if(!tokenExists){
            return res.status(400).json({
                message: "Token invalid. Please try again!"
            })
        }

        const save = adminDao.createBook(title, category, authorId, publisher)
        console.log(save)
        return res.status(201).json({Success: true, message: "Book saved successfully!"})
    }

    async deleteBook(req: Request, res: Response){
        const {title, token} = req.body;

        const tokenExists = await adminDao.verifyToken(token)
        if(!tokenExists){
            return res.status(400).json({
                message: "Token invalid. Please try again!"
            })
        }

        const bookExists = await adminDao.verifyBook(title)
        if(!bookExists){
            return res.status(400).json({
                message: "Book not found"
            })
        }

        const bookDelete = await adminDao.deleteBook(title)
        
        return res.status(200).json({Success: true, message: "Book deleted successfully!"})
    }

    async createAdmin(req: Request, res: Response): Promise<Response>{
        const {name, newToken, token} = req.body
        
    }
}


export default new AdminController();