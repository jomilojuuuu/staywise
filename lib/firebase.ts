import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBI1GUuApQinIVidVaxqYXMbE_S5D_f0To',
  authDomain: 'staywise-3bf14.firebaseapp.com',
  projectId: 'staywise-3bf14',
  storageBucket: 'staywise-3bf14.firebasestorage.app',
  messagingSenderId: '307432676082',
  appId: '1:307432676082:web:aded4b7c56187c6026ce6b',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);

