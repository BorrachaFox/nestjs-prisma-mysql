"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const salt = await bcrypt.genSalt();
        data.password = await bcrypt.hash(data.password, salt);
        return this.prisma.user.create({
            data,
        });
    }
    async list() {
        return this.prisma.user.findMany();
    }
    async show(id) {
        await this.exists(id);
        return this.prisma.user.findUnique({
            where: {
                id,
            },
        });
    }
    async update(id, { email, username, password, birthAt, role }) {
        await this.exists(id);
        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(password, salt);
        return this.prisma.user.update({
            where: {
                id,
            },
            data: {
                email,
                username,
                password,
                birthAt: birthAt ? new Date(birthAt) : null,
                role,
            },
        });
    }
    async updateParcial(id, { email, username, password, birthAt, role }) {
        await this.exists(id);
        const data = {};
        if (birthAt) {
            data.birthAt = new Date(birthAt);
        }
        if (email) {
            data.email = email;
        }
        if (username) {
            data.username = username;
        }
        if (password) {
            const salt = await bcrypt.genSalt();
            password = await bcrypt.hash(password, salt);
            data.password = password;
        }
        if (role) {
            data.password = role;
        }
        return this.prisma.user.update({
            where: {
                id,
            },
            data,
        });
    }
    async delete(id) {
        await this.exists(id);
        return this.prisma.user.delete({
            where: {
                id,
            },
        });
    }
    async exists(id) {
        if (!(await this.prisma.user.count({
            where: {
                id,
            },
        }))) {
            throw new common_1.NotFoundException(`O usuario com id ${id} não foi encontrado`);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map