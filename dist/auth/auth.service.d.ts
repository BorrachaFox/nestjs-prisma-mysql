import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { UserService } from 'src/user/user.service';
import { MailerService } from '@nestjs-modules/mailer';
export declare class AuthService {
    private readonly jwtService;
    private readonly prisma;
    private readonly userService;
    private readonly mailer;
    private issuer;
    private audience;
    constructor(jwtService: JwtService, prisma: PrismaService, userService: UserService, mailer: MailerService);
    createToken(user: User): {
        accessToken: string;
    };
    checkToken(token: string): any;
    isValidToken(token: string): boolean;
    login(email: string, password: string): Promise<{
        accessToken: string;
    }>;
    forget(email: string): Promise<boolean>;
    reset(password: string, token: string): Promise<{
        accessToken: string;
    }>;
    register(data: AuthRegisterDto): Promise<{
        accessToken: string;
    }>;
}
