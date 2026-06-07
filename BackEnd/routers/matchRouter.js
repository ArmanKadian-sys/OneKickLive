import express from 'express';
import matchController from '../controller/matchController.js'

const matchRouter=express.Router();


matchRouter.get("/", matchController.getMatches);
matchRouter.post("/",matchController.postMatch);


export default matchRouter;