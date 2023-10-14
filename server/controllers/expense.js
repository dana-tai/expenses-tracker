const Expense = require("../models/Expense");

module.exports = {
    findAll: (req, res) => {
        Expense.find()
            .then( allExpenses => res.json(allExpenses))
            .catch( err => res.status(400).json(err))
    },

    findOne: (req, res) => {
        Expense.findById(req.params.id)
            .then( oneExpense => res.json(oneExpense))
            .catch( err => res.status(400).json(err))
    },

    create: (req, res) => {
        Expense.create(req.body)
            .then( newExpense => res.json(newExpense))
            .catch( err => res.status(400).json(err))
    },

    update: (req, res) => {
        Expense.findByIdAndUpdate(req.params.id, req.body)
            .then( updatedExpense => res.json(updatedExpense))
            .catch( err => res.status(400).json(err))
    },

    delete: (req, res) => {
        Expense.findByIdAndDelete(req.params.id)
            .then( deletedExpense => res.json(deletedExpense))
            .catch( err => res.status(400).json(err))
    }
}