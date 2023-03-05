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

  async verifyBook(title: string){
    const book = await bookRepository.findOneBy({
      title: title
    })

    if(book){
        return book.id
    }

    return null
  }

  async verifyToken(title: string){
    const token = await bookRepository.findOneBy({
      title: title
    })

    if(token){
        return token.id
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
