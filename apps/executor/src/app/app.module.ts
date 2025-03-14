import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from '@job-engine/nestjs';

@Module({
  imports: [LoggerModule, JobsModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
