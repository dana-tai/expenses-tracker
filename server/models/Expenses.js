const mongoose = require("mongoose");

const ExpensesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Field is required"]
    },
    amount: {
        type: Number,
        required: [true, "Field is required"]
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

module.exports = mongoose.model("Expenses", ExpensesSchema);