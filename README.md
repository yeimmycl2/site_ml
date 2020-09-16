This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `.env`

Paste de .env in the root for take the api variables

npm install for install dependencies

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## `Forder structure`

The structure of the proyect is the follot

    ** assests: ** For images and icons
    ** components: ** Reusable components
    ** redux: ** Storage for data wich includes actions and recuders
        *item list reducer:* For the search items data  
        *loader reducer:* For cross loader
    ** styles: ** Variables styles for hole sass in the proyect
    ** view: ** View of components
        *Main:* Contains the main view with just search bar adn router
        *listProductView:* List with the product of the queries
        *productItemView:* Detail of the product