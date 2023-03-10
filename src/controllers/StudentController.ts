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
    const students = await studentDao.getAllStudents();

    res.status(200).json(students);
  }

  async getAllBooks(req: Request, res: Response){
    const books = await studentDao.getAllBooks();
     res.status(200).json(books);
  }

  async rentedBooks(req: Request, res: Response){
    const {name, email, bookName} = req.body;

    
  }
}

export default new StudentController();
