function getFunction(ev){
    ev.preventDefault();
var username = document.getElementById('Username').value;
var password = document.getElementById('password').value;

  if (username === 'freddy' && password === 'ElmStreet2019' ){
    console.log("correct"+ username);


    var raw = "{\n    \"username\": \"freddy\",\n    \"password\": \"ElmStreet2019\"\n}";
    var requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
      };
      
      fetch("https://freddy.codesubmit.io/login", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result)
         
        })
        .catch(error => console.log('error', error));
      
  }else{
    console.log("Please the user credentials is not correct")
  }
  

    } 