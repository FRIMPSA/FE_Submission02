   var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ4OTc5OTIsIm5iZiI6MTY2NDg5Nzk5MiwianRpIjoiM2E4ZDY2ZDQtM2NlYi00Yjg4LWJmZTctMzRhY2U1MjRlNTI2IiwiZXhwIjoxNjY0ODk4ODkyLCJpZGVudGl0eSI6ImZyZWRkeSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.5jLbUZz-MfQjnQBin4icixcFWjKtaeIuvkOEYJl_DPY"

   //Dashboard data   
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer "+ token);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://freddy.codesubmit.io/dashboard", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result)
    let data="";
    let bestsellers = result.dashboard.bestsellers.map(index=>{
       
        data += ` <tr>
        <td>${index.product.name}</td>
        <td></td>
        <td>${index.units}</td>
        <td>${index.revenue}</td>
      </tr>`
    });

    document.getElementById('tbody').innerHTML=data
  })

            fetch("https://freddy.codesubmit.io/dashboard", requestOptions)
              .then(response => response.json())
              .then(result => {console.log(result)
                let days = result.dashboard.sales_over_time_week;
                for(var i=1; i<=7;i++ ){
                    var arr = ['Today', 'Yesterday', 'day 3', 'day 4', 'day 5', 'day 6', 'day 7'];
                    var week = days[i]
                 
               }
          
               
          
                  let order_values=[];               
                  order_values[0] = result.dashboard.sales_over_time_week[1].orders
                  order_values[1] = result.dashboard.sales_over_time_week[2].orders
                  order_values[2] = result.dashboard.sales_over_time_week[3].orders
                  order_values[3] = result.dashboard.sales_over_time_week[4].orders
                  order_values[4] = result.dashboard.sales_over_time_week[5].orders
                  order_values[5] = result.dashboard.sales_over_time_week[6].orders
                  order_values[6] = result.dashboard.sales_over_time_week[7].orders 
                  console.log(order_values); 
               
              
          
       
                let sales_over_time_year = result.dashboard.sales_over_time_year;
                for(var i=1; i<=12;i++ ){
                    var array = ['this month', 'last month', 'month 3', 'month 4', 'month 5', 'month 6', 'month 7','month 8','month 9', 'month 10','month 11','month 12'];
                    var month = sales_over_time_year[i]// = arr[i];
                  console.log(sales_over_time_year[i])
                }
          
   
                let order_value=[];
                  
                order_value[0] =sales_over_time_year[1].orders
                order_value[1] =sales_over_time_year[2].orders
                order_value[2] =sales_over_time_year[3].orders
                order_value[3] =sales_over_time_year[4].orders
                order_value[4] =sales_over_time_year[5].orders
                order_value[5] =sales_over_time_year[6].orders
                order_value[6] =sales_over_time_year[7].orders
                order_value[7] =sales_over_time_year[8].orders
                order_value[8] =sales_over_time_year[9].orders
                order_value[9] =sales_over_time_year[10].orders 
                order_value[10] =sales_over_time_year[11].orders
                order_value[11] =sales_over_time_year[12].orders
                console.log( myChart.config.data.labels); 
              
                myChart.config.data.labels = arr;
                myChart.config.data.datasets[0].data = order_values;
                myChart.update();
    
             var check=document.getElementById("toggle-button-dark-mode")
             function change()  {
              if (check.checked) { 
                myChart.config.data.labels = array,
                myChart.config.data.datasets[0].data = order_value,
                myChart.update() 
              }
              else {
                myChart.config.data.labels = arr;
                myChart.config.data.datasets[0].data = order_values;
                myChart.update();
              }
            }     
            check.addEventListener('click', change);  
             
             })
              .catch(error => console.log('error', error))
          
          
          
              const data = {
                labels: [],
                datasets: [{
                  label: ' Revenue',
                  data: [],
                  backgroundColor: [
                    'rgba(255, 26, 104, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(0, 0, 0, 0.5)'
                  ],
                  borderColor: [
                    'rgba(255, 26, 104, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 0, 0, 1)'
                  ],
                  borderWidth: 1
                },
                             ]
              };
          
              // config 
              const config = {
                type: 'bar',
                data,
                options: {
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }
              };
          
              // render init block
              const myChart = new Chart(
                document.getElementById('myChart'),
                config
              );
            
             
                      
            
            
        