# Task Management App

## Overview

This is a Task Management App built with React, Redux, and Material-UI. It allows you to manage tasks, toggle their completion status, and add new tasks using a simple interface.



## Features

- Fetch tasks from a dummy API (JSONPlaceholder).
- View tasks with their completion status.
- Add a new task.
- Edit task status (mark as completed or pending).
- Pagination to navigate through tasks.

## Live Demo

Check out the live demo of the app here: [https://todo-ten-beta-58.vercel.app/]



## Tech Stack

- **Frontend**: ReactJS
- **UI Library**: Material-UI
- **Routing**: React Router
- **State Management**: Redux 

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v5.6 or higher)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Aniket-1295/TODO
   cd mytodolist
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Additional Notes

1. The tasks are fetched from a dummy API (https://jsonplaceholder.typicode.com/todos), and this data is displayed with pagination.
2. The tasks are initially loaded into the Redux store, and state changes (e.g., toggling task completion) are handled using Redux actions and reducers.
3. The app uses Material-UI components for UI design, including buttons, pagination, and typography.

## Troubleshooting

- If you face any issues with dependencies, try deleting the node_modules folder and package-lock.json (or yarn.lock), then run npm install (or yarn install) again.
- Ensure your Node.js version is compatible. If you face issues, consider updating to the latest LTS version.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## Contact

For any questions or suggestions, please contact [Aniket](mailto:aniketkamble1642002@gmail.com).
