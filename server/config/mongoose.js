const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/expenses_tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log("Connected to MongoDB"))
    .catch( (err) => console.log("There was an error connecting to MongoDB: ", err))