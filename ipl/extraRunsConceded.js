function extraRunsConceded(matchesData,deliveriesData){
    let matchesOfYear2016 = matchesData.filter(x => x["season"] === '2016')
                                       .map(x => x.id);
    let extraRunsConceded = {};
    deliveriesData.forEach(element => {
        if(element['match_id'] in matchesOfYear2016){
            if(extraRunsConceded[element.batting_team]){
                extraRunsConceded[element.batting_team] += Number(element.extra_runs);
            }else{
                extraRunsConceded[element.batting_team] = Number(element.extra_runs);
            }
        }
    });
    return extraRunsConceded;
}

module.exports = extraRunsConceded;