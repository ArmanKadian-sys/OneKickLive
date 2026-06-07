import express from 'express';
import mongoose from 'mongoose';
import matchRouter from './routers/matchRouter.js';



const app=express();

app.use(express.json());
app.use("/match", matchRouter);

const murl ="mongodb+srv://root:root@armancluster.pijfusq.mongodb.net/?appName=ArmanCluster";



mongoose.connect(murl).then(() => {
  app.listen(3000, () => {
    console.log("server started");
  });
});