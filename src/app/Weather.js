export class Weather {
    constructor(city, countryCode) {
        this.apiKey = "a8dbb3c3e7ecc0c0d2276e2c02bfe23a"
        this.city = city;
        this.countryCode = countryCode;
    }
    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`
        const response = await fetch(URI)
        const data = await response.json()
        console.log("weather>>>", data);
        return data
        
    }
    changeLocation(city,countryCode){
        this.city=city;
        this.countryCode=countryCode;
    }
}