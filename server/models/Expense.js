const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Field is required"]
    },
    amount: {
        type: Number,
        required: [true, "Field is required"],
        min: [0, "Must be a number greater than 0"]
    },
    paymentMethod: {
        type: String,
        required: [true, "Field is required"]
    },
    category: {
        type: String,
        required: [true, "Field is required"]
    },
}, {timestamps: true})

module.exports = mongoose.model("Expense", ExpenseSchema);