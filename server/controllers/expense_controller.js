const Expense = require('../models/expense-model.js');
const tokenModel = require('../models/token-model.js');
const userModel = require('../models/user-model.js');
const expenseService = require('../service/expense-service.js');

class ExpenseController {
    async create(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const { title, amount, category } = req.body
            const expense = await expenseService.create(title, amount, category, refreshToken)
            return res.json(expense)
        } catch (e) {
            next(e)
        }
    }

    async get(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const info = await expenseService.get(refreshToken)
            return res.json(info)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ExpenseController();