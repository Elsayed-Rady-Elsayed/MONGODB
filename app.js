const { MongoClient } = require("mongodb");

const url = "mongodb+srv://sayedrady61:012301050180@courses.b9h82.mongodb.net/";

const client = new MongoClient(url);

const main = async () => {
  await client.connect();
  console.log("connected successfully to server");
  const db = client.db("courses");
  const collection = db.collection("courses");
  await collection.insertOne({ title: "new here", price: 333 });
  const data = await collection.find().toArray();
  console.table(data);
};
main();
