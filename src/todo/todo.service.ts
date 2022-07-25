import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/typeorm';
import { Todo } from 'src/typeorm/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from '../dtos/todo/create-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async createTodo({ projectId, ...todo }: CreateTodoDto) {
    const projectCandidate = await this.projectRepository.findOne({
      where: {
        id: projectId,
      },
      relations: ['todos'],
    });
    if (!projectCandidate) {
      throw new NotFoundException();
    }

    const newTodo = this.todoRepository.create(todo);
    projectCandidate.todos.push(newTodo);
    await this.projectRepository.save(projectCandidate);
    return projectCandidate;
  }

  getAllTodo() {
    return this.todoRepository.find();
  }

  // async updateTodo(id: any) {
  //   const todo = await this.todoRepository.findOne(id);
  //   if (!todo) {
  //     throw new NotFoundException('Todo not Found');
  //   }
  //   return this.todoRepository.save({ ...todo, isCompleted: true });
  // }
}
