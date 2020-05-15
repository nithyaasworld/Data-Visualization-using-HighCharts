const fs = require('fs');
const csv=require('csvtojson');
const matchesPlayedPerYear = require('./ipl/matchesPlayedPerYear');
const matchesWonByTeam = require('./ipl/matchesWonByTeam');
const extraRunsConceded = require('./ipl/extraRunsConceded');
const topEconomicalBowlers = require('./ipl/topEconomicalBowlers');
const matchesPlayedByEachTeam = require('./ipl/matchesPlayedByEachTeam');
const matchesFilePath = './csv_data/matches.csv';
const deliveriesFilePath = './csv_data/deliveries.csv';
const JSON_OUTPUT_FILE_PATH = './public/data.json';

function main() {
    csv()
    .fromFile(matchesFilePath)
    .then((matchesObj)=>{      
    csv()
    .fromFile(deliveriesFilePath)
    .then((deliveriesObj) => {
        let jsonData = {
            'matchesPlayedPerYear' : matchesPlayedPerYear(matchesObj),
            'matchesWonByTeam' : matchesWonByTeam(matchesObj),
            'extraRunsConceded' : extraRunsConceded(matchesObj,deliveriesObj),
            'topEconomicalBowlers' : topEconomicalBowlers(matchesObj,deliveriesObj),
            'matchesPlayedByEachTeam' : matchesPlayedByEachTeam(matchesObj)
        };               
        saveData(jsonData);
    })
    });
}
function saveData(data){
    const jsonString = JSON.stringify(data);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, (err) => {
        if (err) throw err;
    });
}

main();
