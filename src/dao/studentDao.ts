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

}

export default new studentDao();
