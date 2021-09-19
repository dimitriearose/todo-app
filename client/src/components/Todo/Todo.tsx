import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import DoneIcon from '@material-ui/icons/Done'
import { BiRightArrowCircle } from 'react-icons/bi'
import formatDate from '../../utility/formatDate'
import useUpdateTodo from '../../hooks/useUpdateTodo'
import { useHistory } from 'react-router-dom'
import './Todo.scss'

interface Props {
  text: string
  category: string
  completed: boolean
  createdAt: any
  id: any
}

const Todo = ({ completed, createdAt, text, category, id }: Props) => {
  const date = formatDate(createdAt)

  const updateTodoMutation = useUpdateTodo()

  const history = useHistory()

  const onNavigate = () => {
    history.push(`/home/${id}`)
  }

  return (
    <div className={`todo ${completed && 'todo__completed'}`}>
      <div className='todo__container' onClick={onNavigate}>
        <span className='todo__time'>{date.time}</span>
        <h6 className='todo__category'>
          {category}{' '}
          {completed ? (
            <DoneIcon className='todo__category__icon' style={{ color: '#27ae60' }} />
          ) : (
            <CloseIcon className='todo__category__icon' style={{ transform: 'translateY(1.5px)', color: '#e74c3c' }} />
          )}
        </h6>
        <p className='todo__text'>{text}</p>
        <span className='todo__date'>{`${date.month} ${date.day}, ${date.year}`}</span>

        <BiRightArrowCircle className='todo__arrow' />
      </div>
      <div className='todo__footer'>
        {!completed ? (
          <button
            className='todo__footer__complete'
            onClick={() => updateTodoMutation.mutate({ id, text, category, completed: true })}>
            <DoneIcon className='todo__footer__complete__icon' /> Complete
          </button>
        ) : (
          <button
            className='todo__footer__uncomplete'
            onClick={() => updateTodoMutation.mutate({ id, text, category, completed: false })}>
            <CloseIcon className='todo__footer__complete__icon' /> Uncomplete
          </button>
        )}
      </div>
    </div>
  )
}

export default Todo
