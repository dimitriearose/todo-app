import { Response, NextFunction } from 'express'
import Todo from '../models/Todo'
import RequestWithUser from '../types/RequestWithUser'

// @desc Create a new Todo
// @url POST /todo
// @access Requires Authentication
export const createTodo = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  const { text, category } = req.body

  try {
    const todo = new Todo({ text, category, owner: req.user._id })

    if (!todo) {
      res.status(400).send('Invalid Data')
      return
    }

    await todo.save()

    res.status(201).send(todo)
  } catch (error) {
    next(error)
  }
}

// @desc Get a users todos with pagination
// @url GET /todo
// @access Requires Authentication
export const getPaginatedTodos = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  const itemsPerPage = 10
  const page: any = req.query.page || 1

  try {
    const totalCount = await Todo.find({ owner: req.user._id }).countDocuments()
    const count = await Todo.find({ owner: req.user._id })
      .skip((page - 1) * itemsPerPage)
      .limit(itemsPerPage)
      .countDocuments()

    const todos = await Todo.find({ owner: req.user._id })
      .limit(itemsPerPage)
      .skip((page - 1) * itemsPerPage)
      .sort({ createdAt: 1 })

    if (!todos) {
      res.status(400).send('Invalid Data')
      return
    }

    const pages = Math.ceil(totalCount / itemsPerPage)

    res.send({
      todos,
      totalCount,
      count,
      pages,
      hasNextPage: page < pages,
      hasPreviousPage: page > 1,
      page: Number(page),
      previousPage: Number(page) !== 1 ? Number(page) - 1 : null,
      nextPage: Number(page) < pages ? Number(page) + 1 : null,
    })
  } catch (error) {
    next(error)
  }
}

// @desc Get a users todos without pagination
// @url GET /todo/gettodos
// @access Requires Authentication
export const getUnpaginatedTodos = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  try {
    const totalCount = await Todo.find({ owner: req.user._id }).countDocuments()
    const todos = await Todo.find({ owner: req.user._id })

    if (!todos) {
      res.status(400).send('Invalid Data')
      return
    }

    res.send({
      todos,
      totalCount,
    })
  } catch (error) {
    next(error)
  }
}

// @desc Get a specific Todo
// @url GET /todo/:id
// @access Requires Authentication
export const getTodo = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  const id = req.params.id
  try {
    const todo = await Todo.findOne({ _id: id, owner: req.user._id })

    if (!todo) {
      res.status(404).send('Resource not Found')
      return
    }

    res.send({
      id: todo._id,
      text: todo.text,
      category: todo.category,
      completed: todo.completed,
      createdAt: todo.createdAt,
    })
  } catch (error) {
    next(error)
  }
}

// @desc Update a Todo
// @url PUT /todo/:id
// @access Requires Authentication
export const updateTodo = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  const id = req.params.id
  const { completed, text, category } = req.body

  try {
    const todo = await Todo.findOne({ _id: id })

    if (!todo) {
      res.status(404).send('Resource not Found')
      return
    }

    todo.completed = completed
    todo.text = text
    todo.category = category

    const updatedTodo = await todo.save()

    res.send({ category: updatedTodo.category, completed: updatedTodo.completed, text: updatedTodo.text })
  } catch (error) {
    next(error)
  }
}

// @desc Delete a Todo
// @url DELETE /todo
// @access Requires Authentication
export const deleteTodo = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  const id = req.params.id

  try {
    const todo = await Todo.findByIdAndDelete(id)

    if (!todo) {
      res.status(404).send('Resource not Found')
      return
    }

    res.send({ success: true, todo })
  } catch (error) {
    next(error)
  }
}

// @desc Pin or Unpin a Todo
// @url PUT /todo/pin/:id?pin=true
// @access Requires Authentication
export const pinTodo = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  const id = req.params.id
  const pin = !!req.query.pin

  try {
    const todo = await Todo.findById(id)

    if (!todo) {
      res.status(404).send('Resource not Found')
      return
    }

    if (pin) {
      todo.pinned = true
    } else {
      todo.pinned = false
    }

    res.send({ success: true, todo })
  } catch (error) {
    next(error)
  }
}
