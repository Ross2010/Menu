 ## Title and Deployment
Title: Restaurant Menu Web App
Deployment URL:

## Live Site
[Visit ](https://www.com)

##  Project Description
The Restaurant Menu Web App is a web-based platform designed to help restaurant visitors explore the menu and make informed decisions about their orders. Users can seamlessly navigate through different menu sections, watch video previews of dishes, and access detailed information about each item

## Features
- **Random Cocktail Display:** Fetches a random cocktails and displays its details.
- **Loading and Error Handling:** Provides visual feedback for loading and error states.
- **Navigation:** Allows users to return to the main menu.

## Testing
- Unit tests are located in the `tests/` directory.

## User Flow
1. Homepage: Users are greeted with an engaging video background on the homepage.
2. Random  10 cocktails details are displayed.
3.  Users can navigate to different menu sections (Breakfast, Lunch, Dinner) easily.

## API
- Used the CocktailDB API for fetching random cocktails.
- API Link: [CocktailDB API](https://www.thecocktaildb.com/api/json/v1/1/random.php)
- The component renders details of the top 10 drinks in an appealing format. For each drink, it displays the name (`strDrink`), instructions (`strInstructions`), and an image (`strDrinkThumb`).

## Technology Stack
- React for the frontend.
- Axios for making HTTP requests.
- React Router for navigation.
- CSS for styling.

