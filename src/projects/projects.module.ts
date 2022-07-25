import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project, Todo } from 'src/typeorm';
import { ProjectController } from './projects.controller';
import { ProjectService } from './projects.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [TypeOrmModule.forFeature([Project, Todo])],
})
export class ProjectsModule {}
