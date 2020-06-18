let sports: string[] = ["Dancing", "Tennis", "Baseball", "Volleyball"];

sports.push("NEW SPORT");
sports.push("Basketball");

for(let sport of sports){
    if(sport == "Tennis"){
        console.log(sport + " is my favourite");
    } else {
        console.log(sport);
    }
}