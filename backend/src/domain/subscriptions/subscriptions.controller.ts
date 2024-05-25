import { Get, Controller, Post, Body } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { Subscriptions } from './subscriptions.model';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get()
  async getSubscriptions() {
    return this.subscriptionsService.getSubscriptions();
  }

  @Post()
  async createSubscription(@Body() subscription: Subscriptions) {
    return this.subscriptionsService.createSubscription(subscription);
  }
}
