import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import LibrarianDashboard from "./pages/LibrarianDashboard";
import OfficeStaffDashboard from "./pages/OfficeStaffDashboard";
import StudentList from "./components/StudentList"; // Create this page for students
import LibraryHistory from "./components/LibraryHistory"; // Create this page for library history
import FeesHistory from "./components/FeesHistory"; // Create this page for fees history
import UserList from "./components/UserList";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Layout/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/librarian"
          element={
            <ProtectedRoute role="librarian">
              <LibrarianDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/office-staff"
          element={
            <ProtectedRoute role="office-staff">
              <OfficeStaffDashboard />
            </ProtectedRoute>
          }
        />
        {/* Admin-specific routes */}
        <Route
          path="/students"
          element={
            <ProtectedRoute role="admin">
              <StudentList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/library"
          element={
            <ProtectedRoute role="admin">
              <LibraryHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/fees"
          element={
            <ProtectedRoute role="admin">
              <FeesHistory/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/staff"
          element={
            <ProtectedRoute role="admin">
              <UserList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
