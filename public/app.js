import visualizeMatchesPlayedPerYear from './js/visualizeMatchesPlayedPerYear.js';
import visualizeMatchesWonByTeam from './js/visualizeMatchesWonByTeam.js';
import visualizeExtraRunsConceded from './js/visualizeExtraRunsConceded.js';
import visualizeTopEconomicalBowlers from './js/visualizeTopEconomicalBowlers.js';
import visualizeMatchesPlayedByEachTeam from './js/visualizeMatchesPlayedByEachTeam.js';

function fetchAndVisualizeData() {
    fetch("./data.json")
      .then(r => r.json())
      .then(rj => {
          visualizeMatchesPlayedPerYear(rj);
          visualizeMatchesWonByTeam(rj);
          visualizeExtraRunsConceded(rj);
          visualizeTopEconomicalBowlers(rj);
          visualizeMatchesPlayedByEachTeam(rj);
        }); 
  }

fetchAndVisualizeData();
  
  
  



  
  
