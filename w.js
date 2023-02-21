const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function() {
  const inputbtn = document.getElementById('input-btn').value;
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputbtn+'&appid=5bc6a7b224671f4a6b9603c21f1b2bf6')
   .then((res) => res.json())
   .then((data) =>{
     
    
      const cityName = data.name;
      const tem = data.main.temp;
      const temp = tem-273;
      const tem_max = data.main.temp_max;
      const temp_max = tem_max-273.15;
     const tem_min = data.main.temp_min;
     const temp_min = tem_min-273.15;
     const weather = data. weather[0].description;
     const weathe = data.weather[0].icon;

     document.getElementById('city').innerText =cityName;
     document.getElementById('temp').innerText =temp.toFixed(2);
     document.getElementById('temp_max').innerText =temp_max.toFixed(2);
     document.getElementById('temp_min').innerText =temp_min.toFixed(2);
     document.getElementById('weather').innerText =weather;
     document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+weathe+".png";

   })
 
})