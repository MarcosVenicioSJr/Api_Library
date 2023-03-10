import { Response, Request } from "express";
import AdminDao from "../dao/adminDao";
import BookDao from "../dao/bookDao";

class AdminController {
  async createBook(req: Request, res: Response) {
    const { title, category, publisher, author, token } = req.body;

    const authorId = await AdminDao.verifyAuthor(author);
    if (!authorId) {
       return res.status(400).json({
        message: "Author not found",
      });
    }

    const bookExists = await BookDao.verifyBook(title);
    if (bookExists) {
      return res.status(400).json({
        message: "Book already exists",
      });
    }

    const tokenExists = await AdminDao.verifyToken(token);
    if (!tokenExists) {
      return res.status(400).json({
        message: "Token invalid. Please try again!",
      });
    }

    const save = AdminDao.createBook(title, category, authorId, publisher);
    console.log(save);
    return res
      .status(201)
      .json({ Success: true, message: "Book saved successfully!" });
  }

  async deleteBook(req: Request, res: Response){
    const { title, token } = req.body;

    const tokenExists = await AdminDao.verifyToken(token);
    if (!tokenExists) {
      return res.status(400).json({
        message: "Token invalid. Please try again!",
      });
    }

    const bookExists = await BookDao.verifyBook(title);
    if (!bookExists) {
      return res.status(400).json({
        message: "Book not found",
      });
    }

    const bookDelete = await AdminDao.deleteBook(title);

    return res
      .status(200)
      .json({ Success: true, message: "Book deleted successfully!" });
  }

  async createAdmin(req: Request, res: Response): Promise<Response> {
    const { name, newToken, token } = req.body;


    const tokenExists = await AdminDao.verifyToken(token);
    if (tokenExists) {
      return res.status(400).json({
        message: "Token already. Please try again!",
      });
    }

    const newAdmin = await AdminDao.createAdmin(name, newToken);

    return res
      .status(201)
      .json({ Success: true, message: "Admin created successfully!" });
  }

  async deleteAdmin(req: Request, res: Response): Promise<Response> {
    const { id, token } = req.body;
    const tokenExists = await AdminDao.verifyToken(token);
    if (!tokenExists) {
      return res.status(400).json({
        message: "Token invalid. Please try again!",
      });
    }

    const verifyAdminId = await AdminDao.verifyAdminId(id)
    if(!verifyAdminId) {
        return res.status(400).json({
          message: "Admin not found",
        });
    }

    const adminDelete = await AdminDao.deleteAdmin(id)
    return res.status(204).json({success: true, message: "Admin deleted successfully"})

  }
}

export default new AdminController();
