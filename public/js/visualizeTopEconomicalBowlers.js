export default function visualizeTopEconomicalBowlers(data) {
    let topEconomicalBowlers = data.topEconomicalBowlers;
    const bowlers = [];
    const run_rate = [];
    for (let bowler in topEconomicalBowlers) {
      bowlers.push(bowler);
      run_rate.push(Number(topEconomicalBowlers[bowler].toFixed(2)));
    }

   Highcharts.chart('eco-bowlers', {

      title: {
          text: '4. Top Economical Bowlers in 2015 season'
      },
  
      subtitle: {
          text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },

      chart: {
        inverted: true,
        polar: false
      },
  
      xAxis: {
          categories: bowlers,
          title: {
            text: "Top 10 Bowlers"
          }
      },
      yAxis: {
        min: 0,
        title: {
          text: "Economical Rate (Lower the better)"
        }
      },
  
      series: [{
          name: "Economical Rate",
          type: 'column',
          colorByPoint: true,
          data: run_rate,
          showInLegend: false
      }]
  
  });
}