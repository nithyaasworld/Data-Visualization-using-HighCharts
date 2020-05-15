function matchesWonByTeam(arr){
    let resultObj = {};
    arr.forEach(element => {
        if (resultObj[element.winner]) {
            resultObj[element.winner] += 1;
        }else{
            resultObj[element.winner] = 1;
        }   
    });
    delete resultObj['']; //Removing matches that resulted in draw.
    return resultObj;
}

module.exports = matchesWonByTeam;