import Match from "../models/Match.js";



const getMatches=async(req, res)=>{
    const mathches=await Match.find();

    res.json({matches});
    return;
}


const postMatch=async(req, res)=>{
    const {tournament, startedAt, homeTeam, awayTeam, homeTeamScore, awayTeamScore}=req.body;


    const match=new Match({
      tournament, startedAt, homeTeam, awayTeam, homeTeamScore, awayTeamScore
    });

    await match.save();

    res.json({message:"The match has been saved"});
    return;
}


export default {
  getMatches,
  postMatch
};