var xmlhttp = new XMLHttpRequest();
var url="/";
let text = document.getElementById("grades").textContent
document.getElementById("grades").remove()
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function (){
    if (this.readyState==4 && this.status==200){
        var data=JSON.parse(text);
        console.log(data);
       var months=data['categories'];
        console.log(months);
        var series=data['series'];
        console.log(series);

        const ctx = document.getElementById('canvas').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: '# of Votes',
                    data: series,
                    backgroundColor: 'transparent',
                    borderColor: 'red',
                    borderWidth: 4
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

}


