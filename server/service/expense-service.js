const ApiError = require("../exceptions/api-errors");
const expenseModel = require("../models/expense-model");
const tokenModel = require("../models/token-model");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto.js");
const UserModel = require("../models/user-model.js")

class ExpenseService {
    async create(title, amount, category, refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)

        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        const user = await UserModel.findById(userData.id)

        // if (!user.isActivated) {
        //     throw ApiError.UnauthorizedError()
        // }
        const userDto = new UserDto(user)

        const expense = await expenseModel.create({title, amount, category, user: userDto.id})


        return {...expense, user: userDto}
    }
    
}

module.exports = new ExpenseService();