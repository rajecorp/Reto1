var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            //backgroundColor: 'rgb(105,186,62)',
            borderColor: 'rgb(105,186,62)',
            data: [20, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});