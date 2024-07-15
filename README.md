# Task Management System

## Introduction

Task Management System is a web application built using Node.js, prisma, Sql Server, React.

## Project Structure

- TaskManagementSystem/

  - Backend/

    - src/
      - app/
        - api/
          - Task/
             - controllers/
             - repository/
             - schema/
             - services/
             - routes.js
          - User
             - controllers/
             - repository/
             - schema/
             - services/
             - routes.js
          - routes.js

        - middlewares/
          - controller.js
          - isAuthenticated.js
          - validator.js
      - utils/
         - baseError.js
         - bcrypt.js
         - execeptions.js
         - jwt.js
         - prisma.js 
      - app.js

    - prisma/
      - migrations
      - schema.prisma
    - Dockerfile
    - docker-compose.yml
    - .env
    - package-lock.json
    - package.json

## Environment Variables

To run this project, use env.example and add the your environment variables and remove .example extension


## Installation
```sh
docker-compose up
```

#### Note the attached postman collection documenting the endpoints