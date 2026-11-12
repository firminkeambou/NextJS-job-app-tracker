import mongoose, { Schema, Document } from 'mongoose';
//defining the interface of stuff that cannot be completed automatically
export interface IBoard extends Document {
  name: string;
  userId: string;
  columns: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const BoardSchema = new Schema<IBoard>(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      index: true,
    },
    columns: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Column', // this is like foreign key in relational database
      },
    ],
  },
  // the below tells mongoose to automatically add "createdAt" and "updatedAt" fields
  {
    timestamps: true,
  },
);
export default mongoose.models.Board ||
  mongoose.model<IBoard>('Board', BoardSchema);
/*
• mongoose.models.Board: Checks if a model named Board has already been compiled and registered in Mongoose's internal cache.
• || (Logical OR): Returns the existing cached model if it exists, skipping the second half of the expression.
• mongoose.model<IBoard>('Board', BoardSchema): Creates and registers a new Board model using BoardSchema and the IBoard TypeScript interface if one does not exist yet.
*/

// upon compilation by default, mongoose.models calls "create collection"
