import { authorRepository } from "../repositories/authorRepository";
import { bookRepository } from "../repositories/bookRepository";

class adminDao {
  async verifyAuthor(name: string) {
    const author = await authorRepository.findOneBy({
      name: name,
    });

    if(author){
        return author.id
    }

    return null
  }

  async createBook(title: string, category: string, author: any, publisher: string) {
    const book = await bookRepository.create({
        title: title,
        category: category,
        publisher: publisher,
        author: author
    })

    bookRepository.save(book)
  }

  
}

export default new adminDao();
