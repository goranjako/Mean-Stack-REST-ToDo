import Todo from "../models/todo";

class TodoService {
  //getById service
  static async getById(id) {
    try {
      const todo = await Todo.find({ id:id });
      return todo;
    } catch (error) {
      throw error;
    }
  }
  //addTodo service
  static async addTodo(data) {
    try {
      const todo = new Todo(data);
      return await todo.save();
    } catch (error) {
      throw error;
    }
  }
  //update service
  static async update(id, data) {
    try {
      const todo = await Todo.findById({ _id: id }).exec();
      todo.set(data);
      const result = await todo.save();
      return result;
    } catch (error) {
      throw error;
    }
  }
  //delete service
  static async delete(id) {
    try {
      return await Todo.deleteOne(id);
    } catch (error) {
      throw error;
    }
  }
}

export default TodoService;
