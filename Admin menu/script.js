Chart.defaults.global.responsive = true;
Chart.defaults.global.defaultFontColor = 'blue';
Chart.defaults.global.tooltips.mode = 'label';
Chart.defaults.global.tooltips.backgroundColor = '#fff';
Chart.defaults.global.tooltips.titleColor = '#888';
Chart.defaults.global.tooltips.bodyColor = '#888';
Chart.defaults.global.animation.duration = 1500;
Chart.defaults.global.animation.easing = 'easeInOutQuart';
Chart.defaults.global.maintainAspectRatio = true;
var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
        {
            label: "Grades",
            fill: true,
            backgroundColor: "rgba(220,220,220,0.2)",
            borderWidth: 2,
            borderColor: "rgba(220,220,220,1)",
            pointBorderColor: "rgba(220,220,220,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(220,220,220,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            data: [65, 59, 80, 81, 56, 55, 40],
        }
    ]
};

var data2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
        {
            label: "Grades",
            fill: true,
            backgroundColor: "rgba(220,220,220,0.2)",
            borderWidth: 2,
            borderColor: "rgba(220,220,220,1)",
            pointBorderColor: "rgba(220,220,220,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(220,220,220,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            data: [65, 59, 80, 81, 56, 55, 40],
        }
    ]
};

const ctx = document.getElementById('canvas');
var weeklyClicksChart = new Chart(ctx, {
    type: 'line',
    data: data,
    scaleFontColor: 'red',
    options: {
          scaleFontColor: 'red',
        responsive: true,
        tooltips: {
            mode: 'single',
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                  fontColor: "#FFF", // this here
                },
            }],
            yAxes: [{
                display: false,
                tension: 0,
                gridLines: {
                    display: false,
                },
            }],
        }
    }
});

var ctx2 = document.getElementById('canvas2');
var chart2 = new Chart(ctx2, {
    type: 'line',
    data: data2,
    scaleFontColor: 'red',
    options: {
          scaleFontColor: 'red',
        responsive: true,
        tooltips: {
            mode: 'single',
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                  fontColor: "#FFF", // this here
                },
            }],
            yAxes: [{
                display: false,
                gridLines: {
                    display: false,
                },
            }],
        }
    }
});
    
