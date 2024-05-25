import { Collection } from 'fireorm';

@Collection('subscriptions')
export class Subscriptions {
  id: string;
  title: string;
  description: string;
  course_id: string;
  profile_id: string;
  done: boolean;
}