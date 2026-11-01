let apiKey = '68eb9a82e650df54c98feebbf88e20d7';
let button = document.querySelector('button');  
let input = document.querySelector('input');

// ---- added: result card created with DOM manipulation ----
let resultBox = document.createElement('div');
resultBox.id = 'result';
document.body.appendChild(resultBox);

const showWeather = (d) => {
    const temp = Math.round(d.main.temp - 273.15);
    const feels = Math.round(d.main.feels_like - 273.15);
    const icon = d.weather[0].icon;
    resultBox.innerHTML = `
        <div class="top">
            <div>
                <h2>${d.name}, ${d.sys.country}</h2>
                <p class="desc">${d.weather[0].description}</p>
            </div>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">
        </div>
        <div class="temp">${temp}°C</div>
        <div class="stats">
            <div><span>Feels like</span><b>${feels}°C</b></div>
            <div><span>Humidity</span><b>${d.main.humidity}%</b></div>
            <div><span>Wind</span><b>${d.wind.speed} m/s</b></div>
            <div><span>Pressure</span><b>${d.main.pressure} hPa</b></div>
        </div>
    `;
    resultBox.classList.add('show');
        // weather theme for the background
    const main = d.weather[0].main.toLowerCase();
    const night = icon.endsWith('n');
    let theme = 'mist';
    if (main === 'clear') theme = night ? 'clear-night' : 'clear-day';
    else if (main === 'clouds') theme = 'clouds';
    else if (main === 'rain' || main === 'drizzle') theme = 'rain';
    else if (main === 'thunderstorm') theme = 'thunder';
    else if (main === 'snow') theme = 'snow';
    document.documentElement.dataset.weather = theme;
};
// ---- end of added block ----

geoURL = (city) => {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
}

weatherURL = (lat, lon) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
}

button.addEventListener('click', () => {
    let url = geoURL(input.value); // For getting latitute and longitute of a city this url is needed
    axios.get(url)
        .then(res => {
            let data = res.data[0];
            let lat = data.lat;
            let lon = data.lon;

            return { lat, lon }
        })
        .then(data => {
            let lat = data.lat;
            let lon = data.lon;
            let url = weatherURL(lat, lon);
            console.log(url)

            axios.get(url)
                .then(res => {
                    let data = res.data;
                    console.log(data);
                    showWeather(data); // added
                })

        })
        .catch(err => {
            console.log(err);
        })
})