<template>
  <div>
    <h2>Weather Report</h2>
    <input v-model="city" placeholder="Enter city name" />
    <button @click="getWeather">Get Weather</button>
    <div v-if="weatherData">
      <p>City: {{ weatherData.location.name }}</p>
      <p v-if="weatherData.current">
        Temperature: {{ weatherData.current.temp_c }}°C
      </p>
      <p v-if="weatherData.current.last_updated">
        Last Updated: {{ weatherData.current.last_updated }}
      </p>
    </div>
    <p v-if="error" style="color: red;">Error fetching weather data: {{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      city: '',
      weatherData: null,
      error: null,
    };
  },
  methods: {
    getWeather() {
      const apiKey = '1b98533363a543ef8a021313232410'; // Replace with your WeatherAPI key
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.city}`;
      axios
        .get(url)
        .then(response => {
          this.weatherData = response.data;
          this.error = null; // Reset the error if the request is successful
        })
        .catch(error => {
          this.error = error.message;
          this.weatherData = null; // Reset the weatherData if there's an error
        });
    },
  },
};
</script>
