import { bookRepository } from "../repositories/bookRepository";
import { studentRepository } from "../repositories/studentRepository";

class studentDao {
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

}

export default new studentDao();
