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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_put_user_dto_1 = require("./dto/update-put-user.dto");
const update_patch_user_dto_1 = require("./dto/update-patch-user.dto");
const user_service_1 = require("./user.service");
const log_interceptor_1 = require("../interceptors/log.interceptor");
const param_id_decorator_1 = require("../decorators/param-id.decorator");
const role_decorator_1 = require("../decorators/role.decorator");
const role_enum_1 = require("../enums/role.enum");
const role_guard_1 = require("../guards/role.guard");
const auth_guard_1 = require("../guards/auth.guard");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(data) {
        return this.userService.create(data);
    }
    async list() {
        return this.userService.list();
    }
    async readOne(id) {
        return this.userService.show(id);
    }
    async update(data, id) {
        return this.userService.update(id, data);
    }
    async updatePartial(data, id) {
        return this.userService.updateParcial(id, data);
    }
    async delete(id) {
        return this.userService.delete(id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, param_id_decorator_1.ParamId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "readOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, param_id_decorator_1.ParamId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_put_user_dto_1.UpdatePutUserDTO, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, param_id_decorator_1.ParamId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_patch_user_dto_1.UpdatePatchUserDTO, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updatePartial", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, param_id_decorator_1.ParamId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
exports.UserController = UserController = __decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RoleGuard),
    (0, common_1.UseInterceptors)(log_interceptor_1.LogInterceptor),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controler.js.map