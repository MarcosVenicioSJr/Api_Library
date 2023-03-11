import { Router } from "express";
import StudentController from "./controllers/StudentController";
import BookController from "./controllers/BookController";
import AdminController from "./controllers/AdminController";

const routes = Router();

routes.get('/book', BookController.getBooksByTittle)
routes.post('/book', AdminController.createBook)
routes.delete('/book', AdminController.deleteBook)

routes.get('/student', StudentController.getStudentById)
routes.get('/getAllStudent', StudentController.getAllBooks)
routes.get('/getAllStudent', StudentController.getAllStudents)
routes.post('/student/rented', StudentController.rentedBooks)
routes.post('/student/returnBook', StudentController.returnBook)


routes.post('/admin', AdminController.createAdmin)
routes.delete('/admin', AdminController.deleteAdmin)

export default routes;