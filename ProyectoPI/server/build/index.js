"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const publicacionesRoutes_1 = __importDefault(require("./routes/publicacionesRoutes"));
const comentariosRoutes_1 = __importDefault(require("./routes/comentariosRoutes"));
const cursosRoutes_1 = __importDefault(require("./routes/cursosRoutes"));
const cursosaprobadosRoutes_1 = __importDefault(require("./routes/cursosaprobadosRoutes"));
const registerRoutes_1 = __importDefault(require("./routes/registerRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/publicaciones', publicacionesRoutes_1.default);
        this.app.use('/api/comentarios', comentariosRoutes_1.default);
        this.app.use('/api/register', registerRoutes_1.default);
        this.app.use('/api/cursos', cursosRoutes_1.default);
        this.app.use('/api/cursosaprobados', cursosaprobadosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
