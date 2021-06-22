# Budgeting App - FrontEnd

A react frontend application that utilizes a RESTful API using full CRUD on a model for transactions. Record and view a history of transactions, post new transactions, update and delete previous transactions.


## Instructions to run this application locally

1) use ```git clone https://github.com/SDAR30/budgeting-app-frontend.git``` to clone repository locally.
2) Inside directory, run ```npm install``` to install dependencies. 
3) Run ```npm start```  to start application locally on http://localhost:3000

## RESTful routes

|  #  | Action  |        URL        | HTTP Verb |    CRUD    |                  Description                   |
| :-: | :-----: | :---------------: | :-------: | :--------: | :--------------------------------------------: |
|  1  |  Index  |   /transactions   |    GET    |  **R**ead  |   Get a list (or index) of all transactions    |
|  2  |  Show   | /transactions/:id |    GET    |  **R**ead  | Get an individual view (show one transactions) |
|  3  | Create  |   /transactions   |   POST    | **C**reate |           Create a new transactions            |
|  4  | Destroy | /transactions/:id |  DELETE   | **D**elete |             Delete a transactions              |
|  5  | Update  | /transactions/:id |    PUT    | **U**pdate |             Update a transactions              |

## PAGES

#### Home: ```/```

Displays title screen with a navigation bar.

#### Transactions: ```/transactions```

Displays a 4 column grid of all transactions

#### NewTransaction: ```/transactions/new```

A form for user to enter

#### Transactions: ```/transactions/:index```

Check an existing transaction, update time, name and amount, or delete the transaction.




## Deployment

- Backend deployed on Heroku: https://calm-everglades-57780.herokuapp.com/
- Frontend deployed on Netlify: https://budgeting-frontend.netlify.app/

---

- BackEnd Github repository: https://github.com/SDAR30/budgeting-app-backend/

- Project Description: https://github.com/joinpursuit/budgeting-app-project-prompt

### Libraries Used

- react
- axios
- react-router-dom
- bootstrap
- react-bootstrap
