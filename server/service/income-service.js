const ApiError = require("../exceptions/api-errors");
const IncomeModel = require("../models/income-model");
const tokenModel = require("../models/token-model");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto.js");
const UserModel = require("../models/user-model.js")

class IncomeService {
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

        const userDto = new UserDto(user)

        const income = await IncomeModel.create({title, amount, category, user: userDto.id})


        return {income, user: userDto}
    }
    
    async get(refreshToken) {
        
        const userData = tokenService.validateRefreshToken(refreshToken)
        
        const incomes = await IncomeModel.find({user: userData.id})

        return incomes
    }
}

module.exports = new IncomeService();