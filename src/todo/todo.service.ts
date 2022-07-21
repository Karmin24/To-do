import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/typeorm/projects.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  createTodo(createTodoDto: CreateTodoDto) {
    const NewTodo = this.todoRepository.create(createTodoDto);
    return this.todoRepository.save(NewTodo);
  }

  countOfTodo() {
    return this.todoRepository.count();
  }

  getAllTodo() {
    return this.todoRepository.find();
  }
}
