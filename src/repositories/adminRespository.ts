import { AppDataSource } from "../data-source";
import { Admin } from "../entities/Admin";

const adminRepository = AppDataSource.getRepository(Admin)
