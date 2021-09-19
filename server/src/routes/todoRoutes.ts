import express, { Router } from 'express'
import {
  createTodo,
  deleteTodo,
  getPaginatedTodos,
  getTodo,
  getUnpaginatedTodos,
  updateTodo,
  pinTodo,
} from '../controllers/todoControllers'
import authenticate from '../middleware/authenticate'

const router: Router = express.Router()

// @desc Create a new Todo
// @url POST /todo
// @access Requires Authentication
router.post('/', authenticate, createTodo)

// @desc Get a users todos with pagination
// @url GET /todo
// @access Requires Authentication
router.get('/', authenticate, getPaginatedTodos)

// @desc Get a users todos without pagination
// @url GET /todo/gettodos
// @access Requires Authentication
router.get('/gettodos', authenticate, getUnpaginatedTodos)

// @desc Get a specific Todo
// @url GET /todo/:id
// @access Requires Authentication
router.get('/:id', authenticate, getTodo)

// @desc Update a Todo
// @url PUT /todo/:id
// @access Requires Authentication
router.put('/:id', authenticate, updateTodo)

// @desc Delete a Todo
// @url DELETE /user
// @access Requires Authentication
router.delete('/:id', authenticate, deleteTodo)

// @desc Pin or Unpin a Todo
// @url PUT /todo/pin/:id
// @access Requires Authentication
router.put('/pin/:id', authenticate, pinTodo)

export default router
