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
        
        const Temp = data.main.temp;
        const tempareture = (Temp - 273.15).toFixed(2)
        

        cityName.innerHTML = data.name;
        tem.innerHTML = tempareture;
        des.innerHTML = data.weather[0].description
    })
});
