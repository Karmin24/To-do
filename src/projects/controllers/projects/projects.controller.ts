import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProjectDto } from 'src/projects/dto/projects.dto';
import { ProjectsService } from 'src/projects/services/projects/projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('count')
  getCountOfProjects() {
    return this.projectsService.countOfProjects();
  }

  @Get('/')
  getAllProject() {
    return this.projectsService.getAllProject();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUsers(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.createProject(createProjectDto);
  }
}
