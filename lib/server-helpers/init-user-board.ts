import 'server-only';
import connectDB from '../mongoose-db';
import { Board, Column } from '../models';
const DEFAULT_COLUMNS = [
  {
    name: 'Wish List',
    order: 0,
  },
  { name: 'Applied', order: 1 },
  { name: 'Interviewing', order: 2 },
  { name: 'Offer', order: 3 },
  { name: 'Rejected', order: 4 },
];
export async function initializeUserBoard(userId: string) {
  try {
    await connectDB();
    //check if board already exists
    const existingBoard = await Board.findOne({ userId, name: 'John Hunt' });
    if (existingBoard) {
      return existingBoard;
    }
    // create the board
    const board = await Board.create({
      name: 'John Hunt',
      userId,
      columns: [],
    });

    //create default columns
    //Promise.all() is a JavaScript method that runs multiple promises concurrently and returns a single promise that resolves when every input promise fulfills—or rejects immediately if any single one fails
    const columns = await Promise.all(
      DEFAULT_COLUMNS.map((col) =>
        Column.create({
          name: col.name,
          order: col.order,
          boardId: board._id,
          jobApplication: [],
        }),
      ),
    );

    // Update the board with the new column IDs
    board.columns = columns.map((col) => col._id);
    await board.save(); //save() is called on an instance like board.save(), not directly on the Board model class).
    return board;
  } catch (error) {
    throw error;
  }
}
