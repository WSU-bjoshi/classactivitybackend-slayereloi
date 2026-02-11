import {getTodosService, createTodoService, toggleTodoByIdService, deleteTodoByIdService} from "../services/todo.service.js";

export function listTodos(req, res){
    const todos = getTodosService();
    res.json({count: todos.length, todos});
}


export function createTodos(req, res){
    try{
        const {task} = req.body;
        const todo = createTodoService(task);
        res.status(201).json({message:"Created", todo});
    } catch(err){
        res.status(400).json({error:err.message});
    } 
}

export function toggleTodo(req, res){
    const id = Number(req.params.id);
    const todo = toggleTodoByIdService(id);

    if(!todo){
        return res.status(400).json({error : "Todo not found"});
    }
    res.json({message:"Toggled", todo});

}


export function removeTodo(req, res){
    const id = Number(req.params.id);
    const todo = deleteTodoByIdService(id);

    if(!todo){
        return res.status(400).json({error: "Todo not found"})
    }

    res.json({message:"Deleted Successfully"})
}
//experiment

import { getTodoById } from "../services/service.js";

export const getElementById = (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const todo = getTodoById(id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.status(200).json({
    id: todo.id,
    task: todo.task,
    status: todo.done
  });
};
