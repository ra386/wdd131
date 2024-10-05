const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;   

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;   



// Define static temperature and wind speed values
const temperatureCelsius = 28;
const windSpeedKmPerHour = 6;

// Function to calculate windchill factor using the metric formula
function calculateWindchillMetric(temperature, windSpeed) {
  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2);
  } else {
    return "N/A";
  }
}

// Calculate windchill and add it to the existing wind chill element
const windChill = calculateWindchillMetric(temperatureCelsius, windSpeedKmPerHour);
const windChillElement = document.getElementById("chill");
windChillElement.textContent += ` ${windChill}`;