import { Request, Response } from "express";
import StudentDao from "../dao/studentDao";
import BookDao from "../dao/bookDao";

class StudentController {
  async getStudentById(req: Request, res: Response) {
    const { id } = req.body;

    const parseId = Number.parseInt(id);

    const student = await StudentDao.getStudentById(parseId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    return res.status(200).json(student);
  }

  async getAllStudents(req: Request, res: Response) {
    const students = await StudentDao.getAllStudents();

    res.status(200).json(students);
  }

  async getAllBooks(req: Request, res: Response) {
    const books = await StudentDao.getAllBooks();
    res.status(200).json(books);
  }

  async rentedBooks(req: Request, res: Response) {
    const { name, email, bookName } = req.body;

    const validateStudent = await StudentDao.verifyStudent(email);
    if (!validateStudent) {
      return res
        .status(404)
        .json({ success: false, message: "Student Not Found!" });
    }

    const book = await BookDao.verifyBook(bookName)
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book Not Found!" });
    }

    try {
    const rentedStudent = await StudentDao.alterBookRented(email, bookName)
    const rentedBook = await BookDao.rentedBook(bookName)
    return res.status(200).json({ success: true, message: 'Book rented!'})
    } catch (error) {
      return res.status(500).json({ success: false, message: error }) 
    }


    
  }

  async returnBook(req: Request, res: Response) {
    const { name, email, bookName } = req.body;

    const validateStudent = await StudentDao.verifyStudent(email)
    if (!validateStudent) {
      return res
      .status(404)
      .json({ success: false, message: "Student Not Found!" });
    }

    const book = await BookDao.verifyBook(bookName)
    if (!book) {
      return res
       .status(404)
       .json({ success: false, message: "This book is not from here" });
    }

    try {
      
      const returnBook = await StudentDao.returnBook(email, bookName)
    } catch (error) {
      res.status(500).json({success: false, message: "Error:" + error})
    }
  }
}

export default new StudentController();
