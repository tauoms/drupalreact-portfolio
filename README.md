# Drupal + React Portfolio

This project is a full-stack web application that uses **Drupal** for the backend and **React** for the frontend. The project is containerized using **Lando**, which provides an easy-to-use local development environment. The backend serves as a headless Drupal API, while the React frontend consumes this API.

## Screenshot

![Screenshot 2024-10-17 at 19 15 44](https://github.com/user-attachments/assets/8902ca19-e4c1-49b8-9eb0-0762766283ac)

## Prerequisites

Before you can run the project, make sure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Lando](https://docs.lando.dev/basics/installation.html)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/tauoms/drupalreact-portfolio.git
cd drupalreact-portfolio
```

### 2. Install Backend Dependencies

Make sure you are inside the project directory:

```bash
# Start the Lando environment
lando start
```

This will set up the Docker containers and start the Drupal backend.

### 3. Frontend Setup (React)

Navigate to the React frontend directory (/frontend):

```bash
cd frontend
```

Install Node.js dependencies:

```bash
npm install
```

### 4. Configure the API URL

Once the backend is running, you need to configure the React frontend to point to the correct API endpoint.

1. Find the API URL by running the following command inside the Lando environment:

```bash
lando info
```

You should see something like http://localhost:8000.

2. Open the api.jsx file in the /services folder of the React project.
3. Replace the placeholder with the localhost address the drupal site is running on. For example:

```bash
// api.jsx
const localhostAddress = "http://localhost:52142"; // No trailing forward slash!
```

### 5. Start the Frontend

Once you’ve configured the API, start the React development server:

```bash
npm run dev
```

### 6. Import drupal configurations and database

```bash
lando drush cim
lando db-import // + path to sql.gz file in root
```

Also rebuild drupal cache:

```bash
lando drush cr
```
