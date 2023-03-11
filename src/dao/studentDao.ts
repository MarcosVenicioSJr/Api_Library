import { bookRepository } from "../repositories/bookRepository";
import { studentRepository } from "../repositories/studentRepository";

class StudentDao {
  async getStudentById(id: number) {
    const student = await studentRepository.findOneBy({ id: id });
    return student;
  }

  async getAllStudents() {
    const students = await studentRepository.find()
    return students;
  }

  async getAllBooks() {
    const books = await bookRepository.find()
    return books;
  }

  async verifyStudent(email: string){
    const student = await studentRepository.findOneBy({ email: email });
    return student;
  }

  async alterBookRented(email: string, bookName: string){
    const student = await studentRepository.update({email: email}, {rentedBooks: bookName});
    studentRepository.save
  }

  async returnBook(email: string, bookName: string){
    const student = await studentRepository.update({email: email}, {rentedBooks: "null"})
  }



}

export default new StudentDao();
