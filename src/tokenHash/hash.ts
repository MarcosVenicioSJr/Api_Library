import bcrypt from 'bcrypt';

class hash {
    static createHash(key: string): string {
        return bcrypt.hashSync(key, bcrypt.genSaltSync(8))
    }

    static compareHash(key: string, hash: string): boolean {
        return bcrypt.compareSync(key, hash)
    }
}