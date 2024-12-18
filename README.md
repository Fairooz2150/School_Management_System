# School Management System

This is a School Management System application that allows administrators to manage student fees, records, and more. This system implements role-based access control (RBAC) to effectively manage student information, library records, and fee histories, with distinct access levels for user roles like Admin, Office Staff, and Librarian.

### Roles:
- **Admin**: Full access to the system. Can create, edit, and delete users (Office Staff, Librarians), manage students, library records, and fees history.
- **Office Staff**: Can view and manage student details, manage fees history, and review library records.
- **Librarian**: Has read-only access to library records and student details.

## Features

- **Role-Based Authentication**: Ensures proper access control for different user roles.
- **Student Management**: Admin can add, edit, and delete student details.
- **Library Management**: Librarians can view and manage the library history for students.
- **Fee Management**: Office Staff can manage students' fees history, including adding remarks and payment details.
- **Confirmation Dialogs**: Confirmation prompts for critical actions like deleting records to prevent accidental changes.
- **State Management**: Redux is used for managing global state (students, library records, fees, and authentication).

## Technologies Used
- **Frontend**: React.js (with Redux for state management)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (or any other database as configured)
- **Authentication**: JWT-based authentication (or session management depending on your setup)
- **UI**: Tailwind CSS for styling

## Setup Instructions

### Prerequisites

- Node.js (v14)
- npm
- MongoDB

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Fairooz2150/School_Management_System.git
   cd School_Management_System/backend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following environment variables:

   ```bash
   PORT=5000
   MONGO_URI=<your-database-uri>
   JWT_SECRET=<your-jwt-secret-key>
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

   This will run the backend on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Run the frontend server:
   ```bash
   npm run dev
   ```

   This will start the frontend on `http://localhost:5173`.

## Adding an Admin User Manually
If you want to run the project locally, please add an admin user manually to the `users` collection in your MongoDB:

```json
{
  "_id": { "$oid": "676085dbcb9cba16b7fcd2d7" },
  "name": "Admin",
  "email": "admin@email.com",
  "password": "adminpassword",
  "role": "admin",
}
```

This will give you an admin user to log in to the application.

## Libraries Used

### Frontend (React):
- **React.js**: JavaScript library for building user interfaces.
- **React-Redux**: For state management using Redux.
- **Axios**: For making HTTP requests to the backend API.
- **Tailwind CSS**: A utility-first CSS framework for fast UI development.

### Backend:
- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for building the API.
- **MongoDB**: Database for storing school records.
- **Mongoose**: MongoDB object modeling tool.
- **jsonwebtoken (JWT)**: For handling authentication and creating JWT tokens.
- **dotenv**: For loading environment variables from `.env` file.
- **cors**: Middleware to enable Cross-Origin Resource Sharing (CORS) between frontend and backend.

### Features Available:
- **View Fees History**: View all the fee records of students.
- **View Library Usage History**: View all the Library records of students.
- **Add New Record**: Add a new fee record and Library for students.
- **Delete Record**: Delete an existing fee record.
- **Manage Students**: Add, view, and manage student records.
- **Manage Staff accounts**: Add, view, and manage staff accounts by Admin.

## Troubleshooting

1. **CORS Issues**: Ensure that the `cors` middleware is enabled in your backend for allowing frontend requests.
2. **Database Connection**: Verify your database URI in the `.env` file and ensure the database server is running.
3. **Missing Environment Variables**: Double-check that all required environment variables are correctly added to the `.env` files.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
