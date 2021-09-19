import { useContext, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StateContext from './global/StateProvider'
import Loader from './components/Loader/Loader'
import useRefreshAccessToken from './hooks/useRefreshAccessToken'
import './Application.scss'

const Home = lazy(() => import('./pages/Home/Home'))
const Testimonials = lazy(() => import('./pages/Testimonials/Testimonials'))
const Careers = lazy(() => import('./pages/Careers/Careers'))
const Enterprise = lazy(() => import('./pages/Enterprise/Enterprise'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Register = lazy(() => import('./pages/Register/Register'))
const Login = lazy(() => import('./pages/Login/Login'))
const Error = lazy(() => import('./pages/Error/ErrorPage'))
const User = lazy(() => import('./pages/User/User'))
const Todos = lazy(() => import('./pages/Todos/Todos'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword/ForgotPassword'))
const ResetPassword = lazy(() => import('./pages/ResetPassword/ResetPassword'))
const Todo = lazy(() => import('./pages/Todo/TodoPage'))

const Application = () => {
  useRefreshAccessToken()

  const { userInfo } = useContext(StateContext)

  console.log(
    `%cTodoify`,
    'color:red;padding:10px 50px;font-size:25px;border-radius:40px;background-color:white;font-family:Poppins;font-weight:500;'
  )

  return (
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route path='/' exact>
            <Suspense fallback={<Loader isPageLoader />}>
              <Home />
            </Suspense>
          </Route>

          <Route path='/customerstories'>
            <Suspense fallback={<Loader isPageLoader />}>
              <Testimonials />
            </Suspense>
          </Route>

          <Route path='/careers'>
            <Suspense fallback={<Loader isPageLoader />}>
              <Careers />
            </Suspense>
          </Route>

          <Route path='/enterprise'>
            <Suspense fallback={<Loader isPageLoader />}>
              <Enterprise />
            </Suspense>
          </Route>

          <Route path='/contact'>
            <Suspense fallback={<Loader isPageLoader />}>
              <Contact />
            </Suspense>
          </Route>

          <Route path='/register'>
            <Suspense fallback={<Loader isPageLoader />}>
              <Register />
            </Suspense>
          </Route>

          <Route path='/login'>
            <Suspense fallback={<Loader isPageLoader />}>
              <Login />
            </Suspense>
          </Route>

          <Route path='/forgotpassword'>
            <Suspense fallback={<Loader isPageLoader />}>
              <ForgotPassword />
            </Suspense>
          </Route>

          <Route path='/resetpassword/:resetToken'>
            <Suspense fallback={<Loader isPageLoader />}>
              <ResetPassword />
            </Suspense>
          </Route>

          {userInfo.user?.firstName ? (
            <Route path='/home' exact>
              <Suspense fallback={<Loader isPageLoader />}>
                <Todos />
              </Suspense>
            </Route>
          ) : null}

          {userInfo.user?.firstName ? (
            <Route path='/home/:todoId'>
              <Suspense fallback={<Loader isPageLoader />}>
                <Todo />
              </Suspense>
            </Route>
          ) : null}

          {userInfo.user?.firstName ? (
            <Route path='/user'>
              <Suspense fallback={<Loader isPageLoader />}>
                <User />
              </Suspense>
            </Route>
          ) : null}

          <Route>
            <Suspense fallback={<Loader isPageLoader />}>
              <Error />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Application
