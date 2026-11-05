import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI! as string);
const db = client.db(); // Use the default database from the connection string
export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client: client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
