import { Module } from '@nestjs/common';
import { SubscriptionsModule } from './domain/subscriptions/subscriptions.module';

@Module({
  imports: [SubscriptionsModule],
})
export class AppModule {}
