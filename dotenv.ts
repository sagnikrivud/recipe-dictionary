import { config } from 'dotenv';

config();

export const API_URL  = process.env['API_URL'];
export const API_KEY  = process.env['apiKey'];
export const AUTH_DOMAIN = process.env['authDomain'];
export const PROJECT_ID = process.env['projectId'];
export const STORAGE_BUCKET = process.env['storageBucket'];
export const MESSAGE_ID = process.env['messagingSenderId'];
export const APP_ID = process.env['appId'];