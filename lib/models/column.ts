import mongoose, { Schema, Document } from 'mongoose';

export interface IColumn extends Document {
  // see it as a column of a table
  name: string;
  boardId: mongoose.Types.ObjectId; //reference to collection Board
  order: number; // order of a column
  jobApplications: mongoose.Types.ObjectId[]; // list of references of other collections, in this case, Job application
  createdAt: Date;
  updatedAt: Date;
}

// Board -> Columns -> JobApplications

const ColumnSchema = new Schema<IColumn>(
  {
    name: {
      type: String,
      required: true,
    },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: 'Board',
      required: true,
      index: true,
    },
    order: {
      type: Number,
      required: true,
      default: 0,
    },
    jobApplications: [
      {
        type: Schema.Types.ObjectId,
        ref: 'JobApplication',
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Column ||
  mongoose.model<IColumn>('Column', ColumnSchema);
