"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comentariosController = void 0;
const database_1 = __importDefault(require("../database"));
const database_2 = __importDefault(require("../database"));
class ComentariosController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            database_1.default.query('SELECT * FROM comentarios', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        const { id } = req.params;
        database_2.default.query('SELECT * FROM comentarios WHERE id = ?', [id], function (err, result, fields) {
            if (err)
                throw err;
            res.json(result);
        });
    }
    crate(req, res) {
        const result = database_2.default.query('INSERT INTO comentarios set ?', [req.body]);
        console.log(result);
        res.json({ message: 'Comentario saved' });
    }
    delete(req, res) {
        const { id } = req.params;
        database_2.default.query('DELETE FROM comentarios WHERE id=?', [id]);
        res.json({ message: 'The comentarios was deleted' });
    }
    update(req, res) {
        const { id } = req.params;
        database_2.default.query('UPDATE  comentarios SET ? WHERE id = ?', [req.body, id]);
        res.json({ message: 'Comentario ' });
    }
}
exports.comentariosController = new ComentariosController();
