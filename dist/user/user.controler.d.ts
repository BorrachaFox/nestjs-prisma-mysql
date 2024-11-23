import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(data: CreateUserDto): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        birthAt: Date | null;
        role: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    list(): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        birthAt: Date | null;
        role: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    readOne(id: number): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        birthAt: Date | null;
        role: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(data: UpdatePutUserDTO, id: any): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        birthAt: Date | null;
        role: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updatePartial(data: UpdatePatchUserDTO, id: any): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        birthAt: Date | null;
        role: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
        username: string;
        email: string;
        password: string;
        birthAt: Date | null;
        role: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
