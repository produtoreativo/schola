import { Injectable } from '@nestjs/common';

@Injectable()
export class SubscriptionsService {
  getSubscriptions() {
    return 'This action returns all subscriptions';
  }
}
