const mongodb = require("mongodb-legacy");
//The MongoClient will give access to the functions necesary to perform CRUD operations with the db.
const MongoClient = mongodb.MongoClient;

// We want to connect to the localhost server.
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true },
    (error, client) => {
        if (error) {
            return console.log("Unable to connect to db");
        }
        const db = client.db(databaseName);
        db.collection("users").insertOne({
            name: "Peter",
            age: 41,
        });
    }
);
