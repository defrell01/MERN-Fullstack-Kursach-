const Expense = require ('../models/expense-model.js');
const tokenModel = require('../models/token-model.js');
const userModel = require('../models/user-model.js');
const incomeService = require('../service/income-service.js');

class IncomeController {
    async create(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const {title, amount, category} = req.body
            const income = await incomeService.create(title, amount, category, refreshToken)
            return res.json(income)
        } catch (e) {
            next(e)
        }
    }

    async get(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const info = await incomeService.get(refreshToken)
            return res.json(info)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new IncomeController();