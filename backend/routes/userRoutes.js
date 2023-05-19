const express = require('express');
const { 
    createUser, 
    GetAllUser, 
    GetAUser,
    updateUser,
    deleteUser
} = require('../controller/userController');

const router = express.Router();

router.route('/create').post(createUser);
router.route('/users').get(GetAllUser);
router.route('/user/:id').get(GetAUser);
router.route('/update/:id').put(updateUser);
router.route('/delete/:id').delete(deleteUser);

module.exports = router;