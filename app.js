const submitBtn = document.querySelector('.submit-btn');
const input = document.querySelector('.input');

submitBtn.addEventListener('click', function(){
    const input = document.querySelector('.input').value
      
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=92e16a89df89783767314ac812be80ce')
    .then(response => response.json())
    .then(data=>{
        console.log(data)
    })
});
