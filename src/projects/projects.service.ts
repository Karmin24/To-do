import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateTodoDto } from 'src/dtos/todo/update-todo.dto';
import { CreateProjectDto } from 'src/dtos/project/create-projects.dto';
import { Project, Todo } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async createProject(createProjectDto: CreateProjectDto) {
    const candidate = await this.projectRepository.findOne({
      where: {
        title: createProjectDto.title,
      },
    });
    if (candidate) {
      throw new BadRequestException('Project with that title already exists');
    }
    const newProject = this.projectRepository.create(createProjectDto);
    return this.projectRepository.save(newProject);
  }

  countOfProjects() {
    return this.projectRepository.count();
  }

  getAllProject() {
    return this.projectRepository.find({ relations: ['todos'] });
  }
  async getProjectById(id: number) {
    const candidate = await this.projectRepository.findOne({
      where: {
        id,
      },
      relations: ['todos'],
    });

    if (!candidate) {
      throw new NotFoundException();
    }
    return candidate;
  }

  async updateTodo(
    projectId: number,
    todoId: number,
    updateTodoDto: UpdateTodoDto,
  ) {
    const candidate = await this.getProjectById(projectId);

    const todoCandidate = candidate.todos.find((todo) => todo.id === +todoId);
    console.log(todoCandidate);
    if (!todoCandidate) {
      throw new NotFoundException({ message: 'todo not found' });
    }
    this.todoRepository.update(todoCandidate.id, updateTodoDto);
    return candidate;
  }
}
