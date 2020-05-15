export default function visualizeMatchesPlayedByEachTeam(data) {
    let matchesPlayedByEachTeam = data.matchesPlayedByEachTeam;
    const seriesCategories = [];
    const wins = [];
    const losses = [];
    for (let item in matchesPlayedByEachTeam){
      seriesCategories.push(item);
      wins.push(matchesPlayedByEachTeam[item]["wins"]);
      losses.push(matchesPlayedByEachTeam[item]["losses"]);
    }
    console.log(matchesPlayedByEachTeam);
    Highcharts.chart('win-loss-stats', {
      chart: {
          type: 'column'
      },
      title: {
          text: '5.Wins and Losses Statistics'
      },
      xAxis: {
          categories: seriesCategories
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Number of matches'
          },
          stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'bold',
                  color: ( // theme
                      Highcharts.defaultOptions.title.style &&
                      Highcharts.defaultOptions.title.style.color
                  ) || 'gray'
              }
          }
      },
      legend: {
          align: 'right',
          x: -30,
          verticalAlign: 'top',
          y: 25,
          floating: true,
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || 'white',
          borderColor: '#CCC',
          borderWidth: 1,
          shadow: false
      },
      tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y} <br> Total Matches: {point.stackTotal}'
      },
      plotOptions: {
          column: {
              stacking: 'normal',
              dataLabels: {
                  enabled: true
              }
          }
      },
      series: [{
          name: 'Wins',
          data: wins
      }, {
          name: 'Losses',
          data: losses
      }]
    });
}
