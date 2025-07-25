import { Client, Databases } from "appwrite";

export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const COLLECTION_ID_METRICS = import.meta.env
  .VITE_APPWRITE_COLLECTION_ID_METRICS;
  
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client();
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);
export const databases = new Databases(client);
