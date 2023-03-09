import { Router } from "express";
import StudentController from "./controllers/StudentController";
import BookController from "./controllers/BookController";
import AdminController from "./controllers/AdminController";

const routes = Router();

routes.get('/book', BookController.getBooksByTittle)
routes.get('/student', StudentController.getStudentById)
routes.get('/getAllStudent', StudentController.getAllBooks)
routes.get('/getAllStudent', StudentController.getAllStudents)

routes.post('/book', AdminController.createBook)
routes.post('/admin', AdminController.createAdmin)

routes.delete('/book', AdminController.deleteBook)


export default routes;