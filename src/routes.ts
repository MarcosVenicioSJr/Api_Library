import { Router } from "express";
import StudentController from "./controllers/StudentController";
import BookController from "./controllers/BookController";

const routes = Router();

routes.get('/student', BookController.getBooksByTittle)

export default routes;