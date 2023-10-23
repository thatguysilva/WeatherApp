<template>
  <div>
    <h1>Weather App</h1>
    <input type="text" v-model="city" placeholder="Enter a city">
    <button @click="getWeather()">Get weather</button>

    <div v-if="weatherData">
      <h2>{{ weatherData.city.name }}</h2>
      <p>{{ weatherData.main.temp }} °C</p>
      <p>{{ weatherData.weather[0].description }}</p>
    </div>
  </div>
</template>

<script>
import { openweathermap } from 'openweathermap-api-client';

export default {
  name: 'WeatherApp',
  data() {
    return {
      city: '',
      weatherData: null,
    };
  },
  methods: {
    getWeather() {
      openweathermap.currentWeather({ city: this.city }).then(response => {
        this.weatherData = response.data;
      });
    },
  },
};
</script>
