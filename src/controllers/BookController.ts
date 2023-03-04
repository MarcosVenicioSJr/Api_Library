import { Request, Response } from "express";
import { bookRepository } from "../repositories/bookRepository";

class BookController {
  async getBooksByTittle(req: Request, res: Response) {
    const { tittle } = req.body;

    if (!tittle)
      return res
        .status(403)
        .json({ Success: false, Message: "Tittle is obrigatory!" });

    try {
      const book = await bookRepository.findOneBy({
        title: tittle,
      });

      if (!book) {
        return res.status(404).json({ Success: false, Message: "Book not found!" });
      }

      return res.status(200).json({Success: true, Message: book})
    } catch (error) {
        return res.status(500).json({Success: false, Message: "Internal server error"})
    }

  }
}

export default new BookController();
