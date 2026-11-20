/*In Better Auth, databaseHooks let you run custom logic before or after 
 core database operations across models like user, session, account, and
 verification*/
import { betterAuth } from 'better-auth'; // better auth is not like authentication as a service
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { MongoClient } from 'mongodb';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { initializeUserBoard } from '../server-helpers/init-user-board';
//This page has nothing to do with connectDB() defined in ./mongo-db.ts

//new
// Reuse the existing MongoClient across Next.js hot reloads

const client = new MongoClient(process.env.MONGODB_URI! as string);

// Provide an explicit database name if it is not embedded in the URI string
// const db = client.db('your_database_name'); this is what should be followed   +++++++++++++++++++++++++++
//const db = client.db(); // Use the default database from the connection string
// the following establish the connection to mongo DB as well, no need to use the default configuration set in "mongo-db.ts" file
const db = client.db('job-tracker'); //'job-tracker' is the name of the database

// the "auth" below is only going to be used for the server side, not the client
//you do not actually need to create the collection by yourself, better-auth handle it
export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client: client,
  }),
  //authentication method
  emailAndPassword: {
    enabled: true,
  },
  // this hook is like a trigger after operation on user collection (so we have access on user), do ...
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          if (user.id) await initializeUserBoard(user.id);
        },
      },
    },
  },
});

//identifying session
export async function getSession() {
  try {
    const result = await auth.api.getSession({
      headers: await headers(),
    });
    return result;
  } catch (error) {
    console.error('FULL AUTH ERROR:', error);
    return null;
  }
}

//console.log('sessionnnnnn', session);

//identifying session
export async function signOut() {
  try {
    const result = await auth.api.signOut({
      headers: await headers(),
    });
    console.log('result of signing out');
    if (result.success) {
      redirect('/sign-in'); // in a client side, we would haveused  router=useRouter() hook, then router.push()
    }
  } catch (error) {
    console.error('signing out failed:', error);
    return null;
  }
}
