import { Router } from "express";
import StudentController from "./controllers/StudentController";
import BookController from "./controllers/BookController";
import AdminController from "./controllers/AdminController";

const routes = Router();

routes.get('/book', BookController.getBooksByTittle)
routes.post('/book', AdminController.createBook)

export default routes;