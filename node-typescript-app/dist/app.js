"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use("/todos", todos_1.default);
app.use((err, req, res, next) => {
    return res.status(500).json({ message: err.message });
});
console.log("hello world");
app.listen(3000);
