import { AppDataSource } from "../data-source";
import { Book } from "../entities/Book";

const adminRepository = AppDataSource.getRepository(Book)
