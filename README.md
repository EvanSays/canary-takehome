
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

## Tech Requirements

1. Node: ```brew install node```
1. Yarn: ```npm install yarn -g```
1. Follow the React Native [doc's](https://reactnative.dev/docs/set-up-your-environment) for development environment set up
1. Android Studio (for developing on android devices) [download](https://developer.android.com/studio)


## Local Development
1. Clone the repo.
1. Run  ```yarn install``` from the root of the directory.
1. For **Android** run the following commands:
  ```bash
    cd android
    ./gradlew clean
    cd ..
  ```
  *If you receive an error that you have an incompatible JVM version, you will need to install 
  a different Java Development Kit. React Native recommends using Zulu11. More info on installation can be found under the Java Development Kit section [here](https://reactnative.dev/docs/environment-setup#:~:text=React%20Native%20requires%20at%20least,Oracle%20JDK%2014%20if%20desired.).*


### Running the app
#### Android:
  - Run ```yarn android``` to start the metro bundler, build the app and boot up the simulator. 


