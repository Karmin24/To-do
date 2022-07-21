import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projects } from 'src/typeorm';
import { ProjectsController } from './controllers/projects/projects.controller';
import { ProjectsService } from './services/projects/projects.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService],
  imports: [TypeOrmModule.forFeature([Projects])],
})
export class ProjectsModule {}
