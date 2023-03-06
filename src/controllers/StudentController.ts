import { Request, Response } from "express";

class StudentController {
    async getStudentById(req: Request, res: Response){
        const { id } = req.params;

    }

}

export default new StudentController();
