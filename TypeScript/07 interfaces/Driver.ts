import {CricketCoach} from "./CricketCoach";
import {DanceCoach} from "./DanceCoach";
import {Coach} from "./Coach";

let cricketCoach = new CricketCoach();
let danceCoach = new DanceCoach();

let coaches: Coach[] = [];

coaches.push(cricketCoach);
coaches.push(danceCoach);

for(let coach of coaches){
    console.log(coach.getDailyWorkOut());
}