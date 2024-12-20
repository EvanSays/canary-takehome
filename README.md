
# Mobile Canary
![Alt text](https://i.imgur.com/8FgAoA0.png)

Mobile Canary is the Project Canary mobile/tablet app written in react-native. 

## Assignment

The goal of this exercise is to simulate a connection to third party sensor that is moving through an area collecting pollutant and air quality data.

This repo is derived from an early version of a mobile application developed by Project Canary. There may be some out of date libraries. Don't be too concerned about that, but if you'd like to update anything feel free to.

For the purposes of this exercise only worry about running the Android version of the app.

Map Screen - Visualize the provided data on a map.
Chart Screen - Visualize the Methane and Ethane data on a timeseries chart.
Bonus - Can you set up the app to mock as if the data is streaming in live?

Mock data can be found in \src\mock-data


## Local Development
1. Clone the repo.
1. Run  ```npx expo install``` from the root of the directory.



### Running the app
#### Android:
- Run ```npx expo start``` to start the metro bundler, build the app and boot up the simulator. 
- When metro is running, you can press ```a``` to open the android simulator. Or ```i``` to open the iOS simulator.

