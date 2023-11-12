# strapi-blog-api
Moneco Frontend Test

`# Strapi Backend API

Welcome to the Strapi Backend API for Moneco Blog.

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Strapi CLI](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/cli.html)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/underscoDe/strapi-blog-api.git
   cd strapi-blog-api

1.  Install dependencies:

    bash

-   `npm install | yarn install`

    -   Configure the environment:

    Create a `.env` file in the root directory and set the necessary environment variables. You can use the `.env.example` file as a template.

    Follow the on-screen instructions to set up your database.

    -   Start the Strapi server:

    bash

1.  `npm run dev`

    The Strapi server will start running at `http://localhost:1337`.

Usage
-----

Visit `http://localhost:1337/admin` to access the Strapi admin panel. Log in with the credentials you set during the database setup.

Mine:

user: arsene@awounou.com
password: 663363359Moneco

Use the Strapi admin panel to manage your content types, create entries, and customize your API.

API Endpoints
-------------

-   Your API endpoints will be available at `http://localhost:1337/api/{content-type}`.

Deploying to Production
-----------------------

Follow the Strapi documentation for deploying your application to production:

-   [Deployment Guide](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment.html)

Contributing
------------

If you'd like to contribute to this project, please follow the guidelines in [CONTRIBUTING.md](https://chat.openai.com/c/CONTRIBUTING.md).

License
-------

This project is licensed under the [MIT License](https://chat.openai.com/c/LICENSE).