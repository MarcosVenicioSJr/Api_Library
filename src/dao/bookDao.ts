import { bookRepository } from "../repositories/bookRepository";

class BookDao {
  async verifyBook(title: string) {
    const book = await bookRepository.findOneBy({
      title: title,
    });

    if (book) {
      return book.id;
    }

    return null;
  }

  async rentedBook(title: string) {
    const modifyStatus = await bookRepository.update(
      {
        title: title,
      },
      { isDisponible: 1 }
    );
  }
}

export default new BookDao();
