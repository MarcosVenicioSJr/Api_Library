import { adminRepository } from "../repositories/adminRespository";
import { authorRepository } from "../repositories/authorRepository";
import { bookRepository } from "../repositories/bookRepository";

class AdminDao {
  async verifyAuthor(name: string) {
    const author = await authorRepository.findOneBy({
      name: name,
    });

    if(author){
        return author.id
    }

    return null
  }

  async verifyAdminId(id: number){
    const admin = await adminRepository.findOneBy({
      id: id,
    });

    return admin
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

  async createAdmin(name: string, token: string){
    const newAdmin = await adminRepository.create({
      name: name,
      token: token
    })
    
    adminRepository.save(newAdmin)
  }

  async deleteAdmin(id: number){
    const deleteAdmin = await adminRepository.delete({
      id: id
    })
  }

}

export default new AdminDao();
