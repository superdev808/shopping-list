# Challenge
Implement a full-stack shopping list using the provided mocks. The shopping list can add, edit, and remove shopping items. 

## How to run

- Node version `18.20.4` is recommended

### Backend

- Stack
    * Node/Express
    * Sqlite3/Sequelize (for easier test/run for the reviewers)
- Code is in [backend](./backend/) directory
- `npm install` for the installation
- `npm start` for running the server
- Server is running on port [3001](./backend/index.js#L7) by default
- [db](./backend/db/) directory contains the db file [shopping-list.db](./backend/config/sequelize.js#L5)

### Frontend

- Stack
    * React / Context
    * Axios
    * Material UI
- Code is in [frontend](./frontend/) directory and bootstrapped with [Create React App]
- `npm install` for the installation
- `npm start` for running the server
- FE is running on port `3000` by default


## TODO / Possible improvement with More Time

### Backend
- Managed DB with the file in [db](./backend/db/) directory for easier review and demonstration. Consider to configure DB properly and use Postgres as recommended.

### Frontend
- Centeralize/Improve styling on FE
    * Prevent inline styling and use Theme provider
    * Define variants for consistent/maintainable code
- Set/Store environment variable properly
- Handle APIs separately in utils/etc, not inside Context