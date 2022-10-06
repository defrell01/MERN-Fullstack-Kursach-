const UserModel = require('../models/user-model.js');
const bcrypt = require ('bcrypt');
const uuid = require ('uuid');
const MailService = require('./mail-service.js')

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw new Error(`User with '${email}' is already registered!`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4();
        const user = await UserModel.create({email, password: hashPassword, activationLink})
        await MailService.sendActivationMail(email, activationLink)
    }
}

module.exports = new UserService();