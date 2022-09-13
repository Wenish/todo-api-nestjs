import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema({
  timestamps: {
    createdAt: true,
    updatedAt: true,
  },
  toJSON: {
    virtuals: true,
  },
})
export class Todo {
  id: string;
  
  _id: string;

  __v: string;

  createdAt: Date;

  updatedAt: Date;

  @Prop()
  title: string;

  @Prop()
  isDone: boolean
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
TodoSchema.index({ createdAt: -1 });
TodoSchema.index({ updatedAt: -1 });
