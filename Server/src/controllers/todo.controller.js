import TodoService from "../services/todo.service";

class TodoController {
  // Insert
  async create(req, res, next) {
    try {
      const todo = {
        id: req.body.id,
        item: req.body.item,
        isCompleted: req.body.isCompleted,
      };
      const obj = await TodoService.addTodo(todo);
      return res
        .status(200)
        .json({ success: true, msg: "Todo is Created successfully." });
    } catch (err) {
      res.status(422).json(err.msg);
    }
  }

  // Get by id
  async getById(req, res) {
    try {
      const obj = await TodoService.getById(req.params.id);
      if (obj) {
        return res.status(200).json(obj);
      } else {
        return res.status(400).json({ error: "Todo not found" });
      }
    } catch (err) {
      return res.status(400).json({ error: "Todo not found" });
    }
  }

  // Update by id
  async put(req, res) {
    const data = {
      id: req.body.id,
      item: req.body.item,
      isCompleted: req.body.isCompleted,
    };
    const id = req.params.id;

    try {
      const custumer = await TodoService.update(id, data);
      return res
        .status(200)
        .json({ success: true, msg: " Todo is Updated successfully." });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, msg: "Todo does not exist!" });
    }
  }
  // Delete by id
  async delete(req, res) {
    try {
      await TodoService.delete({ _id: req.params.id });
      return res.json({
        success: true,
        msg: "Todo is Deleted successfully.",
      });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, msg: "Todo does not exist!" });
    }
  }
}

export default new TodoController();
