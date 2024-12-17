import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700">Welcome, {user?.name}</h1>
      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          to="/students"
          className="p-4 bg-white border rounded shadow hover:bg-blue-100"
        >
          Manage Students
        </Link>
        <Link
          to="/library"
          className="p-4 bg-white border rounded shadow hover:bg-blue-100"
        >
          Manage Library History
        </Link>
        <Link
          to="/fees"
          className="p-4 bg-white border rounded shadow hover:bg-blue-100"
        >
          Manage Fees History
        </Link>
        <Link
          to="/staff"
          className="p-4 bg-white border rounded shadow hover:bg-blue-100"
        >
          Manage Staff Accounts
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
