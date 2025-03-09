import { PulsarModule } from '@job-engine/pulsar';
import { Module } from '@nestjs/common';
import { FibinacciConsumer } from './fibonacci.consumer';

@Module({
  imports: [PulsarModule],
  providers: [FibinacciConsumer],
})
export class JobsModule {}
