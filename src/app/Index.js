const {
    Weather
} = require("./Weather")
const {
    UI
} = require("./UI")

import style from "../main.css"


const ui = new UI()
const weather = new Weather("London", "uk")
fetchWeather()
async function fetchWeather() {
    const data = await weather.getWeather()
    console.log(data)
    ui.render(data)
}
document.addEventListener("DOMContentLoader", fetchWeather)
