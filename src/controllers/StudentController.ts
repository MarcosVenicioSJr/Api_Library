import { Request, Response } from "express";

class StudentController {
    async getBooksByTittle(req: Request, res: Response){
        const {tittle} = req.body
    }
}

export default new StudentController();