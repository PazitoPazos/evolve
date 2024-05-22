# Evolve

## Description
This repository is part of the Evolve project. This repo contains the fullstack application to manage Minecraft servers using NextJS with TypeScript and Websocket.

## Related repos
 - [Evolve Middleware](https://github.com/PazitoPazos/evolve-middleware)
 - [Evolve API](https://github.com/PazitoPazos/evolve-api)
 - [Evolve Vagrant](https://github.com/PazitoPazos/evolve-vagrant)

## Tech Stack

🔹 [NextJS](https://nextjs.org/)

🔹 [Websockets](https://developer.mozilla.org/es/docs/Web/API/WebSockets_API)

🔹 [TailwindCSS](https://tailwindcss.com/)

## Requirements

To run this API, you will need to have the following installed on your system:

- MySQL Server
- NodeJS 20+
- `ws` package


## Setup

1. Clone this repository on your local machine:

    ```bash
    git clone https://github.com/PazitoPazos/evolve.git
    ```

2. Enter the project directory:

    ```bash
    cd evolve
    ```

3. Install dependencies:

    ```bash
    npm install
    ```
4. Create database schema using `schema.sql` in `src/sql/` and execute it on your MySQL Server.

5. Edit your `.env` file with your own configuration:

    ```bash
    DB_HOST=YOUR_DB_HOST
    DB_PORT=YOUR_DB_PORT
    DB_USER=YOUR_DB_USER
    DB_PASS=YOUR_DB_PASSWORD
    DB_NAME=YOUR_DB_NAME
    SESSION_SECRET=YOUR_SECRET_KEY_SESSION
    ```

6. Use the `test` user for try the application:

    ```bash
    User: test
    Passord: abc123.
    ```

## Start the app locally

Start the app by running `npm run dev`.  
The app will start locally on [http://localhost:3000](http://localhost:3000).

Create a new user by going to the `/register` page.  
Sign into the app by going to the `/login` page.

## Contributions
Contributions are welcome! If you encounter any problems or have suggestions to improve this project, feel free to open an issue or send a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
