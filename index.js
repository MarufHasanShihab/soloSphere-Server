const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
app.use(express());


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      const jobsCollection = client.db("soloSphere").collection("jobs");

      // jobs related api
      app.get("/jobs",async(req,res)=>{
        const result = await jobsCollection.find().toArray();
        res.send(result);
      })
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    }
  }
  run().catch(console.dir);


app.get("/",(req,res)=>{
    res.send("Server Is Runningg")
})

app.listen(port,()=>console.log(`Your Server Is Running In ${port} Port`));

// xHK0IgPg87L31Zz2 soloSphere