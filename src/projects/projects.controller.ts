import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateTodoDto } from 'src/dtos/todo/update-todo.dto';
import { CreateProjectDto } from 'src/dtos/project/create-projects.dto';
import { ProjectService } from 'src/projects/projects.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectsService: ProjectService) {}

  @Get('count')
  getCountOfProjects() {
    return this.projectsService.countOfProjects();
  }

  @Get('/')
  getAllProject() {
    return this.projectsService.getAllProject();
  }

  @Get('/:id')
  getProjectById(@Param('id') id: number) {
    return this.projectsService.getProjectById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUsers(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.createProject(createProjectDto);
  }

  @Patch('/:id/todo/:todoId')
  updateTodo(
    @Param('id') id: number,
    @Param('todoId') todoId: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.projectsService.updateTodo(id, todoId, updateTodoDto);
  }
}
