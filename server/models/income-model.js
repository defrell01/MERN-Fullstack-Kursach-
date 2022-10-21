const { Schema, model } = require('mongoose');

const IncomeSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: 'Title is required'
    },

    amount: {
        type: Number,
        trim: true,
        required: 'Amount is required'
    },

    category: {
        type: String,
        trim: true,
        required: 'Category is required'
    },

    incurred: {
        type: Date,
        default: Date.now 
    },

    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
})

module.exports = model('Income', IncomeSchema)