"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInterceptor = void 0;
const operators_1 = require("rxjs/operators");
class LogInterceptor {
    intercept(context, next) {
        const dt = Date.now();
        return next.handle().pipe((0, operators_1.tap)(() => {
            const request = context.switchToHttp().getRequest();
            console.log(`URL: ${request.url}`);
            console.log(`METHOD: ${request.method}`);
            console.log(`Execucao levou: ${Date.now() - dt}  ms`);
        }));
    }
}
exports.LogInterceptor = LogInterceptor;
//# sourceMappingURL=log.interceptor.js.map