// import { Module } from '@nestjs/common';
// import { SubscriptionsModule } from './domain/subscriptions/subscriptions.module';
// import { FireormModule } from 'nestjs-fireorm';
// import * as admin from 'firebase-admin';

// // const serviceAccount = require('../schola-422014-firebase-adminsdk-1zv3o-3b3b3b3b3b.json');

// // admin.initializeApp({
// //   credential: admin.credential.cert(serviceAccount),
// //   databaseURL: `https://schola-422014.firebaseio.com`,
// // });
// // const firestore = admin.firestore();

// @Module({
//   imports: [
//     FireormModule.forRoot({
//       // firestore,
//       fireormSettings: {
//         // projectId: 'escolare-9c6d9',
//         keyFilename: '../schola-422014-firebase-adminsdk-1zv3o-3b3b3b3b3b.json',
//         // firestoreSettings: {
//         //   projectId: 'schola-422014',
//         //   // credential: credential.applicationDefault(),
//         // },
//         validateModels: true,
//       },
//     }),
//     SubscriptionsModule,
//   ],
// })
// export class AppModule {}


import { Module } from '@nestjs/common';
import {} from 'fireorm';
import { SubscriptionsModule } from './domain/subscriptions/subscriptions.module';
import { FireormModule } from 'nestjs-fireorm';
import { Subscriptions } from './domain/subscriptions/subscriptions.model';

@Module({
  imports: [
    FireormModule.forRoot({
      firestoreSettings: {
        databaseId: 'schola',
        projectId: 'schola-422014',
        keyFilename: 'keys.json',
        validateModels: true,
      },
    }),
    SubscriptionsModule,
  ],
})
export class AppModule {}
