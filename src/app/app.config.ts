import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"learnfirestore-55715","appId":"1:733265813084:web:3ddbc7b44e9f04ab8f5099","storageBucket":"learnfirestore-55715.appspot.com","apiKey":"AIzaSyD6So4lkkVx90zu-YuJJ7kSs41nA6Ifj3A","authDomain":"learnfirestore-55715.firebaseapp.com","messagingSenderId":"733265813084","measurementId":"G-2SHS48JWGG"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
