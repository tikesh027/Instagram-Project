const express = require('express');
const { body } = require('express-validator');

const { registerUser, logIn, searchAllUsers, getUserById, updateUser, followUser, unfollowUser, suggestions, suggestionsUser, savepost, unsavepost, getallsavedpost } = require('../Controllers/userController');
const { authMiddleware } = require('../Middleware/authMiddleware');
const { userValidator, logInValidator } = require('../Middleware/Validators/validator');
const { notification } = require('../Controllers/notificationController');
const { post, getPosts, updatePerticularPost, getPerticularPosts, deletePost, like, unlike, userPosts } = require('../Controllers/postController');
const { createComments, updateComment, likeacomment, unlikeacomment, deleteacomment } = require('../Controllers/commentController');
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
router.post('/posts', authMiddleware, post);
router.get('/posts', authMiddleware, getPosts);
router.patch('/post/:id', authMiddleware, updatePerticularPost);
router.get('/post/:id', authMiddleware, getPerticularPosts);
router.delete('/post/:id', authMiddleware, deletePost);
router.get('/post/:id/like', authMiddleware, like);
router.patch('/post/:id/unlike', authMiddleware, unlike);
router.get('/user_posts/:id', authMiddleware, userPosts);
router.patch('/savepost/:id', authMiddleware, savepost);
router.patch('/unsavepost/:id', authMiddleware, unsavepost);
router.get('/getsavedpost', authMiddleware, getallsavedpost);
router.post('/comment', authMiddleware, createComments);
router.post('/comment/:id', authMiddleware, updateComment);
router.post('/comment/:id/like', authMiddleware, likeacomment);
router.post('/comment/:id/unlike', authMiddleware, unlikeacomment);
router.delete('/comment/:id', authMiddleware, deleteacomment);

module.exports = router;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYyNWNmYmUwYjllYzg2MjIxMjUxYzIiLCJlbWFpbCI6InRpa2VzaDIzQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiYmhhdmVzaDA1MDUiLCJ0aW1lc3RhbXAiOiIyMDIzLTA1LTE1VDE3OjU3OjUwLjI3NFoiLCJpYXQiOjE2ODQxNzM0NzAsImV4cCI6MTY4NDE3NzA3MH0.IRBd70zguGQtL4pGwawGcq68kSd9578NtEgdG4x-Gqk