const express = require('express');
const bodyParser = require('body-parser');
const { client, connectToDb } = require('./db'); 
const app = express();
const port = process.env.PORT || 9000; 

app.use(bodyParser.json());


connectToDb().then(() => {
    async function responseData(collection) {
        try {
          const results = await collection.find().toArray();
          return results;
        } catch (error) {
          console.error("Error fetching data:", error);
          throw error;
        }
      }
      
      app.get('/api/data', async (req, res) => {
        
      });
      
  
      app.get('/api/data', async (req, res) => {
        try {
          const db = client.db('mydb');
          const collection = db.collection('myDb');
          const results = await responseData(collection);
          res.json(results);
        } catch (error) {
          console.error("Error fetching data:", error);
          res.status(500).send({ message: 'Error retrieving data' });
        }
      });
  

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
