export default function visualizeExtraRunsConceded(data) {
    let extraRunsConceded = data.extraRunsConceded;
    const series = [];
    for (let team in extraRunsConceded) {
      series.push([team,extraRunsConceded[team]]);
    }

    Highcharts.chart('extra-runs', {
        chart: {
            type: 'cylinder',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: '3. Extra runs conceded by each team in 2016'
        },
        plotOptions: {
        series: {
                depth: 25,
                colorByPoint: true
                }
        }, 
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Extra runs conceded'
            }
        },
        series: [{
            data: series,
            name: 'Extra Runs',
            showInLegend: false                  
        }]
    });
        
}