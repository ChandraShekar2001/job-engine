import { PulsarConsumer, PulsarClient } from '@job-engine/pulsar';
import { Message } from 'pulsar-client';
import { OnModuleInit, Injectable } from '@nestjs/common';

@Injectable()
export class FibinacciConsumer extends PulsarConsumer implements OnModuleInit {
  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient, 'Fibonacci');
  }

  protected async onMessage(message: Message): Promise<void> {
    console.log('FibonacciConsumer.onMessage');
    await this.acknowledgeMessage(message);
  }
}
