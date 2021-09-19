import express, { Router } from 'express'
import authenticate from '../middleware/authenticate'
import {
  createUser,
  deleteUser,
  forgotPassword,
  getUser,
  loginUser,
  logout,
  refreshAccessToken,
  resetPassword,
  updateAvatar,
  updatePassword,
  updateUser,
} from '../controllers/userControllers'
import multer from 'multer'

const router: Router = express.Router()

// @desc Create a new User
// @url POST /user
// @access Public
router.post('/', createUser)

// @desc Login a User
// @url GET /user/login
// @access Public
router.post('/login', loginUser)

// @desc Get a User
// @url GET /user
// @access Private
router.get('/', authenticate, getUser)

// @desc Update a User
// @url PUT /user
// @access Private
router.put('/', authenticate, updateUser)

// @desc Refresh Access Token which expires every 15 mins
// @url POST /user/refreshaccesstoken
// @access Public
router.post('/refreshaccesstoken', refreshAccessToken)

// @desc Logout (Clear Reset Token Cookie)
// @url POST /user/logout
// @access Private
router.post('/logout', logout)

// @desc Delete a User
// @url DELETE /user
// @access Private
router.delete('/', authenticate, deleteUser)

// @desc Update a user's password (While they are signed in)
// @url PATCH /user/password
// @access Private
router.patch('/password', authenticate, updatePassword)

// @desc Send an email to a user in the hopes of them resetting password (While they are not signed in)
// @url POST /user/forgotpassword
// @access Public
router.post('/forgotpassword', forgotPassword)

// @desc Update a user's password (While they are not signed in)
// @url PATCH /user/resetpassword/:resetToken
// @access Public
router.patch('/resetpassword/:resetToken', resetPassword)

// @desc Update a user's Avatar
// @url POST /user/avatar
// @access Private

const filter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  fileFilter: filter,
  limits: {
    fileSize: 1024 * 1024,
  },
})

router.post('/avatar', authenticate, upload.single('avatar'), updateAvatar)

export default router
