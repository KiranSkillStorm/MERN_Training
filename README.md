# MERN_Training

## Project 1: Inventory Management

- MongoDB as the backend, with Mongoose to connect with JS.
- Express to handle routes and other backend tasks
- Used Fetch to handle HTTP requests/responses
- HTML/CSS/Bootstrap for the views. 

# Organization
- Each child company is organized into a collection
- Each company has atleast one warehouse, as a Document
- Items within each warehouse are embedded documents
- items may be added until the 16MB doc limit, then a new warehouse must be made

## How to use

# front page
    - each company and associated warehouse is displayed in the cards
    - clicking each warehouse button will populate the table, with the most recently added at the bottom
    - choosing Update Item from the Nav Bar will take the user to the Form page
    - Update, Delete, and Add functions are performed here
    - Item Table in the Nav Bar will take the user back to the front page. 