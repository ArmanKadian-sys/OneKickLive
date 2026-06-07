import mongoose from "mongoose";

const MatchSchema = mongoose.Schema({
tournament:{type:String, required:true},
createdAt:{type: Date, required: true, default:Date.now()}, 
startedAt:{type: Date, required:false},
homeTeam:{type:String, required:true}, 
awayTeam:{type:String, required:true}, 
homeTeamScore:{type: Number, required:true},
awayTeamScore:{type: Number, required:true},
});

export default mongoose.model("Match", MatchSchema);
