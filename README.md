# Kanto Pokedex App

## Table of contents

- [Kanto Pokedex App](#kanto-pokedex-app)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Technologies](#technologies)
  - [Status](#status)
  - [Tests](#tests)

## General info

Single page app to display API data from <https://pokeapi.co/docs/v2#pokemon> and display the first 151 pokemon. I'm not happy with the way i'm fetching pokemon stats and ideally would like to add this dynamically to the Store, however this was proving to be tricky and costing time. To keep it simple, each Pokemon card maintains it's own state - however this means there is an API call each time a card renders which is inefficient. Storing the data in an Entity would have resolved this.

If I had more time, I would like to render more stats about each Pokemon, add more filters and improve the styling - for example color the card based on the Pokemon type i.e. Red for type: fire.

Note: search does not work on chrome mobile version - seems the keyup, keypress, change etc. events are not supported. 

## Technologies

- Angular 14
- NgRx
- Angular Material

## Status

Project is: alpha v0.1

## Tests

Definitely needs more unit and integration tests.
