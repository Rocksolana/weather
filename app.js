let weather = {
    apiKey:"5d066958a60d315387d9492393935c19 ",
    fetchWeather:function(city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data){
        let name = document.querySelector(".city");
        let temp = document.querySelector(".temp");
        let pressure = document.querySelector(".pressure");
        let description = document.querySelector(".description");
        let humidity = document.querySelector(".humidity");
        let speed = document.querySelector(".speed");
        let deg = document.querySelector(".deg");
        let img = document.querySelector(".icon");
   
        name.innerHTML = "Місто: " + data.name;
        temp.innerHTML = "Температура: " + data.main.temp;
        pressure.innerHTML = "Тиск: " + data.main.pressure;
        description.innerHTML = "Опис: " + data.weather[0].description;
        humidity.innerHTML = "Вологість: " + data.main.humidity;
        speed.innerHTML = "Швидість вітру: " + data.wind.speed;
        deg.innerHTML = "Напрям в градусах: " + data.wind.deg;
        img.setAttribute("src",`http://openweathermap.org/img/w/${data.weather[0].icon}.png`)

    },
    search:function(){
        this.fetchWeather(document.querySelector(".inputValue").value);
    }
};
document.querySelector(".btn").addEventListener("click", function(){
    weather.search();

});