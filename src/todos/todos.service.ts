import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { Todo, TodoDocument } from 'src/database/schemas/todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name)
    private readonly todoModel: Model<TodoDocument>,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    return await new this.todoModel(createTodoDto).save()
  }

  async findAll(query: FilterQuery<TodoDocument> = {}) {
    return await this.todoModel.find(query).exec();
  }

  async findOne(id: string) {
    return await this.todoModel.findById(id).exec();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    return await this.todoModel.findByIdAndUpdate(
      id,
      updateTodoDto,
      { new: true }
    )
  }

  async remove(id: string) {
    return await this.todoModel.findByIdAndRemove(id)
  }
}
