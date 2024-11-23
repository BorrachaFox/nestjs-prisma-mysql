import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<{
        username: string;
        email: string;
        password: string;
        birthAt: Date | null;
        role: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    list(): Promise<{
        username: string;
        email: string;
        password: string;
        birthAt: Date | null;
        role: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    show(id: number): Promise<{
        username: string;
        email: string;
        password: string;
        birthAt: Date | null;
        role: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    update(id: number, { email, username, password, birthAt, role }: UpdatePutUserDTO): Promise<{
        username: string;
        email: string;
        password: string;
        birthAt: Date | null;
        role: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    updateParcial(id: number, { email, username, password, birthAt, role }: UpdatePatchUserDTO): Promise<{
        username: string;
        email: string;
        password: string;
        birthAt: Date | null;
        role: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    delete(id: number): Promise<{
        username: string;
        email: string;
        password: string;
        birthAt: Date | null;
        role: number;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    exists(id: number): Promise<void>;
}
