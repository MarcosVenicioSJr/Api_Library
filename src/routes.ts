import { Router } from "express";
import StudentController from "./controllers/StudentController";
import BookController from "./controllers/BookController";
import AdminController from "./controllers/AdminController";

const routes = Router();

routes.get('/book', BookController.getBooksByTittle)
routes.get('/student', StudentController.getStudentById)

routes.post('/book', AdminController.createBook)

routes.delete('/book', AdminController.deleteBook)


export default routes;