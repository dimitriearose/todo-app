import mongoose, { Document } from 'mongoose'

export interface TodoFields extends Document {
  text: string
  completed: boolean
  category: string
  pinned: boolean
  owner: mongoose.Schema.Types.ObjectId
  createdAt: Date
}

const Schema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    completed: {
      type: Boolean,
      required: true,
      default: false,
    },

    pinned: {
      type: Boolean,
      required: true,
      default: false,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true }
)

const Todo = mongoose.model<TodoFields>('Todo', Schema)

export default Todo
