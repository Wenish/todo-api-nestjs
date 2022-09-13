import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from 'src/database/schemas/todo.schema';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return await this.todosService.create(createTodoDto) as Todo;
  }

  @Get()
  async findAll() {
    return await this.todosService.findAll() as Todo[];
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.todosService.findOne(id) as Todo;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return await this.todosService.update(id, updateTodoDto) as Todo;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.todosService.remove(id) as Todo;
  }
}
