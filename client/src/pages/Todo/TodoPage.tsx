import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import useTodo from '../../hooks/useTodo'
import useDeleteTodo from '../../hooks/useDeleteTodo'
import useUpdateTodo from '../../hooks/useUpdateTodo'
import { Link, useParams } from 'react-router-dom'
import AuthNavbar from '../../components/AuthNavbar/AuthNavbar'
import Message from '../../components/Message/Message'
import Loader from '../../components/Loader/Loader'
import { BsCloudUpload, BsTrash2Fill } from 'react-icons/bs'
import CloseIcon from '@material-ui/icons/Close'
import DoneIcon from '@material-ui/icons/Done'
import formatDate from '../../utility/formatDate'
import { HiPencil } from 'react-icons/hi'
import './TodoPage.scss'
import ScrollButton from '../../components/ScrollButton/ScrollButton'

const Todo = () => {
  const [date, setDate] = useState<any>()
  const [todoText, setTodoText] = useState('')
  const [todoCategory, setTodoCategory] = useState('')
  const [todoCompleted, setTodoCompleted] = useState(false)
  const [id, setId] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const { todoId } = useParams<{ todoId: string }>()

  const deleteTodoMutation = useDeleteTodo()
  const updateTodoMutation = useUpdateTodo()
  const { isLoading, isError, error, data } = useTodo(todoId)

  const { isSuccess: isDeleteSuccess, isError: isDeleteError, isLoading: isDeleteLoading, error: deleteError } = deleteTodoMutation

  const { isSuccess: isUpdateSuccess, isError: isUpdateError, isLoading: isUpdateLoading, error: updateError } = updateTodoMutation

  const onDelete = () => {
    deleteTodoMutation.mutate(data?.id)
  }

  const onUpdate = () => {
    updateTodoMutation.mutate({ id: id, text: todoText, category: todoCategory, completed: todoCompleted })
    setIsEditing(false)
  }

  useEffect(() => {
    setTodoText(data?.text)
    setId(data?.id)
    setTodoCategory(data?.category)
    setTodoCompleted(data?.completed)
    setDate(formatDate(new Date(data?.createdAt)))
  }, [data?.text, data?.id, data?.category, data?.completed, data?.createdAt])

  return (
    <>
      <div className='todoPage'>
        <Helmet>
          <title>Todoify - Todo</title>
        </Helmet>
        <AuthNavbar />
        <div className='todoPage__container'>
          <Link to='/home' className='todoPage__back'>
            Back
          </Link>
          {isLoading && <Loader />}
          {isDeleteLoading && <Loader />}
          {isUpdateLoading && <Loader />}
          {isUpdateError && updateError && <Message>{updateError.message}</Message>}
          {isDeleteError && deleteError && <Message>{deleteError.message}</Message>}
          {isError && error && <Message>{error.message}</Message>}
          {isDeleteSuccess && <Message color='#2ecc71'>Todo Deleted</Message>}
          {isUpdateSuccess && <Message color='#2ecc71'>Todo Updated</Message>}
          {!isLoading && !isEditing && (
            <>
              <div className='todoPage__card'>
                <div className='todoPage__heading' style={{ background: `${todoCompleted ? '#2ecc71' : '#c0392b'}` }}>
                  <h1 className='todoPage__header'>
                    {data.text}{' '}
                    {data.completed ? <DoneIcon className='todoPage__header__icon' /> : <CloseIcon className='todoPage__header__icon' />}
                  </h1>
                </div>

                <button className='todoPage__edit todoPage__button' onClick={() => setIsEditing(true)}>
                  Edit Todo <HiPencil className='todoPage__edit__icon' />
                </button>

                <button className='todoPage__delete todoPage__button' onClick={onDelete}>
                  Delete Todo <BsTrash2Fill className='todoPage__edit__icon' />
                </button>
              </div>
            </>
          )}
          {!isLoading && isEditing && (
            <>
              <div className='todoPage__card'>
                <div className='todoPage__heading' style={{ background: `${data.completed ? '#2ecc71' : '#c0392b'}` }}>
                  <h1 className='todoPage__header'>
                    {data.text}{' '}
                    {data.completed ? <DoneIcon className='todoPage__header__icon' /> : <CloseIcon className='todoPage__header__icon' />}
                  </h1>
                </div>
                <div className='todoPage__fields'>
                  <div className='todoPage__field'>
                    <input
                      type='text'
                      value={todoText}
                      onChange={(e) => setTodoText(e.target.value)}
                      placeholder={todoText}
                      className='todos__form__field__text'
                    />
                  </div>

                  <div className='todoPage__field'>
                    <select
                      name='category'
                      id='category'
                      value={todoCategory}
                      onChange={(e) => setTodoCategory(e.target.value)}
                      className='todos__form__field__select'>
                      <option value='Leisure'>🧭 Leisure</option>
                      <option value='Work'>💼 Work</option>
                      <option value='Education'>🎓 Education</option>
                    </select>
                  </div>

                  <div className='todoPage__field'>
                    <h3 className='todoPage__todo__complete' style={{ color: `${!todoCompleted ? '#c0392b' : '#2ecc71'}` }}>
                      {todoCompleted ? 'Todo Completed' : 'Todo Incomplete'}
                    </h3>
                  </div>
                </div>

                <button className='todoPage__complete todoPage__button' onClick={() => setTodoCompleted((state) => !state)}>
                  {todoCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
                </button>

                <button className='todoPage__submit todoPage__button' onClick={onUpdate}>
                  Submit Changes <BsCloudUpload className='todoPage__edit__icon' />
                </button>

                <button className='todoPage__edit todoPage__button' onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <ScrollButton />
    </>
  )
}

export default Todo
