import { Request, Response } from "express";
import studentDao from "../dao/studentDao";

class StudentController {
  async getStudentById(req: Request, res: Response) {
    const { id } = req.body;

    const parseId = Number.parseInt(id);

    const student = await studentDao.getStudentById(parseId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    return res.status(200).json(student);
  }

  async getAllStudents(req: Request, res: Response){
    
  }
}

export default new StudentController();
