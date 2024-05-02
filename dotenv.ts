import { config } from 'dotenv';

config();

export const API_URL = process.env.API_URL;
export const APIKEY = process.env.apiKey;