import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from '../dtos/todo/create-todo.dto';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    console.log(1, createTodoDto);
    return this.todoService.createTodo(createTodoDto);
  }

  @Get()
  getAllTodos() {
    return this.todoService.getAllTodo();
  }
}
