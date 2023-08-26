# Next.js Weather App

This is a simple weather app built with Next.js that uses the OpenWeather free API.
![Uploading Screenshot_20230826_103926.png…]()


## Features

- See the current weather for your location
- Search for weather by city name
- View a 5 day forecast
- Responsive design

## Usage

To use the app:

1. Get an API key from [OpenWeather](https://openweathermap.org/api)
2. Clone the repository
3. Install dependencies:

   ```bash
   npm install
Create a .env.local file in the root directory

Add your OpenWeather API key to .env.local:

env
Copy code
OPEN_WEATHER_API_KEY=yourkeyhere
Run the development server:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser

The home page will show the weather for your current location based on IP address. You can search for a city in the search bar to view weather for other locations.

Built With
Next.js - The React Framework for Production
OpenWeather API - Weather API
Vercel - Deployment
Author
Your Name

License
This project is open source and available under the MIT License.
