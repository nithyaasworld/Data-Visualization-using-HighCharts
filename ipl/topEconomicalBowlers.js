function topEconomicalBowlers(matches,deliveries){
    let matchesOf2015 = []; // This has the match ids of all the matches of the year 2015
    let bowlerDetails = {};  //This has bowler name, total runs and balls for each bowler
    let economicalRate = {}; //This object has bolwer name and economical rate
    let top10 = {}; //This Object has Top 10 Economical Bowlers and their economical rates

    //Getting the match_id(s) of all the matches of the year 2015
    matches.forEach(element => {
        if (Number([element.season])===2015){
            matchesOf2015.push(element.id);
        }
    });
    
    //Getting the Bowler name and their total runs and balls
    deliveries.forEach(element => {
        if(element.match_id in matchesOf2015){           
            if(bowlerDetails[element.bowler]){
                bowlerDetails[element.bowler]["total_runs"] += Number(element.total_runs);
                bowlerDetails[element.bowler]["total_balls"] += 1;
            }else{
                bowlerDetails[element.bowler] = {
                    "total_runs" : Number(element.total_runs),
                    "total_balls" : 1
                };
            }
        }
    });

    
    //Computing the economical rate
    for (let player in bowlerDetails){
        economicalRate[player] = bowlerDetails[player]["total_runs"]/(bowlerDetails[player]["total_balls"]/6);
    }

    //Getting the Top 10 economical bowlers
    Object.keys(economicalRate)
          .sort((a,b)=>economicalRate[a] - economicalRate[b])
          .slice(0,10)
          .forEach(e => top10[e] = economicalRate[e]);

   return top10;

}

module.exports = topEconomicalBowlers;

