import { Router } from "express";

import {listTodos, createTodos, toggleTodo, removeTodo, getElementById} from "../controllers/todo.controllers.js";


const router = Router();

router.get("/", listTodos);
router.post("/", createTodos);
router.patch("/:id/toggle", toggleTodo);
router.delete("/delete/:id", removeTodo);
router.get("/:id", getElementById); //experiment

export default router;