import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionsController } from './subscriptions.controller';
import { FireormModule } from 'nestjs-fireorm';
import { Subscriptions } from './subscriptions.model';

@Module({
  imports: [FireormModule.forFeature([Subscriptions])],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService],
})
export class SubscriptionsModule {}
