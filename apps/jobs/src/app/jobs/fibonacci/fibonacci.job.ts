import { PulsarClient } from '@job-engine/pulsar';
import { Job } from '../../decorators/job.decorator';
import { AbstractJob } from '../abstract.job';
import { FibonacciData } from './fibanocci-data.message';

@Job({
  name: 'Fibonacci',
  description: 'Generate a fibonacci sequence and store in database',
})
export class FibonacciJob extends AbstractJob<FibonacciData> {
  protected messageClass = FibonacciData;
  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient);
  }
}
