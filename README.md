
![GitHub license](https://img.shields.io/badge/license-MIT-black.svg)

# Social Network API

## Description

This project is an API for a social network web application. It allows users to share their thoughts, react to friends' thoughts, and create a friend list. The API is built using Express.js for routing, MongoDB for the database, and the Mongoose ODM. It provides a foundation for building a full-stack social networking application.

### Motivation

The motivation behind this project is to gain a better understanding of building APIs for social networking applications. By implementing the API functionalities, we can explore the concepts of user interactions, thought sharing, reactions, and friend connections in a social network context.

### Problem Solved

This API solves the challenge of creating a backend system for a social networking application. It provides endpoints and database structures to handle user authentication, thought sharing, reaction management, and friend connections. By using this API as a foundation, developers can build frontend applications that enable users to interact and share content within a social network.

### Learning Experience

Throughout this project, we learned how to use Express.js for routing and handling API requests. We also gained knowledge about MongoDB as a NoSQL database and the Mongoose ODM for data modeling and management. By working on this project, we furthered our understanding of building scalable and efficient APIs and improved our skills in backend development.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies by running the command: `npm install`.
4. Configure the MongoDB connection by providing the necessary credentials and connection details in the project's configuration files.
5. Start the server by running the command: `npm start`.
6. The API will now be accessible at `http://localhost:3000`.

## Usage

To use the Social Network API, you can make HTTP requests to the available endpoints using a tool like [Insomnia](https://insomnia.rest/).

Refer to the API documentation for detailed information on the available endpoints, request/response formats, and authentication requirements.

### Example Endpoint

To retrieve a list of thoughts from a user, send a GET request to `/api/thoughts/:userId` where `:userId` is the ID of the user.

```http
GET /api/thoughts/1234567890
```


## Credits

This project was developed by [Dexter Jules](https://github.com/iam-dj).

## License

MIT License
Copyright (c) 2023 [Your Name]
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE

 WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

In this project, the following dependencies were used:
- [express](https://www.npmjs.com/package/express): "^4.18.2"
- [mongoose](https://www.npmjs.com/package/mongoose): "^7.2.0"

Additionally, [Insomnia](https://insomnia.rest/) was used to record and test the API routes.

Please refer to the project documentation for further details on installation, usage, and API functionalities.
