import { Injectable } from '@nestjs/common';
import { InjectRepository } from 'nestjs-fireorm';
import { Subscriptions } from './subscriptions.model';
import { BaseFirestoreRepository } from 'fireorm';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscriptions)
    private subscriptions: BaseFirestoreRepository<Subscriptions>,
  ) {}

  async getSubscriptions() {
    return this.subscriptions.find();
  }

  async createSubscription(subscription: Subscriptions) {
    return this.subscriptions.create(subscription);
  }
}
