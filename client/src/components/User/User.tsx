import React, { useContext, useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core'
import Navigation from '../Navigation/Navigation'
import StateContext from '../../global/StateProvider'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom'
import useUpdatePassword from '../../hooks/useUpdatePassword'
import Logout from '../../hooks/useLogout'
import useDeleteUser from '../../hooks/useDeleteUser'
import Loader from '../Loader/Loader'
import Message from '../Message/Message'
import useUpdateAvatar from '../../hooks/useUpdateAvatar'
import useUser from '../../hooks/useUser'
import './User.scss'

const User = () => {
  const history = useHistory()

  const { userInfo, userToken } = useContext(StateContext)

  const { isError: userIsError, isLoading: userIsLoading } = useUser()

  const updatePasswordMutation = useUpdatePassword()
  const { isError, error, isLoading, isSuccess } = updatePasswordMutation

  const updateAvatarMutation = useUpdateAvatar()
  const { isError: avatarIsError, error: avatarError, isLoading: avatarIsLoading, isSuccess: avatarIsSuccess } = updateAvatarMutation

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [settingPassword, setSettingPassword] = useState(false)
  const [newAvatar, setNewAvatar] = useState<any>('')

  const deleteUserMutation = useDeleteUser()
  const { isError: deleteIsError, isLoading: deleteIsLoading, error: deleteError } = deleteUserMutation

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (currentPassword.trim().length > 0 && newPassword.trim().length > 0 && currentPassword !== newPassword) {
      updatePasswordMutation.mutate({ currentPassword, newPassword })
    }

    setNewPassword('')
    setCurrentPassword('')
    history.push('/')
  }

  const clearImage = () => {
    setNewAvatar('')
  }

  const onChangeAvatar = () => {
    if (newAvatar) {
      const avatar = new FormData()
      avatar.append('avatar', newAvatar)
      updateAvatarMutation.mutate(avatar)
      clearImage()
    }
  }

  const handleImageChange = (e: any) => {
    if (e.target.files[0]) {
      setNewAvatar(e.target.files[0])
    }
  }

  const onLogout = () => {
    // logoutUser()
    history.push('/')
  }

  const deleteUser = () => {
    deleteUserMutation.mutate(userToken.token)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='user'>
      <Helmet>
        <title>Todoify - User</title>
      </Helmet>
      <Navigation />
      <div className='user__container'>
        <div className='user__image__container'>
          {userIsLoading && <Loader />}
          {userIsError && <Message>Please Authenticate</Message>}
          {userInfo.user.avatar != null && <Avatar src={userInfo.user?.avatar} className='user__avatar' />}

          {newAvatar ? (
            <div className='user__change__avatar'>
              <p>{newAvatar?.name}</p>
              <div className='user__change__avatar__buttons'>
                <button className='user__change__avatar__button user__change__avatar__submitbutton' onClick={onChangeAvatar}>
                  Submit
                </button>
                <button onClick={clearImage} className='user__change__avatar__button user__change__avatar__cancelbutton'>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <input
                className='user__image__fileInput'
                type='file'
                id='avatar'
                name='avatar'
                onChange={handleImageChange}
                accept='image/*'
              />
              <label className='user__image__fileInput__label' htmlFor='avatar'>
                Change Avatar
              </label>
            </>
          )}
          {avatarIsError && <Message>{avatarError?.response?.data.messag || avatarError?.response?.data.error}</Message>}
          {avatarIsSuccess && <Message color='#2ecc71'>Avatar Changed</Message>}
          {avatarIsLoading && <Loader />}
        </div>
        <h1>
          {userInfo.user?.firstName} {userInfo.user?.lastName}
        </h1>
        <h1>{userInfo.user?.email}</h1>

        <button className='user__button user__update__button' onClick={() => setSettingPassword((state) => !state)}>
          {settingPassword ? 'Cancel' : 'Change Password'}
        </button>

        {isLoading && <Loader />}
        <div className='messages'>
          {isError && <Message>{error?.response?.data.message}</Message>}
          {isSuccess && <Message color='#2ecc71'>Password Changed</Message>}
        </div>

        {settingPassword && (
          <form className='user__update__form' onSubmit={onSubmit}>
            <input
              type='password'
              className='user__update__form__input'
              value={currentPassword}
              placeholder='Current Password'
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type='password'
              className='user__update__form__input'
              value={newPassword}
              placeholder='New Password'
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button className='user__update__form__button' type='submit'>
              {isLoading ? 'Changing Password' : isSuccess ? 'Changed Password' : isError ? 'Change Failed' : 'Change Password'}
            </button>
          </form>
        )}

        {!settingPassword && (
          <button className='user__button user__logout__button' onClick={onLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default User
