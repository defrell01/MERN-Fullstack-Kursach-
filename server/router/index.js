const Router = require('express').Router;
const userController = require('../controllers/user_controller.js')
const router = new Router();
const { body } = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware.js')
const expenseController = require ('../controllers/expense_controller.js');
const incomeController = require('../controllers/income_controller.js');

// USER ROUTES //

router.post('/registration', 
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

// USER ROUTES //

// TRACKING ROUTES //

router.post('/expense', authMiddleware, expenseController.create);
router.post('/income', authMiddleware, incomeController.create);

// TRACKING ROUTES //

module.exports = router