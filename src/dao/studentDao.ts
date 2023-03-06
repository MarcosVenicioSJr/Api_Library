import { studentRepository } from "../repositories/studentRepository";

class studentDao {
  async getStudentById(id: number) {
    const student = await studentRepository.findOneBy({ id: id });
    return student;
  }
}

export default new studentDao();
