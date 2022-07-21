import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTodoDto } from './todo.dto';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('count')
  getCountOfTodos() {
    return this.todoService.countOfTodo();
  }
  @Get('/')
  getAllTodos() {
    return this.todoService.getAllTodo();
  }
  @Post('create')
  @UsePipes(ValidationPipe)
  createUsers(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo(createTodoDto);
  }
}
