import { Router } from "express";
import StudentController from "./controllers/StudentController";

const routes = Router();

routes.get('/student', StudentController.test)

export default routes;