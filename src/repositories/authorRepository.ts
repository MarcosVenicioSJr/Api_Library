import { AppDataSource } from "../data-source";
import { Author } from "../entities/Author";

export const authorRepository = AppDataSource.getRepository(Author)
