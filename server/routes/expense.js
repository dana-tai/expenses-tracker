const expenseController = require("../controllers/expense");

module.exports = app => {
    app.get("/api/expenses", expenseController.findAll);
    app.post("/api/expenses", expenseController.create);
    app.get("/api/expenses/:id", expenseController.findOne);
    app.put("/api/expenses/:id", expenseController.update);
    app.delete("/api/expenses/:id", expenseController.delete);
}