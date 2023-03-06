import { adminRepository } from "../repositories/adminRespository";
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

  async verifyToken(token: string){
    const tokenId = await adminRepository.findOneBy({
      token: token
    })

    return tokenId
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

  async deleteBook(title: string){
    const book = await bookRepository.delete({
      title: title
    })
    
    
  }


}

export default new adminDao();
