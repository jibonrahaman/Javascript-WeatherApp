const submitBtn = document.querySelector('.submit-btn');
const input = document.querySelector('.input');
const cityName = document.querySelector('.cityName');
const tem = document.querySelector('.tem');
const des = document.querySelector('.des');

submitBtn.addEventListener('click', function(){
    const input = document.querySelector('.input').value

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=92e16a89df89783767314ac812be80ce')
    .then(response => response.json())
    .then(data=>{
        console.log(data.weather[0].icon);
        const Temp = data.main.temp;
        const tempareture = (Temp - 273.15).toFixed(2)
        
        cityName.innerHTML = data.name;
        tem.innerHTML = tempareture;
        des.innerHTML = data.weather[0].description;

        // Update weather icon based on weather condition
        const weatherIcon = document.querySelector('.weather-icon');
        weatherIcon.className= 'weather-icon fas fa-cloud'
        const weatherCode = data.weather[0].icon;

        // if (weatherCode === '01d' || weatherCode == '01n') {
        //     weatherIcon.className = 'weather-icon fas fa-sun'; // Example for clear sky
        // } else if (weatherCode === '02d' || weatherCode == '02n')  {
        //     weatherIcon.className = 'weather-icon fas fa-cloud'; // Example for clouds
        // } else if (weatherCode === '03d' || weatherCode == '03n')  {
        //     weatherIcon.className = 'weather-icon fas fa-cloud-rain'; // Example for rain
        // }else if (weatherCode === '04d' || weatherCode == '04n')  {
        //     weatherIcon.className = 'weather-icon fas fa-cloud-rain'; // Example for rain
        // } else if (weatherCode === '09d' || weatherCode == '09n')  {
        //     weatherIcon.className = 'weather-icon fas fa-cloud-rain'; // Example for rain
        // } else if (weatherCode === '10d' || weatherCode == '10n')  {
        //     weatherIcon.className = 'weather-icon fas fa-cloud-rain'; // Example for rain
        // } else if (weatherCode === '13d' || weatherCode == '13n')  {
        //     weatherIcon.className = 'weather-icon fas fa-cloud-rain'; // Example for rain
        // } 
    })
});


