const express = require('express');
const router = express.Router();

const { getUsers, getUserById, updateItem, deleteItem, newItem } = require('../controllers/user.controller');

router.route('/users').get(getUsers);
router.route('/users/:id').get(getUserById);
router.route('/users/post').post(newItem);
router.route('/users/update/:id').put(updateItem);
router.route('/users/delete/:id').delete(deleteItem);

module.exports = router;