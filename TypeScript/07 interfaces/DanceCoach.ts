import {Coach} from "./Coach";

export class DanceCoach implements Coach{

    getDailyWorkOut(): string {
        return "You have to dance!!!";
    }

}