import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/decorators/role.decorator';
import { Role } from 'src/enums/role.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    console.log(await context.getHandler(), '\n', context.getClass());
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    console.log({ requiredRoles });

    const { user } = context.switchToHttp().getRequest();

    const rolesFilted = requiredRoles.filter((role) => role === user.role);

    return rolesFilted.length > 0;

    console.log({ requiredRoles, user });

    return true;
  }
}
