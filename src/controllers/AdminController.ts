import { Response, Request } from "express";


class AdminController {
    async createBook(req: Request, res: Response){
        const {title, category, publisher, author} = req.params;
    }
}


export default new AdminController();