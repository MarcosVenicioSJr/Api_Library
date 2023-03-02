import { Request, Response } from "express";

class StudentController {
    async test(req: Request, res: Response){
        res.json({
            message: "Hello World"
        })
    }
}

export default new StudentController();