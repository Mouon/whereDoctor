const { MongoClient } = require("mongodb");

const url = 'mongodb+srv://user:user1234@cluster0.60xu7q2.mongodb.net/?retryWrites=true&w=majority'
let connectDB = new MongoClient(url).connect()

module.exports = connectDB
