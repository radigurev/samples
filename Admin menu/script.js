Chart.defaults.global.responsive = true;
Chart.defaults.global.defaultFontColor = 'blue';
Chart.defaults.global.tooltips.mode = 'label';
Chart.defaults.global.tooltips.backgroundColor = '#fff';
Chart.defaults.global.tooltips.titleColor = '#888';
Chart.defaults.global.tooltips.bodyColor = '#888';
Chart.defaults.global.animation.duration = 1500;
Chart.defaults.global.animation.easing = 'easeInOutQuart';
Chart.defaults.global.maintainAspectRatio = true;

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

var data3 = {
    datasets: [
        {
            label: "kys",
            fill: true,
            backgroundColor: "rgba(236, 13, 13, 0.397)",
            borderWidth: 2,
            borderColor: "rgba(220,220,220,1)",
            pointBorderColor: "rgba(220,220,220,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(220,220,220,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            data: [80, 22, 33, 55, 82, 63, 25],
        }
    ]
};

    
var speedCanvas = document.getElementById("canvas2");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Car A - Speed (mph)",
    data: [0, 59, 75, 20, 20, 55, 40],
    fill: false,
    borderColor: 'red'
  };

var dataSecond = {
    label: "Car B - Speed (mph)",
    data: [20, 15, 60, 60, 65, 30, 70],
    fill: false,
  borderColor: 'blue'
  };

var speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [dataFirst, dataSecond]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
     options: {
        legend: {
            labels: {
                fontColor: "#fff",
                fontSize: 18
            }
        },
          scaleFontColor: 'red',
        responsive: true,
        tooltips: {
            mode: 'single',
        },
        scales: {
            xAxes: [{
                
                ticks: {
                  fontColor: "#FFF" 
                },
               
            }],
            yAxes: [{
                display: false
            }],
        }
    }
});