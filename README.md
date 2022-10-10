# Favorite Tracks

1. Fetch the content of the manifest file<sup>1</sup> and show it in a scrollable list. (support reloading the manifest file).
   - Each tile shows a non interactive rating element displayed as stars
   - Each tile shows an interactive element to set the song as a favorite. There can only be one favorite set. As soon as a song is set as favorite, all others are set to non-favorite 
2. Upon clicking on one of the list entries, the application shall navigate to a new screen
3. This new screen displays the content of the selected element. Additionally it shows:
   - A play button on top of the cover image which starts / stops the playback of the associated audio file
   - Audio playback control (load, play, pause and seek)
   - A position slider which updates its position depending on the position of the currently playing audio. It should also be able to control the current audio position with this slider<sup>2</sup>
   - The current play time and the audio duration<sup>2</sup> 
   - The interactive rating element displayed as stars. Rating can be set here
   - The interactive favorite element to set the song as a favorite. (As above, there can only be one favorite set. As soon as a song is set as favorite, all others are set to non-favorite) 

## Introduction

The repo is created using [expo](https://reactnative.dev/docs/environment-setup). 
This project is a small one but I tried to make a structure of a larger project which we need in the real world. Some of tools used in the repo are:

- **Styled components** 
	- *One of the best ways to define styles in a react app*
- **Themes** 
	- *We don't have multiple themes and even several colors in a theme but this is the best way to use any color in the app. so it is setup)*
- **Axios** for http calls
- **React Query**
	- *For the only GET request in the app we didn't necessarily need react-query. But I have set it up as what I do in a real world project. It's a useful tool to make http calls more efficiently.*
- **Redux** for state management
- **React Navigation** for navigation

And some developer tools like ESLint and Jest.

### Notes

- I tried to use meaningful commit messages and commit the code step by step.
- Regarding the API, each item didn't have a unique id so I assumed the track title to be the unique identifier in the list.

## Run

- Make sure you have setup Expo requirements
- Clone the repo
`git clone https://github.com/poormohammadi/favorite-tracks`
- Go to the project directory
`cd favorite-tracks`
- Install Node Modules
`npm install`
- Run expo
-`npm start`

Now you can run the project using [Expo Go app](https://expo.dev/client) on iOS and Android simulators or devices.

## Test

To run applications tests go to the project directory and run `npm run test`


 
   
