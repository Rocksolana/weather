let button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')


button.addEventListener('click',function(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&units=metric&APPID=5d066958a60d315387d9492393935c19 `)
    .then(res => res.json())
    .then(data => {
        console.log(data);
       let temp = document.querySelector(".temp");
        let pressure = document.querySelector(".pressure");
        let description = document.querySelector(".description");
        let humidity = document.querySelector(".humidity");
        let speed = document.querySelector(".speed");
        let deg = document.querySelector(".deg");
        let img = document.querySelector(".icon");
   
        temp.innerHTML = "Температура " + data.main.temp;
        pressure.innerHTML = "Тиск " + data.main.pressure;
        description.innerHTML = "Опис " + data.weather[0].description;
        humidity.innerHTML = "Вологість " + data.main.humidity;
        speed.innerHTML = "Швидість вітру " + data.wind.speed;
        deg.innerHTML = "Напрям в градусах " + data.main.deg;
        img.setAttribute("src",`http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
   })
     
})
/*Response*/
 