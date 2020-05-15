export default function visualizeMatchesWonByTeam(data) {
    let matchesWonByTeam = data.matchesWonByTeam;
    const series = [];
    for (let team in matchesWonByTeam) {
      series.push([team, matchesWonByTeam[team]]);
    }
  
    Highcharts.chart("matches-won", {
      chart: {
        type: "column",
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
      },
      title: {
        text: "2. Number of matches won by each team over all the years of IPL"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },

      tooltip: {
        pointFormat: 'Matches Won: {point.y}'
      },

      yAxis: {
        min: 0,
        title: {
          text: "No of Matches Won"
        }
      },
      series: [
        {
          name: "Teams",
          data: series
        }
      ]
    });
  }