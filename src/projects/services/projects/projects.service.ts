import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDto } from 'src/projects/dto/projects.dto';
import { Projects } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Projects)
    private readonly projectRepository: Repository<Projects>,
  ) {}

  createProject(createProjectDto: CreateProjectDto) {
    const newProject = this.projectRepository.create(createProjectDto);
    return this.projectRepository.save(newProject);
  }

  countOfProjects() {
    return this.projectRepository.count();
  }

  getAllProject() {
    return this.projectRepository.find();
  }
}
