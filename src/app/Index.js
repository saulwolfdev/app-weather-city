const {
    Weather
} = require("./Weather")
const {
    UI
} = require("./UI")
const {
    Store
} = require("./Storage")
import style from "../main.css"

const store = new Store()
const {
    city,
    countryCode
} = store.getLocationData()

const ui = new UI()
const weather = new Weather(city, countryCode)
async function fetchWeather() {
    const data = await weather.getWeather()
    console.log(data)
    ui.render(data)
}
fetchWeather()
document.querySelector("#w-change-btn").addEventListener("click", (e) => {
    e.preventDefault()
    const city = document.querySelector("#city").value
    const countryCode = document.querySelector("#countryCode").value
    store.setLocationData(city, countryCode)
    weather.changeLocation(city, countryCode)
    fetchWeather()
    console.log(city)
    console.log(countryCode)
})
document.addEventListener("DOMContentLoader", fetchWeather)