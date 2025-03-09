import { PulsarClient } from '@job-engine/pulsar';
import { Job } from '../../decorators/job.decorator';
import { AbstractJob } from '../abstract.job';
import { FibonacciData } from './fibanocci-data.interface';

@Job({
  name: 'Fibonacci',
  description: 'Generate a fibonacci sequence and store in database',
})
export class FibonacciJob extends AbstractJob<FibonacciData> {
  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient);
  }
}
