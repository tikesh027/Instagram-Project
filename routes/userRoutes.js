const express = require('express');
const { body } = require('express-validator');

const { registerUser, logIn, searchAllUsers, getUserById, updateUser, followUser, unfollowUser, suggestions, suggestionsUser } = require('../Controllers/userController');
const { authMiddleware } = require('../Middleware/authMiddleware');
const { userValidator, logInValidator } = require('../Middleware/Validators/validator');
const { notification } = require('../Controllers/notificationController');
const router = express.Router();

router.post('/register', userValidator ,registerUser);
router.post('/login', logInValidator, logIn);
router.get('/search', authMiddleware, searchAllUsers);
router.get('/user/:id', authMiddleware, getUserById);
router.patch('/user', authMiddleware, updateUser);
router.patch('/user/:id/follow', authMiddleware, followUser);
router.patch('/user/:id/unfollow', authMiddleware, unfollowUser);
router.get('/suggestionsUser', authMiddleware, suggestionsUser);
router.get('/notification', authMiddleware, notification);

module.exports = router;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYyNWNmYmUwYjllYzg2MjIxMjUxYzIiLCJlbWFpbCI6InRpa2VzaDIzQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiYmhhdmVzaDA1MDUiLCJ0aW1lc3RhbXAiOiIyMDIzLTA1LTE1VDE3OjU3OjUwLjI3NFoiLCJpYXQiOjE2ODQxNzM0NzAsImV4cCI6MTY4NDE3NzA3MH0.IRBd70zguGQtL4pGwawGcq68kSd9578NtEgdG4x-Gqk