import React, { useState, useRef, useContext, Fragment } from 'react'
import AuthNavbar from '../AuthNavbar/AuthNavbar'
import Todo from '../Todo/Todo'
import { Helmet } from 'react-helmet'
import Message from '../Message/Message'
import AddIcon from '@material-ui/icons/Add'
import ErrorNotification from '../ErrorNotification/ErrorNotification'
import { Error } from '@material-ui/icons'
import StateContext from '../../global/StateProvider'
import Loader from '../Loader/Loader'
import useTodos from '../../hooks/useTodos'
import useCreateTodo from '../../hooks/useCreateTodo'
import './Todos.scss'

const Todos = () => {
  const { userInfo } = useContext(StateContext)

  const { data, isError, isLoading, hasNextPage, fetchNextPage } = useTodos()

  const createTodoMutation = useCreateTodo()

  const inputRef = useRef<any>()
  const errorIconRef = useRef<any>()
  const ErrorNotificationRef = useRef<any>()

  const [todo, setTodo] = useState('')
  const [category, setCategory] = useState('Leisure')

  const submitTodo = (e: any) => {
    e.preventDefault()

    if (todo.trim().length > 0) {
      createTodoMutation.mutate({ text: todo, category })
      setTodo('')
    }
  }

  const onInputFocus = () => {
    errorIconRef.current.style.opacity = 0
    inputRef.current.style.border = '2px solid rgba(28, 30, 33, 0.4)'

    if (todo.trim().length < 1) {
      ErrorNotificationRef.current.style.display = 'block'
    } else {
      ErrorNotificationRef.current.style.display = 'none'
    }
  }

  const onInputBlur = () => {
    ErrorNotificationRef.current.style.display = 'none'

    if (todo.trim().length < 1) {
      errorIconRef.current.style.opacity = 1
      inputRef.current.style.border = ' 2px solid #c0392b'
    } else {
      errorIconRef.current.style.opacity = 0
      inputRef.current.style.border = '2px solid rgba(28, 30, 33, 0.4)'
    }
  }

  const onClick = () => {
    fetchNextPage()
  }

  return (
    <div className='todos'>
      <Helmet>
        <title>Todoify - Todos</title>
      </Helmet>
      <AuthNavbar />
      <div className='todos__container'>
        <h2>Welcome back, {userInfo.user.firstName}</h2>
        <form className='todos__form' onSubmit={submitTodo}>
          <div className='todos__form__field'>
            <ErrorNotification reference={ErrorNotificationRef} text='Enter the Todo you want to add.' todo bg='#2980b9' />

            <input
              className='todos__form__field__text'
              type='text'
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder={window.screen.availWidth > 600 ? 'What do you have to do today?' : 'Enter Todo'}
              ref={inputRef}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
            />
            <Error className='todos__form__field__errorIcon' ref={errorIconRef} />
          </div>

          <div className='todos__form__field'>
            <select
              name='category'
              id='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='todos__form__field__select'>
              <option value='Leisure'>🧭 Leisure</option>
              <option value='Work'>💼 Work</option>
              <option value='Education'>🎓 Education</option>
            </select>
          </div>
          {todo.trim().length > 0 && (
            <button className='todos__form__button'>
              <AddIcon className='todos__form__button__icon' />
              Create Todo
            </button>
          )}

          {isError && <Message>An Error Occured</Message>}
        </form>

        {isLoading && <Loader />}

        {data?.pages.map((group: any, index: number) => (
          <Fragment key={index}>
            {group.todos.map((todo: any) => (
              <Todo
                category={todo.category}
                completed={todo.completed}
                createdAt={new Date(todo.createdAt)}
                text={todo.text}
                key={todo._id}
                id={todo._id}
              />
            ))}
          </Fragment>
        ))}

        {hasNextPage && (
          <button className='todos__loadmore' onClick={onClick}>
            Load More
          </button>
        )}
      </div>
    </div>
  )
}

export default Todos
