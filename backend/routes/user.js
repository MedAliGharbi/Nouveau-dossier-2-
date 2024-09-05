const express = require('express');
const router = express.Router();
const { getAll,getOneUser,updateUser, deleteUser, loginUser, postUser } = require('../controller/user');

router.get('/', getAll);

router.post('/post', postUser); // Route for signing up
router.post('/login', loginUser); // Route for logging in
router.get("/:id", getOneUser);
router.put("/:id",  updateUser);
router.delete("/:id", deleteUser);

module.exports = router;

