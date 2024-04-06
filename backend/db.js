const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydb');
    const datas = database.collection('data').find({}).toArray();

    // Query for a movie that has the title 'Back to the Future'
    const query = user => user.Users.some(mentor => mentor.email === "amarjindal123@mentor.upes.ac.in");
    const email = await datas.findOne(query);

    console.log(email);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);