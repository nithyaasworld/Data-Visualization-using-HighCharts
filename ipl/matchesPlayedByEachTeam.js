function matchesPlayedByEachTeam(arr){
    
    let teamStats = {};

    arr.forEach(element => {
       if (element.winner === element.team1){
           if(teamStats[element.team1]){
               teamStats[element.team1]['wins'] += 1;
               teamStats[element.team1]['total'] += 1; 
           }else{
               teamStats[element.team1] = {
                   'wins' : 1,
                   'losses' : 0,
                   'total' : 1,
                }
           }
            
           if(teamStats[element.team2]){
                teamStats[element.team2]['losses'] += 1;
                teamStats[element.team2]['total'] += 1; 
           }else{
                teamStats[element.team2] = {
                    'wins' : 0,
                    'losses' : 1,
                    'total' : 1,
                }
            }

        }
        else if (element.winner === element.team2){
           //Do the same thing as the if-part above but for team2 instead of team1
           if(teamStats[element.team2]){
            teamStats[element.team2]['wins'] += 1;
            teamStats[element.team2]['total'] += 1; 
            }else{
                teamStats[element.team2] = {
                    'wins' : 1,
                    'losses' : 0,
                    'total' : 1,
                }
            }
            
            if(teamStats[element.team1]){
                teamStats[element.team1]['losses'] += 1;
                teamStats[element.team1]['total'] += 1; 
            }else{
                teamStats[element.team1] = {
                    'wins' : 0,
                    'losses' : 1,
                    'total' : 1,
                }
            }
        }
        
    }); //loop ends here

    return teamStats;
    
}

module.exports = matchesPlayedByEachTeam;
