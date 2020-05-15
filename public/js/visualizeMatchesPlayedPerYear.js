export default function visualizeMatchesPlayedPerYear(data) {
    let matchesPlayedPerYear = data.matchesPlayedPerYear;
    const series = [];
    for (let year in matchesPlayedPerYear) {
      series.push([year, matchesPlayedPerYear[year]]);
    }
  
    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column"
      },
      title: {
        text: "1.Total number of matches played each year"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Total Matches Played"
        }
      },
      tooltip: {
        pointFormat: 'Matches Played: {point.y}'
      },
      series: [
        {
          name: "Year",
          data: series
        }
      ]
    });
  }
