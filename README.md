# Event Planner Assistant (Full Stack Edition)

A comprehensive full-stack application designed to help individuals and organizations efficiently plan, schedule, and manage events. This **major update** introduces a **React** frontend, a **Node.js/Express** backend, **MongoDB** for data storage, **JWT** authentication, and optional **Docker** deployment.



## Table of Contents

1. [Key Features](#key-features)  
2. [Tech Stack](#tech-stack)  
3. [Installation](#installation)  
4. [Usage](#usage)  
5. [Project Structure](#project-structure)  
6. [Contributing](#contributing)  
7. [License](#license)


## Key Features

- **User Authentication**  
  Register and log in with JWT-based authentication to secure API routes.

- **Event Management**  
  Create, edit, view, and delete events. Each event can include a date, description, and more.

- **Responsive Interface**  
  Built with React and Bootstrap for a modern, mobile-friendly UI.

- **Protected API Endpoints**  
  Authorization tokens (JWT) ensure only authenticated users can access or modify their own events.

- **Docker Support** (Optional)  
  Quickly deploy the backend, frontend, and MongoDB as separate services using `docker-compose`.


## Tech Stack

- **Frontend**  
  - [React](https://reactjs.org/) + [React Router](https://reactrouter.com/)  
  - [Bootstrap](https://getbootstrap.com/)  

- **Backend**  
  - [Node.js](https://nodejs.org/en/) + [Express](https://expressjs.com/)  
  - [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)  

- **Authentication**  
  - [JWT (jsonwebtoken)](https://www.npmjs.com/package/jsonwebtoken) for secure token handling  
  - [bcrypt](https://www.npmjs.com/package/bcrypt) for password hashing  

- **Deployment**  
  - [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) (Optional)  

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/m-ah07/Event-Planner-Assistant.git
   ```

2. **Install Backend Dependencies**

   ```bash
   cd Event-Planner-Assistant/backend
   npm install
   ```

3. **Install Frontend Dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure Environment Variables**  
   - Create a `.env` file in `backend/` (or use another method) with variables like:
     ```
     DB_URI=mongodb://localhost:27017/event_planner
     JWT_SECRET=mysecretkey
     PORT=5000
     ```
   - Adjust these values based on your environment (local or production).

## Usage

### **Local Development (No Docker)**

1. **Start MongoDB**  
   Ensure you have a MongoDB instance running locally on port `27017`, or update `DB_URI` in your `.env`.

2. **Run Backend**  
   In the `backend` folder, start the server:
   ```bash
   npm run dev
   ```
   By default, it listens on `http://localhost:5000`.

3. **Run Frontend**  
   In another terminal, go to the `frontend` folder:
   ```bash
   npm start
   ```
   The React app will run on `http://localhost:3000`.

4. **Open the App**  
   - Visit `http://localhost:3000` in your browser.
   - Sign up or log in to create and manage events.

### **Using Docker (Optional)**

1. **Build and Run with docker-compose**  
   From the project root:
   ```bash
   docker-compose up --build
   ```
2. **Access the Services**  
   - **Frontend**: `http://localhost:3000`
   - **Backend API**: `http://localhost:5000`
   - **MongoDB** container internally at `mongo:27017` (exposed if configured in `docker-compose.yml`)


## Project Structure

```plaintext
Event-Planner-Assistant/
├── backend/
│   ├── src/
│   │   ├── app.js                  # Express server setup & main configuration
│   │   ├── routes/
│   │   │   ├── users.js            # Routes for user signup/login
│   │   │   └── events.js           # Routes for event CRUD operations
│   │   ├── controllers/
│   │   │   └── eventController.js  # Business logic for event routes
│   │   ├── models/
│   │   │   ├── User.js             # Mongoose schema/model for User
│   │   │   └── Event.js            # Mongoose schema/model for Event
│   │   └── middleware/
│   │       └── auth.js             # JWT auth middleware to protect routes
│   ├── package.json                # Backend dependencies and npm scripts
│   └── Dockerfile (optional)       # Docker setup for the backend
├── frontend/
│   ├── public/
│   │   └── index.html              # Main HTML template for the React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── EventList.jsx       # Displays list of events
│   │   │   ├── EventForm.jsx       # Form to create/edit an event
│   │   │   └── AuthForm.jsx        # Signup & login forms
│   │   ├── services/
│   │   │   └── api.js              # Axios instance & API calls with interceptors
│   │   ├── App.js                  # Main React component
│   │   └── index.js                # Entry point for React application
│   ├── package.json                # Frontend dependencies and npm scripts
│   └── Dockerfile (optional)       # Docker setup for the frontend
├── docker-compose.yml (optional)   # Defines multi-container setup (backend, frontend, DB)
├── README.md                       # Project documentation
└── LICENSE                         # License file
```

## Contributing

1. **Fork** the repository.  
2. **Create a new branch**:  
   ```bash
   git checkout -b feature/my-feature
   ```
3. **Commit your changes**:  
   ```bash
   git commit -m "Add a new feature"
   ```
4. **Push** your branch:  
   ```bash
   git push origin feature/my-feature
   ```
5. **Open a Pull Request** on GitHub.

We welcome improvements, bug fixes, and suggestions!


## License

This project is licensed under the [MIT License](LICENSE).  
Feel free to modify and distribute as needed.


---


**Enjoy planning your events with ease!** For any questions, issues, or feature requests, please [open an issue](https://github.com/marwan-ahmed-23/Event-Planner-Assistant/issues) or submit a pull request.
